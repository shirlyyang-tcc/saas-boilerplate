import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
}

export function Dialog({
  open,
  defaultOpen,
  onOpenChange,
  title,
  description,
  children,
  trigger,
  className
}: DialogProps) {
  return (
    <RadixDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fade-in" />
        <RadixDialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white dark:bg-muted p-6 shadow-xl focus:outline-none animate-in fade-in-0 zoom-in-95",
            className
          )}
        >
          <div className="flex items-center justify-between mb-4">
            {title && <RadixDialog.Title className="text-lg font-bold text-foreground">{title}</RadixDialog.Title>}
            <RadixDialog.Close asChild>
              <button className="rounded-full p-1 hover:bg-muted transition" aria-label="Close">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </RadixDialog.Close>
          </div>
          {description && <RadixDialog.Description className="mb-4 text-muted-foreground text-sm">{description}</RadixDialog.Description>}
          <div>{children}</div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
} 