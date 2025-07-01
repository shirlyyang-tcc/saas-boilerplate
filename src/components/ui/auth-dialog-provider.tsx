"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import { Github, Mail, User, Lock, Check, ChevronDown } from 'lucide-react';
import { getApiBase } from '@/lib/utils';

// 替换 Google 图标为自定义 SVG
function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g>
        <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.531-6.656-2.531-5.523 0-10 4.477-10 10s4.477 10 10 10c5.781 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.648z" fill="#4285F4"/>
        <path d="M3.545 7.345l3.281 2.406c.891-1.711 2.578-2.812 4.414-2.812 1.172 0 2.242.406 3.078 1.078l2.922-2.844c-1.672-1.547-3.844-2.484-6.5-2.484-3.828 0-7.047 2.617-8.219 6.156z" fill="#34A853"/>
        <path d="M12 22c2.672 0 4.922-.883 6.594-2.406l-3.047-2.492c-.844.594-1.922.953-3.547.953-2.734 0-5.047-1.844-5.875-4.344l-3.281 2.531c1.156 3.523 4.375 6.058 8.156 6.058z" fill="#FBBC05"/>
        <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.531-6.656-2.531-5.523 0-10 4.477-10 10s4.477 10 10 10c5.781 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.648z" fill="#EA4335" fillOpacity=".7"/>
      </g>
    </svg>
  );
}

// Login form
function SocialLoginButtons({ onSocialLogin, dict }: { onSocialLogin: (provider: 'google' | 'github') => void, dict: any }) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => onSocialLogin('google')}
      >
        <GoogleIcon className="w-5 h-5" />
        {dict?.auth?.loginWithGoogle || '使用 Google 登录'}
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => onSocialLogin('github')}
      >
        <Github className="w-5 h-5" />
        {dict?.auth?.loginWithGithub || '使用 GitHub 登录'}
      </Button>
    </div>
  );
}

function LoginForm({ dict, onSwitch }: { dict: any; onSwitch: () => void }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function onSocialLogin(provider: 'google' | 'github') {
    alert(`Social login: ${provider}`);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const apiBase = getApiBase();
      const res = await fetch(`${apiBase}/auth/login`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const msg = await res.text();
        setError(msg || (dict?.auth?.loginError || "Login failed"));
      } else {
        // 登录成功，存储 token 到 localStorage
        const data = await res.json();
        localStorage.setItem("sb-access-token", data.access_token);
        localStorage.setItem("sb-refresh-token", data.refresh_token);
        // 检查是否有待跳转 checkout
        const pendingPlan = localStorage.getItem('pendingCheckoutPlan');
        if (pendingPlan) {
          localStorage.removeItem('pendingCheckoutPlan');
          const apiBase = getApiBase();
          const accessToken = localStorage.getItem('sb-access-token') || '';
          const refreshToken = localStorage.getItem('sb-refresh-token') || '';
          // fetch checkout，和 pricing 保持一致
          try {
            const res = await fetch(`${apiBase}/stripe/checkout?plan=${encodeURIComponent(pendingPlan)}`, {
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
              const data = await res.json().catch(() => null);
              if (data && data.url) {
                window.location.href = data.url;
                return;
              }
            }
            const text = await res.text();
            alert(text || 'Checkout failed');
          } catch (e: any) {
            alert(e?.message || 'Checkout error');
          }
          return;
        }
        window.location.reload();
      }
    } catch (e: any) {
      setError(e.message || (dict?.auth?.networkError || "Network error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SocialLoginButtons onSocialLogin={onSocialLogin} dict={dict} />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">{dict?.form?.labels?.emailAddress || '邮箱'}</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={dict?.form?.placeholders?.email || '您的邮箱@example.com'}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">{dict?.form?.labels?.password || '密码'}</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={dict?.form?.placeholders?.password || '请输入密码'}
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "..." : dict?.auth?.loginButton || '登录'}
        </Button>
        <div className="text-center text-sm text-muted-foreground mt-4">
          {dict?.auth?.noAccount || '还没有账号？'}{' '}
          <button type="button" className="text-primary hover:underline" onClick={onSwitch}>
            {dict?.auth?.registerLink || '注册新账号'}
          </button>
        </div>
      </form>
    </>
  );
}

// Registration form
function RegisterForm({ dict, onSwitch }: { dict: any; onSwitch: () => void }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function onSocialLogin(provider: 'google' | 'github') {
    alert(`Social login: ${provider}`);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError(dict?.form?.errorPasswordMismatch || "Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const apiBase = getApiBase();
      
      const res = await fetch(`${apiBase}/auth/signup`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const msg = await res.text();
        setError(msg || (dict?.auth?.registerError || "Register failed"));
      } else {
        window.location.reload();
      }
    } catch (e: any) {
      setError(e.message || (dict?.auth?.networkError || "Network error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SocialLoginButtons onSocialLogin={onSocialLogin} dict={dict} />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">{dict?.form?.labels?.emailAddress || '邮箱'}</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={dict?.form?.placeholders?.email || '您的邮箱@example.com'}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">{dict?.form?.labels?.password || '密码'}</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={dict?.form?.placeholders?.password || '请输入密码'}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">{dict?.form?.labels?.confirmPassword || '确认密码'}</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={dict?.form?.placeholders?.confirmPassword || '请再次输入密码'}
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "..." : dict?.auth?.registerButton || '注册'}
        </Button>
        <div className="text-center text-sm text-muted-foreground mt-4">
          {dict?.auth?.haveAccount || '已有账号？'}{' '}
          <button type="button" className="text-primary hover:underline" onClick={onSwitch}>
            {dict?.auth?.loginLink || '去登录'}
          </button>
        </div>
      </form>
    </>
  );
}

// Context
interface AuthDialogContextProps {
  open: boolean;
  type: 'login' | 'register';
  showLogin: () => void;
  showRegister: () => void;
  close: () => void;
}
const AuthDialogContext = createContext<AuthDialogContextProps | undefined>(undefined);

export function useAuthDialog() {
  const ctx = useContext(AuthDialogContext);
  if (!ctx) throw new Error('useAuthDialog must be used within AuthDialogProvider');
  return ctx;
}

export function AuthDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'login' | 'register'>('login');
  const [dict, setDict] = useState<any>(null);
  const params = useParams();
  const lang = (params?.lang as Locale) || 'zh';

  React.useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  const showLogin = () => {
    setType('login');
    setOpen(true);
  };
  const showRegister = () => {
    setType('register');
    setOpen(true);
  };
  const close = () => setOpen(false);

  return (
    <AuthDialogContext.Provider value={{ open, type, showLogin, showRegister, close }}>
      {children}
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title={type === 'login' ? dict?.auth?.loginTitle : dict?.auth?.registerTitle}
      >
        {type === 'login' ? (
          <LoginForm dict={dict} onSwitch={showRegister} />
        ) : (
          <RegisterForm dict={dict} onSwitch={showLogin} />
        )}
      </Dialog>
    </AuthDialogContext.Provider>
  );
} 