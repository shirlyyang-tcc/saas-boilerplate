"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  link?: {
    href: string;
    text: string;
  };
}

export interface FeatureCardProps {
  feature: FeatureItem;
  variant?: "default" | "hero" | "detailed" | "compact" | "minimal";
  className?: string;
  iconColor?: "primary" | "secondary" | "success" | "warning" | "destructive";
  showBenefits?: boolean;
}

export function FeatureCard({
  feature,
  variant = "default",
  className = "",
  iconColor = "primary",
  showBenefits = true
}: FeatureCardProps) {
  const { icon: Icon, title, description, benefits, link } = feature;

  const getIconColorClasses = () => {
    switch (iconColor) {
      case "secondary":
        return "text-secondary bg-secondary/10";
      case "success":
        return "text-green-600 bg-green-100 dark:bg-green-900/20";
      case "warning":
        return "text-amber-600 bg-amber-100 dark:bg-amber-900/20";
      case "destructive":
        return "text-red-600 bg-red-100 dark:bg-red-900/20";
      default:
        return "text-primary bg-primary/10";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "hero":
        return "border-none shadow-lg hover:shadow-xl transition-shadow text-center";
      case "detailed":
        return "hover:shadow-lg transition-shadow";
      case "compact":
        return "p-4 hover:shadow-md transition-shadow";
      case "minimal":
        return "border-none shadow-none bg-transparent";
      default:
        return "hover:shadow-lg transition-shadow";
    }
  };

  // Hero variant (简单居中布局)
  if (variant === "hero") {
    return (
      <Card className={cn(getVariantClasses(), className)}>
        <CardContent className="p-6">
          <Icon className={`h-12 w-12 mx-auto mb-4 ${getIconColorClasses().split(' ')[0]}`} />
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          {link && (
            <a 
              href={link.href}
              className="inline-block mt-3 text-sm text-primary hover:underline"
            >
              {link.text} →
            </a>
          )}
        </CardContent>
      </Card>
    );
  }

  // Compact variant (紧凑布局)
  if (variant === "compact") {
    return (
      <Card className={cn(getVariantClasses(), className)}>
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg flex-shrink-0 ${getIconColorClasses()}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Minimal variant (最简布局)
  if (variant === "minimal") {
    return (
      <div className={cn("text-center", className)}>
        <Icon className={`h-12 w-12 mx-auto mb-4 ${getIconColorClasses().split(' ')[0]}`} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {link && (
          <a 
            href={link.href}
            className="inline-block mt-3 text-sm text-primary hover:underline"
          >
            {link.text} →
          </a>
        )}
      </div>
    );
  }

  // Default and detailed variants (详细布局)
  return (
    <Card className={cn(getVariantClasses(), className)}>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className={`p-2 rounded-lg ${getIconColorClasses()}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>
        
        {showBenefits && benefits && benefits.length > 0 && (
          <div className="space-y-2 mb-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}

        {link && (
          <a 
            href={link.href}
            className="inline-block text-sm text-primary hover:underline font-medium"
          >
            {link.text} →
          </a>
        )}
      </CardContent>
    </Card>
  );
}

// 预设的Feature组件变体
export function HeroFeatureCard({ feature, className }: { feature: FeatureItem; className?: string }) {
  return <FeatureCard feature={feature} variant="hero" className={className} />;
}

export function DetailedFeatureCard({ feature, className }: { feature: FeatureItem; className?: string }) {
  return <FeatureCard feature={feature} variant="detailed" className={className} />;
}

export function CompactFeatureCard({ feature, className }: { feature: FeatureItem; className?: string }) {
  return <FeatureCard feature={feature} variant="compact" className={className} />;
}

export function MinimalFeatureCard({ feature, className }: { feature: FeatureItem; className?: string }) {
  return <FeatureCard feature={feature} variant="minimal" className={className} />;
} 