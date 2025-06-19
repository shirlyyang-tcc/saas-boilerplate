"use client";

import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  Copy,
  Eye,
  Code2,
  ExternalLink
} from "lucide-react";
import { getBlockCategories, getBlockPreviews } from "@/lib/config";

export default function BlocksPage() {
  const [selectedComponent, setSelectedComponent] = useState("button");
  const [showCode, setShowCode] = useState(false);
  
  const categories = getBlockCategories();
  const previews = getBlockPreviews();
  
  // Get the information of the currently selected component
  const selectedComponentInfo = categories
    .flatMap(cat => cat.components)
    .find(comp => comp.id === selectedComponent);
  
  const selectedPreview = previews[selectedComponent];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <div className="pt-16 flex">
        {/* Left sidebar */}
        <div className="w-80 border-r border-border bg-muted/30 min-h-screen p-6">
          <div className="sticky top-20">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Component Library</h1>
              <p className="text-sm text-muted-foreground">
                Browse and preview all reusable components
              </p>
            </div>

            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.id}>
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    {category.name}
                  </h3>
                  <div className="space-y-1">
                    {category.components.map((component) => (
                      <button
                        key={component.id}
                        onClick={() => setSelectedComponent(component.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors hover:bg-background ${
                          selectedComponent === component.id 
                            ? 'bg-background border border-border shadow-sm' 
                            : 'hover:bg-background/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">{component.name}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {component.description}
                            </div>
                          </div>
                          <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${
                            selectedComponent === component.id ? 'rotate-90' : ''
                          }`} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right preview area */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {selectedComponentInfo && selectedPreview && (
              <>
                {/* Component information */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold">{selectedPreview.title}</h2>
                      <p className="text-muted-foreground mt-2">{selectedPreview.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={showCode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setShowCode(!showCode)}
                      >
                        {showCode ? <Eye className="h-4 w-4 mr-2" /> : <Code2 className="h-4 w-4 mr-2" />}
                        {showCode ? "Preview" : "Code"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(selectedPreview.code)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      {selectedComponentInfo.previewUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openInNewTab(selectedComponentInfo.previewUrl!)}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          New Tab
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Preview or code */}
                <div className="border border-border rounded-lg overflow-hidden">
                  {showCode ? (
                    <div className="bg-muted/50">
                      <div className="p-4 border-b border-border bg-muted/30">
                        <div className="text-sm font-medium">Code Example</div>
                      </div>
                      <pre className="p-6 overflow-x-auto">
                        <code className="text-sm">{selectedPreview.code}</code>
                      </pre>
                    </div>
                  ) : (
                    <div>
                      <div className="p-4 border-b border-border bg-muted/30">
                        <div className="text-sm font-medium">Component Preview</div>
                      </div>
                      <div className="bg-background">
                        {selectedComponentInfo.previewUrl ? (
                          <iframe
                            src={selectedComponentInfo.previewUrl}
                            className="w-full h-96 border-0"
                            title={`${selectedComponentInfo.name} Preview`}
                          />
                        ) : (
                          <div className="p-8 text-center text-muted-foreground">
                            <p>This component does not have a preview page</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Usage instructions */}
                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Usage Instructions</h3>
                  <p className="text-sm text-muted-foreground">
                    This component can be directly copied into your project for use. Ensure you have installed the relevant dependency packages and correctly imported the required components.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 