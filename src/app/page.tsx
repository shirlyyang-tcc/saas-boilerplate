"use client";

import React from "react";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ArrowRight, Sparkles } from "lucide-react";
import { CTASection } from "@/components/ui/cta-section";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection
        variant="gradient"
        title="Ready to Ship Your SaaS?"
        description="Join thousands of developers who have successfully launched their SaaS products. Get started today and ship your first version in hours, not months."
        icon={Sparkles}
        buttons={[
          {
            text: "Get Started Now",
            variant: "secondary",
            className: "bg-white text-primary hover:bg-white/90 font-medium",
            icon: ArrowRight,
          },
          {
            text: "View Documentation",
            variant: "outline",
          },
        ]}
        trustIndicators={[
          { text: "Instant Download" },
          { text: "30-Day Money Back" },
          { text: "Lifetime Updates" },
        ]}
        maxWidth="4xl"
      />
    </Layout>
  );
}
