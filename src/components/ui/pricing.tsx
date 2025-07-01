"use client"

import React from 'react'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuthDialog } from '@/components/ui/auth-dialog-provider';
import { useToast } from '@/components/ui/toast';
import { getApiBase } from '@/lib/utils';

interface PricingProps {
  dict?: {
    pricing: {
      mostPopular: string,
      plans: {
        name: string
        description: string
        price: string
        period: string
        popular: boolean
        features: string[]
        buttonText: string
      }[]
    }
  }
}

export function Pricing({ dict }: PricingProps) {
  const pricingPlans = dict?.pricing.plans || []
  const { showLogin } = useAuthDialog();
  const { showToast } = useToast();
  const [loadingIndex, setLoadingIndex] = React.useState<number | null>(null);

  // 检查登录态
  function isLoggedIn() {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('sb-access-token');
  }

  // 结账跳转
  async function handleCheckout(planName: string, index: number) {
    if (!isLoggedIn()) {
      // 记录待跳转计划
      localStorage.setItem('pendingCheckoutPlan', planName);
      showLogin();
      return;
    }
    setLoadingIndex(index);
    try {
      const apiBase = getApiBase();
      const accessToken = localStorage.getItem('sb-access-token') || '';
      const refreshToken = localStorage.getItem('sb-refresh-token') || '';
      const res = await fetch(`${apiBase}/stripe/checkout?plan=${encodeURIComponent(planName)}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'x-refresh-token': refreshToken
        }
      });
      if (res.redirected) {
        window.location.href = res.url;
        return;
      }
      if (res.status === 200) {
        // 兼容直接返回 url
        const data = await res.json().catch(() => null);
        if (data && data.url) {
          window.location.href = data.url;
          return;
        }
      }
      const text = await res.text();
      showToast(text || 'Checkout failed', 'error');
    } catch (e: any) {
      showToast(e.message || 'Network error', 'error');
    } finally {
      setLoadingIndex(null);
    }
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col h-full ${
                plan.popular 
                  ? 'border-primary shadow-lg' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" size="default" icon={Star} iconPosition="left">
                    {dict?.pricing?.mostPopular || "Most Popular"}  
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-gradient text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handleCheckout(plan.name, index)}
                    loading={loadingIndex === index}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 