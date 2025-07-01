import { createStripe } from '../libs/stripe';
import { createSupabaseAdminClient } from '../libs/supabase-admin';


export async function onRequestGet(context) {
  const { request, env } = context;
  // get plan id
  const { plan, price: priceId } = request.url.split('?').pop().split('&').reduce((prev, cur) => {
    const [key, value] = cur.split('=');
    prev[key] = value;
    return prev;
  }, {});
  const stripe = createStripe(context.env);

  // 1. 优先从 Authorization 头获取 access token
  let accessToken = null;
  let refreshToken = null;
  const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    accessToken = authHeader.replace('Bearer ', '');
  }
  refreshToken = request.headers.get('x-refresh-token');

  // not logged in
  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 403 });
  }

  // exchange accessToken to supabase id
  const supabase = createSupabaseAdminClient(env);
  const { data: userData, error: sessionError } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  if (sessionError || !userData?.user) {
    return new Response('Invalid session', { status: 401 });
  }
  const sbId = userData.user.id;
  console.log("sbId", sbId);

  try {
    const stripeCustomer = await supabase.from('customers').select('payment_customer_id').eq('id', sbId).single();
    console.log("stripeCustomer", stripeCustomer);
    if (!stripeCustomer.data) {
      return new Response('Customer not found', { status: 403 });
    }
    const { payment_customer_id } = stripeCustomer.data;


    const params = {
      customer: payment_customer_id,
      success_url: `${env.STRIPE_CALLBACK_URL}/account`,
      cancel_url: `${env.STRIPE_CALLBACK_URL}/`,
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ]
    }

    const session = await stripe.checkout.sessions.create(params);
    const { url } = session;

    return Response.redirect(url, 302);
  } catch (err) {
    console.log("err", err);
    return new Response(err.message, { status: 500 });
  }

}