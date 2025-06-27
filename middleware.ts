import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './src/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 如果是根路径，让前端页面处理语言检测
  if (pathname === '/') {
    return NextResponse.next();
  }
  if (pathname.includes('blocks/preview')) {
    return NextResponse.next();
  }

  // 检查路径中是否已经包含支持的语言
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果没有语言标识，重定向到默认语言
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // 跳过内部路径 (_next)
    '/((?!_next|api|favicon.ico|.*\\..*|.*\\.|$).*)',
    '/'
  ],
}; 