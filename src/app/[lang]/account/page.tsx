'use client';
import { Layout } from '@/components/layout/layout';
import { SectionLayout } from '@/components/layout/section-layout';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { useEffect, useState } from 'react';

export default async function AccountPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  // 仅在客户端渲染用户信息
  // 这里用简单的 JS 变量名，实际项目可用更安全的用户中心方案
  // 由于 Next.js App Router 的页面默认是服务端渲染，这里用 useEffect + useState
  // 但本模板仅做展示
  return (
    <Layout dict={dict}>
      <SectionLayout
        title={'Account'}
        description={'Manage your account information and settings.'}
        locale={params.lang}
      >
        <AccountInfo dict={dict} />
      </SectionLayout>
    </Layout>
  );
}

function AccountInfo({ dict }: { dict: any }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserId(localStorage.getItem('sb-user-token'));
      setEmail(localStorage.getItem('sb-user-email'));
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-card rounded-xl shadow p-8 flex flex-col gap-6">
      <div>
        <div className="text-sm text-muted-foreground mb-1">{'User ID'}</div>
        <div className="font-mono break-all text-lg">{userId || <span className="text-muted-foreground">-</span>}</div>
      </div>
      <div>
        <div className="text-sm text-muted-foreground mb-1">{dict?.form?.labels?.emailAddress || 'Email'}</div>
        <div className="font-mono break-all text-lg">{email || <span className="text-muted-foreground">-</span>}</div>
      </div>
      {/* 可扩展更多用户信息 */}
    </div>
  );
} 