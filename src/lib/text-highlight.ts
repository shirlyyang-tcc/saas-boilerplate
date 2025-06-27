/**
 * Text highlighting utility for adding styled spans to specific keywords
 * 文字高亮工具，为特定关键词添加样式
 */

interface HighlightConfig {
  en: string | string[];        // English keywords to highlight
  zh: string | string[];        // Chinese keywords to highlight  
  className?: string;           // CSS class for highlighting (default: 'text-primary')
  tagName?: string;            // HTML tag to wrap highlighted text (default: 'span')
}

interface HighlightTextOptions {
  text: string;                // The text to process
  locale?: string;             // Current locale ('en', 'zh', etc.)
  highlights: HighlightConfig | HighlightConfig[]; // Keywords to highlight
}

/**
 * Highlights specific keywords in text with styled spans
 * 为文本中的特定关键词添加样式
 * 
 * @param options - Configuration object
 * @returns HTML string with highlighted keywords
 * 
 * @example
 * // Single keyword highlighting
 * const result = highlightText({
 *   text: "Build amazing SaaS applications",
 *   locale: "en",
 *   highlights: { en: "SaaS", zh: "SaaS应用" }
 * });
 * 
 * @example
 * // Multiple keywords with custom styling
 * const result = highlightText({
 *   text: "Ship Fast with Next.js",
 *   locale: "en", 
 *   highlights: [
 *     { en: "Ship Fast", zh: "快速发布" },
 *     { en: "Next.js", zh: "Next.js", className: "text-blue-600" }
 *   ]
 * });
 */
export function highlightText({ 
  text, 
  locale = 'en', 
  highlights 
}: HighlightTextOptions): string {
  if (!text) return '';
  
  // Normalize highlights to array
  const highlightArray = Array.isArray(highlights) ? highlights : [highlights];
  
  let processedText = text;
  
  // Process each highlight configuration
  for (const highlight of highlightArray) {
    const { en, zh, className = 'text-primary', tagName = 'span' } = highlight;
    
    // Determine which keywords to use based on locale
    let keywords: string[];
    
    if (locale.startsWith('zh')) {
      keywords = Array.isArray(zh) ? zh : [zh];
    } else {
      keywords = Array.isArray(en) ? en : [en];
    }
    
    // Apply highlighting for each keyword
    for (const keyword of keywords) {
      if (keyword && processedText.includes(keyword)) {
        const regex = new RegExp(escapeRegExp(keyword), 'g');
        const replacement = `<${tagName} class="${className}">${keyword}</${tagName}>`;
        processedText = processedText.replace(regex, replacement);
      }
    }
  }
  
  return processedText;
}

/**
 * Escapes special regex characters in a string
 * 转义字符串中的特殊正则表达式字符
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Pre-defined highlight configurations for common use cases
 * 常用场景的预定义高亮配置
 */
export const commonHighlights: HighlightConfig[] = [
  { en: 'SaaS', zh: 'SaaS' },
  { en: 'Developers', zh: '开发者' },
  { en: 'Questions', zh: '问题' },
  { en: 'Pricing', zh: '定价' },
  { en: 'Ship Fast', zh: '快速发布' },
  { en: 'Next.js', zh: 'Next.js' },
  { en: 'Features', zh: '功能' },
  { en: 'Analytics', zh: '分析' },
  { en: 'Dashboard', zh: '仪表板' },
  { en: 'Product', zh: '产品' },
  { en: 'Solution', zh: '解决方案' },
  { en: 'Technology', zh: '技术' },
  { en: 'Innovation', zh: '创新' },
  { en: 'Performance', zh: '性能' },
  { en: 'Security', zh: '安全' },
  { en: 'Scalability', zh: '可扩展性' },
  { en: 'Efficiency', zh: '效率' },
  { en: 'Succeed', zh: '成功' },
  { en: 'Blog', zh: '博客' },
];

/**
 * Helper to get highlighted text for React components with automatic keyword detection
 * React组件的高亮文本辅助函数，支持自动关键词检测
 * 
 * @example
 * // Use with specific highlights
 * const highlightedText = getHighlightedText(dict.hero.title, locale, { en: "SaaS", zh: "SaaS应用" });
 * 
 * @example
 * // Use with automatic common highlights detection
 * const highlightedText = getHighlightedText(dict.hero.title, locale);
 * 
 * @param text - The text to process
 * @param locale - Current locale ('en', 'zh', etc.)
 * @param highlights - Optional specific highlights, if not provided will use commonHighlights
 * @returns HTML string with highlighted keywords
 */
export function getHighlightedText(
  text: string, 
  locale: string, 
  highlights?: HighlightConfig | HighlightConfig[]
): string {
  // If no specific highlights provided, use all common highlights
  const highlightsToUse = highlights || commonHighlights;
  return highlightText({ text, locale, highlights: highlightsToUse });
}

/**
 * Convenient wrapper for common highlighting patterns
 * 常用高亮模式的便捷包装器
 */
export function createHighlighter(locale: string = 'en') {
  return {
    /**
     * Highlights a single keyword
     */
    highlight: (text: string, keyword: HighlightConfig) => 
      highlightText({ text, locale, highlights: keyword }),
    
    /**
     * Highlights multiple keywords
     */
    highlightMultiple: (text: string, keywords: HighlightConfig[]) =>
      highlightText({ text, locale, highlights: keywords }),
    
    /**
     * Highlights using all common presets (automatic detection)
     */
    highlightCommon: (text: string) =>
      highlightText({ text, locale, highlights: commonHighlights }),
      
    /**
     * Highlights using specific common keyword by index
     */
    highlightSpecificCommon: (text: string, index: number) => {
      if (index >= 0 && index < commonHighlights.length) {
        return highlightText({ text, locale, highlights: commonHighlights[index] });
      }
      return text;
    },
  };
} 