import { notFound } from "next/navigation";
import { ComponentPreviewClient } from "./component-preview-client";

interface PreviewPageProps {
  params: {
    component: string;
  };
}

// 所有可用的组件列表 - 与 component-preview-client.tsx 中的 componentMap 保持同步
const AVAILABLE_COMPONENTS = [
  'button',
  'card', 
  'badge',
  'feature-card',
  'component-showcase',
  'header',
  'footer',
  'hero',
  'features',
  'pricing',
  'testimonials',
  'faq',
  'case-study-card',
  'blog-card',
  'content-section',
  'cta-section',
  'stats-section',
  'contact-form'
] as const;

export default function ComponentPreview({ params }: PreviewPageProps) {
  const { component } = params;
  
  // 检查组件是否存在于可用组件列表中
  if (!AVAILABLE_COMPONENTS.includes(component as any)) {
    notFound();
  }
  
  return <ComponentPreviewClient component={component} />;
}

// 生成静态参数 - 从可用组件列表自动获取所有组件
export async function generateStaticParams() {
  return AVAILABLE_COMPONENTS.map((component) => ({
    component,
  }));
} 