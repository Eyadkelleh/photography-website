import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(7)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-deep-charcoal mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'flex min-h-[120px] w-full rounded bg-warm-white border border-soft-beige px-4 py-3 text-base text-deep-charcoal placeholder:text-warm-gray transition-all duration-300 ease-in-out',
            'focus:border-gold-accent focus:outline-none focus:ring-2 focus:ring-gold-accent/20',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'resize-y',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-warm-gray">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';