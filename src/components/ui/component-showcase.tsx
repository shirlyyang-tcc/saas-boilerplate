"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Button, 
  PrimaryButton, 
  GradientButton, 
  OutlineButton, 
  LinkButton 
} from '@/components/ui/button';
import { 
  Badge, 
  PrimaryBadge, 
  SuccessBadge, 
  WarningBadge, 
  InfoBadge, 
  TagBadge, 
  StatusBadge 
} from '@/components/ui/badge';
import { 
  Play, 
  Download, 
  Settings, 
  Star, 
  AlertCircle, 
  CheckCircle, 
  Info,
  Tag,
  X
} from 'lucide-react';

export function ComponentShowcase() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind']);
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-8">
      {/* Button Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Enhanced Button Components</CardTitle>
          <CardDescription>
            Comprehensive button system with variants, sizes, icons, and loading states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="default" variant="primary">Default</Button>
              <Button size="lg" variant="primary">Large</Button>
              <Button size="xl" variant="primary">Extra Large</Button>
              <Button size="icon" variant="primary">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Buttons with Icons</h3>
            <div className="flex flex-wrap gap-3">
              <Button icon={Play} variant="primary">
                Play Video
              </Button>
              <Button icon={Download} iconPosition="right" variant="outline">
                Download
              </Button>
              <Button icon={Settings} variant="ghost">
                Settings
              </Button>
              <Button icon={Star} variant="gradient">
                Favorite
              </Button>
            </div>
          </div>

          {/* Loading States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Loading States</h3>
            <div className="flex gap-3">
              <Button loading variant="primary">
                Saving...
              </Button>
              <Button loading variant="outline">
                Processing
              </Button>
              <Button loading icon={Download} variant="secondary">
                Downloading
              </Button>
            </div>
          </div>

          {/* Preset Components */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Preset Button Components</h3>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton icon={Play}>Get Started</PrimaryButton>
              <GradientButton icon={Star}>Premium</GradientButton>
              <OutlineButton icon={Settings}>Configure</OutlineButton>
              <LinkButton>Learn More →</LinkButton>
            </div>
          </div>

          {/* Full Width */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Full Width Buttons</h3>
            <div className="space-y-3 max-w-md">
              <Button fullWidth variant="primary">
                Full Width Primary
              </Button>
              <Button fullWidth variant="outline" icon={Download}>
                Full Width with Icon
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badge Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Enhanced Badge Components</CardTitle>
          <CardDescription>
            Flexible badge system with variants, sizes, icons, and interactive features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Badge Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge variant="gradient">Gradient</Badge>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Badge Sizes</h3>
            <div className="flex items-center gap-3">
              <Badge size="sm" variant="primary">Small</Badge>
              <Badge size="default" variant="primary">Default</Badge>
              <Badge size="lg" variant="primary">Large</Badge>
            </div>
          </div>

          {/* Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Badges with Icons</h3>
            <div className="flex flex-wrap gap-3">
              <Badge icon={CheckCircle} variant="success">
                Completed
              </Badge>
              <Badge icon={AlertCircle} variant="warning">
                Warning
              </Badge>
              <Badge icon={Info} variant="info">
                Information
              </Badge>
              <Badge icon={Star} iconPosition="right" variant="gradient">
                Featured
              </Badge>
            </div>
          </div>

          {/* Removable Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Removable Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="secondary" 
                  removable 
                  onRemove={() => removeTag(tag)}
                  icon={Tag}
                >
                  {tag}
                </Badge>
              ))}
              {tags.length === 0 && (
                <Badge variant="outline">No tags remaining</Badge>
              )}
            </div>
          </div>

          {/* Preset Components */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Preset Badge Components</h3>
            <div className="flex flex-wrap gap-3">
              <PrimaryBadge>Primary Badge</PrimaryBadge>
              <SuccessBadge icon={CheckCircle}>Success</SuccessBadge>
              <WarningBadge icon={AlertCircle}>Warning</WarningBadge>
              <InfoBadge icon={Info}>Information</InfoBadge>
              <TagBadge onRemove={() => console.log('Tag removed')}>
                Removable Tag
              </TagBadge>
              <StatusBadge variant="success">Online</StatusBadge>
              <StatusBadge variant="warning">Pending</StatusBadge>
              <StatusBadge variant="destructive">Offline</StatusBadge>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Real-world Use Cases</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">User Profile</h4>
                  <p className="text-sm text-muted-foreground">John Doe</p>
                </div>
                <div className="flex gap-2">
                  <StatusBadge variant="success">Verified</StatusBadge>
                  <StatusBadge variant="info">Premium</StatusBadge>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Order #12345</h4>
                  <p className="text-sm text-muted-foreground">Processing payment</p>
                </div>
                <div className="flex gap-2">
                  <StatusBadge variant="warning">Pending</StatusBadge>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Project Launch</h4>
                  <p className="text-sm text-muted-foreground">Ready for deployment</p>
                </div>
                <div className="flex gap-2">
                  <StatusBadge variant="success">Ready</StatusBadge>
                  <PrimaryButton size="sm" icon={Play}>
                    Deploy
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 