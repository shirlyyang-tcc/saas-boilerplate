"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, User, LogOut } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LanguageSwitcher from '@/components/language-switcher'
import { useAuthDialog } from '@/components/ui/auth-dialog-provider'

interface HeaderProps {
  dict?: Dictionary
}

export function Header({ dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { showLogin } = useAuthDialog()
  
  // Extract current language from path
  const currentLang = (pathname.split('/')[1] || 'en') as Locale
  
  // Use default values if dict is not provided
  const siteInfo = dict?.site || {
    name: "EdgeOne Saas Starter"
  }
  const headerConfig = dict?.header || {
    navigation: [],
    cta: { text: "Get Started", href: "/pricing" }
  }

  // Add language prefix to navigation links
  const getLocalizedHref = (href: string) => {
    if (href === '/') {
      return `/${currentLang}`
    }
    return `/${currentLang}${href}`
  }

  // Check if link is current page
  const isActive = (href: string) => {
    const localizedHref = getLocalizedHref(href)
    if (href === '/') {
      // For homepage, need exact match to avoid false positives with other pages
      return pathname === localizedHref || pathname === `${localizedHref}/`
    }
    // For other pages, use startsWith matching
    return pathname.startsWith(localizedHref) && pathname !== `/${currentLang}` && pathname !== `/${currentLang}/`
  }

  // 登录状态
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(!!localStorage.getItem('sb-access-token'));
    }
  }, []);

  // 登出逻辑
  const handleLogout = () => {
    localStorage.removeItem('sb-access-token');
    localStorage.removeItem('sb-refresh-token');
    window.location.reload();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={getLocalizedHref('/')} className="text-2xl font-bold text-primary">
              {siteInfo.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {headerConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={getLocalizedHref(item.href)}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher currentLang={currentLang} dict={dict} />
            
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={dict?.common?.common?.toggleTheme || "Toggle theme"}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* 登录后显示 Account icon 按钮和登出按钮，未登录显示 CTA */}
            {isLoggedIn ? (
              <>
                <Link
                  href={getLocalizedHref('/account')}
                  className="hidden md:inline-flex items-center justify-center bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors"
                  aria-label={'Account'}
                  title={'Account'}
                >
                  <User className="h-5 w-5" />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:inline-flex"
                  onClick={handleLogout}
                  aria-label={'Sign out'}
                  title={'Sign out'}
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button
                className="hidden md:inline-flex bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                onClick={showLogin}
              >
                {headerConfig.cta.text}
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {headerConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={getLocalizedHref(item.href)}
                  className={`transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary font-semibold bg-primary/10 px-3 py-2 rounded-md'
                      : 'text-foreground hover:text-primary px-3 py-2'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <LanguageSwitcher currentLang={currentLang} dict={dict} />
              </div>
              {isLoggedIn ? (
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    href={getLocalizedHref('/account')}
                    className="bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors"
                    aria-label={'Account'}
                    title={'Account'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => { setIsMenuOpen(false); handleLogout(); }}
                    aria-label={'Sign out'}
                    title={'Sign out'}
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center mt-4"
                  onClick={() => { setIsMenuOpen(false); showLogin(); }}
                >
                  {headerConfig.cta.text}
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 