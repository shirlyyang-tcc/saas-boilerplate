import { CaseShowcaseItem } from '@/components/ui/case-showcase-grid'

// 简化的案例数据，仿照 ShipAny 风格
const casesData: Record<string, CaseShowcaseItem[]> = {
  en: [
    {
      slug: "youphoto-ai",
      title: "YouPhoto AI - Your One-Click AI Photo Editor",
      description:
        "AI-powered photo editor for reStyles, emoji, avatar, memes & more! Transform photos with advanced AI technology.",
      image: "/images/cases/case1.png",
      externalUrl: "https://youphoto.ai",
      tags: ["AI", "Photo Editor", "SaaS"],
    },
    {
      slug: "ghiblio-generator",
      title: "Ghiblio - Ghibli Style Image Generator",
      description:
        "Ghibli-style image generator powered by ChatGPT 4o model. Transform your ideas into beautiful Studio Ghibli inspired artwork.",
      image: "/images/cases/case2.png",
      externalUrl: "https://ghiblio.com",
      tags: ["AI", "Art", "Ghibli"],
    },
    {
      slug: "ai-music-generator",
      title: "AI Music Generator",
      description:
        "Create unique music compositions using artificial intelligence. Perfect for content creators and musicians.",
      image: "/images/cases/case3.png",
      externalUrl: "https://aimusicgenerator.com",
      tags: ["AI", "Music", "Creative"],
    },
    {
      slug: "image-bg-remover",
      title: "Image To White Background",
      description:
        "Professional AI tool that removes backgrounds and creates perfect white backgrounds for e-commerce in seconds.",
      image: "/images/cases/case4.png",
      externalUrl: "https://imagebg.com",
      tags: ["AI", "E-commerce", "Tool"],
    },
    {
      slug: "draw-ui",
      title: "DrawUI - Generate UI in Minutes",
      description:
        "Draw your idea, generate UI components in minutes. Revolutionary AI-powered UI design tool.",
      image: "/images/cases/case1.png",
      externalUrl: "https://drawui.com",
      tags: ["AI", "UI", "Design"],
    },
    {
      slug: "ai-poster-generator",
      title: "AI Poster Generator",
      description:
        "Zero-design AI poster tool that generates professional posters in 4 styles within 30 seconds.",
      image: "/images/cases/case2.png",
      externalUrl: "https://aiposter.com",
      tags: ["AI", "Design", "Marketing"],
    },
    {
      slug: "resume-go",
      title: "ResumeGo - AI Powered Resume Builder",
      description:
        "Create professional resumes with AI assistance. Stand out with perfectly formatted, ATS-friendly resumes.",
      image: "/images/cases/case3.png",
      externalUrl: "https://resumego.ai",
      tags: ["AI", "Career", "Tool"],
    },
    {
      slug: "copy-web",
      title: "CopyWeb - Copy Web Design to Code",
      description:
        "Transform web designs into clean, responsive code instantly. Perfect for developers and designers.",
      image: "/images/cases/case4.png",
      externalUrl: "https://copyweb.design",
      tags: ["AI", "Code", "Development"],
    },
    {
      slug: "mcp-so",
      title: "MCP.so - Find Awesome MCP Servers",
      description:
        "Discover and explore MCP (Model Context Protocol) servers and clients. Central hub for MCP resources.",
      image: "/images/cases/case1.png",
      externalUrl: "https://mcp.so",
      tags: ["AI", "Directory", "MCP"],
    },
    {
      slug: "raphael-ai",
      title: "Raphael AI - Stunning AI Images",
      description:
        "Create stunning AI-generated images in seconds. High-quality, fast, and reliable image generation.",
      image: "/images/cases/case2.png",
      externalUrl: "https://raphael-ai.com",
      tags: ["AI", "Images", "Creative"],
    },
    {
      slug: "think-any",
      title: "ThinkAny - AI Search Engine",
      description:
        "Next-generation AI-powered search engine. Get intelligent answers and insights for any query.",
      image: "/images/cases/case3.png",
      externalUrl: "https://thinkany.ai",
      tags: ["AI", "Search", "Engine"],
    },
    {
      slug: "hey-beauty",
      title: "HeyBeauty - AI Virtual Try On",
      description:
        "Try on makeup, hairstyles, and beauty products virtually using advanced AI technology.",
      image: "/images/cases/case4.png",
      externalUrl: "https://heybeauty.ai",
      tags: ["AI", "Beauty", "AR"],
    },
  ],
  zh: [
    {
      slug: "youphoto-ai",
      title: "YouPhoto AI - 一键式AI照片编辑器",
      description:
        "AI驱动的照片编辑器，用于重新设计、表情符号、头像、meme等！使用先进的AI技术转换照片。",
      image: "/images/cases/case1.png",
      externalUrl: "https://youphoto.ai",
      tags: ["AI", "照片编辑", "SaaS"],
    },
    {
      slug: "ghiblio-generator",
      title: "Ghiblio - 宫崎骏风格图像生成器",
      description:
        "由ChatGPT 4o模型驱动的宫崎骏风格图像生成器。将您的想法转化为美丽的吉卜力工作室风格艺术作品。",
      image: "/images/cases/case2.png",
      externalUrl: "https://ghiblio.com",
      tags: ["AI", "艺术", "宫崎骏"],
    },
    {
      slug: "ai-music-generator",
      title: "AI音乐生成器",
      description:
        "使用人工智能创作独特的音乐作品。非常适合内容创作者和音乐家。",
      image: "/images/cases/case3.png",
      externalUrl: "https://aimusicgenerator.com",
      tags: ["AI", "音乐", "创意"],
    },
    {
      slug: "image-bg-remover",
      title: "图片转白底工具",
      description:
        "专业的AI工具，可在几秒钟内去除背景并为电商创建完美的白色背景。",
      image: "/images/cases/case4.png",
      externalUrl: "https://imagebg.com",
      tags: ["AI", "电商", "工具"],
    },
    {
      slug: "draw-ui",
      title: "DrawUI - 分钟级UI生成",
      description:
        "画出您的想法，几分钟内生成UI组件。革命性的AI驱动UI设计工具。",
      image: "/images/cases/case1.png",
      externalUrl: "https://drawui.com",
      tags: ["AI", "界面", "设计"],
    },
    {
      slug: "ai-poster-generator",
      title: "AI海报生成器",
      description: "零设计AI海报工具，30秒内生成4种风格的专业海报。",
      image: "/images/cases/case2.png",
      externalUrl: "https://aiposter.com",
      tags: ["AI", "设计", "营销"],
    },
    {
      slug: "resume-go",
      title: "ResumeGo - AI简历制作器",
      description:
        "使用AI助手创建专业简历。制作格式完美、ATS友好的简历脱颖而出。",
      image: "/images/cases/case3.png",
      externalUrl: "https://resumego.ai",
      tags: ["AI", "职业", "工具"],
    },
    {
      slug: "copy-web",
      title: "CopyWeb - 网页设计转代码",
      description:
        "瞬间将网页设计转换为简洁、响应式代码。非常适合开发者和设计师。",
      image: "/images/cases/case4.png",
      externalUrl: "https://copyweb.design",
      tags: ["AI", "代码", "开发"],
    },
    {
      slug: "mcp-so",
      title: "MCP.so - 发现优秀的MCP服务器",
      description:
        "发现和探索MCP（模型上下文协议）服务器和客户端。MCP资源的中心枢纽。",
      image: "/images/cases/case1.png",
      externalUrl: "https://mcp.so",
      tags: ["AI", "目录", "MCP"],
    },
    {
      slug: "raphael-ai",
      title: "Raphael AI - 精美AI图像",
      description:
        "几秒钟内创建精美的AI生成图像。高质量、快速、可靠的图像生成。",
      image: "/images/cases/case2.png",
      externalUrl: "https://raphael-ai.com",
      tags: ["AI", "图像", "创意"],
    },
    {
      slug: "think-any",
      title: "ThinkAny - AI搜索引擎",
      description: "下一代AI驱动的搜索引擎。为任何查询获得智能答案和洞察。",
      image: "/images/cases/case3.png",
      externalUrl: "https://thinkany.ai",
      tags: ["AI", "搜索", "引擎"],
    },
    {
      slug: "hey-beauty",
      title: "HeyBeauty - AI虚拟试妆",
      description: "使用先进的AI技术虚拟试用化妆品、发型和美容产品。",
      image: "/images/cases/case4.png",
      externalUrl: "https://heybeauty.ai",
      tags: ["AI", "美容", "AR"],
    },
  ],
};

export function getAllCases(lang: string = 'en'): CaseShowcaseItem[] {
  return casesData[lang] || casesData.en
}

// 保持与现有代码的兼容性，提供简化的接口
export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  timeline: string
  image?: string
  date: string
  excerpt: string
  content?: string
}
