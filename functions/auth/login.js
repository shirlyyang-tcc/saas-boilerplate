import { createSupabaseClient } from "../libs/supabase";

function getSetCookie(cookie) {
  const cookieArr = [
    `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`,
  ];

  const key2name = {
    expires: "Expires",
    max_age: "Max-Age",
    domain: "Domain",
    path: "Path",
    secure: "Secure",
    httponly: "HttpOnly",
    samesite: "SameSite",
  };

  Object.keys(key2name).forEach((key) => {
    
    if (cookie[key] !== undefined) {
      cookieArr.push(`${key2name[key]}=${cookie[key]}`);
    }
  });

  return cookieArr.join("; ");
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      return new Response("Email and password are required", { status: 400 });
    }

    const { data, error } = await createSupabaseClient(
      env,
    ).auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return new Response(error.code, { status: 500 });
    }

    const { access_token, refresh_token } = data.session;
    // 返回 JSON，不再设置 cookie
    return new Response(JSON.stringify({
      access_token,
      refresh_token,
      user_id: data.user.id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch(e) {
    console.log(e);
    return new Response(e.message, { status: 500 });
  }
}
