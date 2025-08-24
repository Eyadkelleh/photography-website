import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-soft-rose text-deep-charcoal hover:bg-soft-rose/80 hover:-translate-y-0.5 hover:shadow-lg border-none',
      secondary: 'bg-transparent border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-warm-white',
      text: 'text-warm-brown hover:underline bg-transparent border-none p-0',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border-none',
    };

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    };

    const borderRadius = variant === 'text' ? '' : 'rounded';

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as any, {
        className: cn(baseClasses, variants[variant], sizes[size], className),
        ...props,
      });
    }

    return (
      <button
        className={cn(baseClasses, variants[variant], variant !== 'text' && sizes[size], borderRadius, className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';