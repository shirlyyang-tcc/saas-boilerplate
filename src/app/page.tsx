"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

export default function RootPage() {
  const router = useRouter();
  const [loadingText, setLoadingText] = useState('Detecting language... / 检测语言中...');

  useEffect(() => {
    // 检测浏览器语言
    const detectLanguage = () => {
      // 尝试从 localStorage 获取用户之前选择的语言
      const savedLanguage = localStorage.getItem('preferred-language');
      if (savedLanguage && locales.includes(savedLanguage as any)) {
        return savedLanguage;
      }

      // 获取浏览器语言设置
      const browserLanguages = navigator.languages || [navigator.language];
      
      for (const lang of browserLanguages) {
        // 处理 'zh-CN', 'zh-TW' 等变体，统一为 'zh'
        const langCode = lang.split('-')[0].toLowerCase();
        
        // 检查是否支持这个语言
        if (locales.includes(langCode as any)) {
          return langCode;
        }
      }

      // 如果没有匹配的语言，返回默认语言
      return defaultLocale;
    };

    // 异步加载对应语言的字典文本
    const loadLocalizedText = async () => {
      const detectedLanguage = detectLanguage();
      console.log("detectedLanguage------", detectedLanguage);
      
      try {
        const dict = await getDictionary(detectedLanguage as any);
        setLoadingText(dict.root.detectingLanguage);
      } catch (error) {
        console.warn('Failed to load dictionary, using default text');
      }
      
      // 跳转到检测到的语言页面
      router.replace(`/${detectedLanguage}`);
    };

    loadLocalizedText();
  }, [router]);

  // 显示加载状态
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">{loadingText}</p>
      </div>
    </div>
  );
} 