"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Building, Send } from "lucide-react";

export interface ContactFormProps {
  title?: string;
  description?: string;
  onSubmit?: (formData: ContactFormData) => void | Promise<void>;
  className?: string;
  subjects?: string[];
  variant?: "default" | "compact" | "minimal";
  showCompany?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const DEFAULT_SUBJECTS = [
  "General Inquiry",
  "Technical Support",
  "Sales Question",
  "Partnership",
  "Bug Report",
  "Feature Request"
];

export function ContactForm({
  title = "Send us a message",
  description = "Fill out the form below and we'll get back to you within 24 hours.",
  onSubmit,
  className = "",
  subjects = DEFAULT_SUBJECTS,
  variant = "default",
  showCompany = true
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "p-4";
      case "minimal":
        return "border-0 shadow-none bg-transparent";
      default:
        return "";
    }
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={`grid grid-cols-1 ${variant === "compact" ? "gap-4" : "md:grid-cols-2 gap-6"}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              placeholder="Your full name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              placeholder="your@email.com"
            />
          </div>
        </div>
      </div>

      {(showCompany || subjects.length > 0) && (
        <div className={`grid grid-cols-1 ${variant === "compact" ? "gap-4" : "md:grid-cols-2 gap-6"}`}>
          {showCompany && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company (Optional)
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="Your company name"
                />
              </div>
            </div>
          )}
          {subjects.length > 0 && (
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              >
                <option value="">Select a subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={variant === "compact" ? 4 : 6}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base font-medium"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );

  if (variant === "minimal") {
    return (
      <div className={className}>
        {title && (
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <FormContent />
      </div>
    );
  }

  return (
    <Card className={`border-0 ${getVariantClasses()} ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <FormContent />
      </CardContent>
    </Card>
  );
}

// 预设组件变体
export function CompactContactForm({ 
  onSubmit, 
  className = "" 
}: { 
  onSubmit?: (formData: ContactFormData) => void | Promise<void>; 
  className?: string; 
}) {
  return (
    <ContactForm
      title="Quick Contact"
      description="Send us a message and we'll get back to you soon."
      variant="compact"
      showCompany={false}
      onSubmit={onSubmit}
      className={className}
    />
  );
}

export function MinimalContactForm({ 
  onSubmit, 
  className = "" 
}: { 
  onSubmit?: (formData: ContactFormData) => void | Promise<void>; 
  className?: string; 
}) {
  return (
    <ContactForm
      title="Get in Touch"
      description="We'd love to hear from you. Send us a message."
      variant="minimal"
      onSubmit={onSubmit}
      className={className}
    />
  );
}

export function SupportContactForm({ 
  onSubmit, 
  className = "" 
}: { 
  onSubmit?: (formData: ContactFormData) => void | Promise<void>; 
  className?: string; 
}) {
  return (
    <ContactForm
      title="Contact Support"
      description="Need help? Our support team is here to assist you."
      subjects={[
        "Technical Issue",
        "Billing Question",
        "Feature Request",
        "Bug Report",
        "Account Problem",
        "Other"
      ]}
      onSubmit={onSubmit}
      className={className}
    />
  );
} 