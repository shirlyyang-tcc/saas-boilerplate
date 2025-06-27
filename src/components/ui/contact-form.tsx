"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Building, Send } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";

export interface ContactFormProps {
  title?: string;
  description?: string;
  onSubmit?: (formData: ContactFormData) => void | Promise<void>;
  className?: string;
  subjects?: string[];
  variant?: "default" | "compact" | "minimal";
  showCompany?: boolean;
  dict?: Dictionary;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

// Default subjects - will be overridden by dictionary data

export function ContactForm({
  title,
  description,
  onSubmit,
  className = "",
  subjects,
  variant = "default",
  showCompany = true,
  dict
}: ContactFormProps) {
  // Use dictionary subjects or provided subjects as fallback
  const defaultSubjects = dict?.contactForm?.defaultSubjects || [
    "General Inquiry",
    "Technical Support", 
    "Sales Question",
    "Partnership",
    "Bug Report",
    "Feature Request"
  ];
  const contactSubjects = subjects || defaultSubjects;
  const defaultTitle = dict?.contact?.form?.title || "Send us a message";
  const defaultDescription = dict?.contact?.form?.description || "Fill out the form below and we'll get back to you within 24 hours.";

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
        await new Promise(resolve => setTimeout(resolve, 1000));
        const successMessage = dict?.contact?.form?.thankYouMessage || "Message sent successfully!";
        alert(successMessage);
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
      const errorMessage = dict?.contact?.form?.errorMessage || "Error sending message. Please try again.";
      alert(errorMessage);
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
            {dict?.form?.labels?.fullName || "Full Name"} {dict?.form?.required || "*"}
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
              placeholder={dict?.form?.placeholders?.fullName || "Your full name"}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            {dict?.form?.labels?.emailAddress || "Email Address"} {dict?.form?.required || "*"}
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
              placeholder={dict?.form?.placeholders?.email || "your@email.com"}
            />
          </div>
        </div>
      </div>

      {(showCompany || contactSubjects.length > 0) && (
        <div className={`grid grid-cols-1 ${variant === "compact" ? "gap-4" : "md:grid-cols-2 gap-6"}`}>
          {showCompany && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                {dict?.form?.labels?.company || "Company"} {dict?.form?.optional || "(Optional)"}
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
                  placeholder={dict?.form?.placeholders?.company || "Your company name"}
                />
              </div>
            </div>
          )}
          {contactSubjects.length > 0 && (
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                {dict?.form?.labels?.subject || "Subject"} {dict?.form?.required || "*"}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              >
                <option value="">{dict?.form?.placeholders?.selectSubject || "Select a subject"}</option>
                {contactSubjects.map((subject) => (
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
          {dict?.form?.labels?.message || "Message"} {dict?.form?.required || "*"}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={variant === "compact" ? 4 : 6}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
          placeholder={dict?.form?.placeholders?.message || "Tell us how we can help you..."}
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
        size={variant === "compact" ? "sm" : "lg"}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></div>
            {dict?.form?.sending || "Sending..."}
          </div>
        ) : (
          <div className="flex items-center">
            <Send className="w-4 h-4 mr-2" />
            {dict?.form?.sendMessage || "Send Message"}
          </div>
        )}
      </Button>
    </form>
  );

  if (variant === "minimal") {
    return (
      <div className={`w-full ${className}`}>
        <FormContent />
      </div>
    );
  }

  return (
    <Card className={`w-full ${getVariantClasses()} ${className}`}>
      {variant !== "compact" && (
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-bold text-foreground">
            {title || defaultTitle}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
            {description || defaultDescription}
          </CardDescription>
        </CardHeader>
      )}
      <CardContent className={variant === "compact" ? "pt-0" : ""}>
        <FormContent />
      </CardContent>
    </Card>
  );
}

export function CompactContactForm({ 
  onSubmit, 
  className = "",
  dict
}: { 
  onSubmit?: (formData: ContactFormData) => void | Promise<void>; 
  className?: string; 
  dict?: Dictionary;
}) {
  return (
    <ContactForm
      title="Quick Contact"
      description="Send us a message and we'll get back to you soon."
      variant="compact"
      showCompany={false}
      onSubmit={onSubmit}
      className={className}
      dict={dict}
    />
  );
}

export function MinimalContactForm({ 
  onSubmit, 
  className = "",
  dict
}: { 
  onSubmit?: (formData: ContactFormData) => void | Promise<void>; 
  className?: string; 
  dict?: Dictionary;
}) {
  return (
    <ContactForm
      title="Get in Touch"
      description="We'd love to hear from you. Send us a message."
      variant="minimal"
      onSubmit={onSubmit}
      className={className}
      dict={dict}
    />
  );
}

export function SupportContactForm({ 
  onSubmit, 
  className = "",
  dict
}: { 
  onSubmit?: (formData: ContactFormData) => void | Promise<void>; 
  className?: string; 
  dict?: Dictionary;
}) {
  const supportSubjects = dict?.contactForm?.supportSubjects || [
    "Technical Issue",
    "Billing Question",
    "Feature Request",
    "Bug Report",
    "Account Problem",
    "Other"
  ];
  
  return (
    <ContactForm
      title="Contact Support"
      description="Need help? Our support team is here to assist you."
      subjects={supportSubjects}
      onSubmit={onSubmit}
      className={className}
      dict={dict}
    />
  );
} 