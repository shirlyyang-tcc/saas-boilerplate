"use client";

import { Clock, Building, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ caseStudy, className = "" }: CaseStudyCardProps) {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Header */}
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {caseStudy.industry}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {caseStudy.timeline}
          </div>
        </div>
        <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
        <div className="flex items-center text-muted-foreground">
          <Building className="w-4 h-4 mr-2" />
          <span className="font-medium">{caseStudy.client}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Challenge */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-orange-500" />
            Challenge
          </h4>
          <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
        </div>

        {/* Solution */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
            Solution
          </h4>
          <p className="text-muted-foreground text-sm">{caseStudy.solution}</p>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Results
          </h4>
          <ul className="space-y-2">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 