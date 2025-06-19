"use client";

import Link from "next/link";
import { User, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  category?: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "wide";
  className?: string;
}

function formatDate(dateString: string): string {
  // 使用确定性的格式化，避免时区差异
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function BlogCard({ post, variant = "default", className = "" }: BlogCardProps) {
  const isWide = variant === "wide";

  if (isWide) {
    return (
      <Card className={`group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-0 bg-gradient-to-br from-background via-background to-muted/20 ${className}`}>
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-1">
                +{post.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Title */}
          <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </CardTitle>

          {/* Excerpt */}
          <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5 text-primary/70" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-primary/70" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-0 bg-card ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 2 && (
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              +{post.tags.length - 2}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <User className="w-3.5 h-3.5 mr-1.5 text-primary/70" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-primary/70" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary/70" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 