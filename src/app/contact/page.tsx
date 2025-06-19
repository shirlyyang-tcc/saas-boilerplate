"use client";

import React from 'react';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactForm, ContactFormData } from '@/components/ui/contact-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const handleFormSubmit = async (formData: ContactFormData) => {
    try {
      // 这里应该添加实际的表单提交逻辑
      console.log('Form submitted:', formData);
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Thank you ${formData.name}! We've received your message and will get back to you within 24 hours.`);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@saas-starter.com',
      action: 'mailto:hello@saas-starter.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Business St, San Francisco, CA 94105',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Our team is available',
      value: 'Mon-Fri: 8am-6pm PST',
      action: null
    }
  ];

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Sales Question',
    'Partnership',
    'Bug Report',
    'Feature Request',
    'Other'
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 mb-8">
              <MessageSquare className="w-4 h-4 mr-2" />
              💬 Get in Touch
            </div>
            <h1 className="text-responsive-xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Our Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our SaaS starter template? Need technical support? 
              Want to discuss a custom solution? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm 
                subjects={subjects}
                onSubmit={handleFormSubmit}
              />
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Get in touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you!
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Links</CardTitle>
                    <CardDescription>
                      Find answers to common questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a 
                      href="/features" 
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium">View All Features</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a 
                      href="/pricing" 
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium">See Pricing Plans</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a 
                      href="/blocks" 
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium">Browse Components</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </CardContent>
                </Card>

                {/* Social Proof */}
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Join 10,000+ Developers</h4>
                  <p className="text-sm text-muted-foreground">
                    Building amazing products with our SaaS starter template
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't let technical complexity slow you down. Get your SaaS up and running in hours, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 