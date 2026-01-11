import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'light';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props }, ref) => {
    const baseClasses = 'btn-executive inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-executive-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-executive-gold text-executive-navy hover:bg-[#c19b26] hover:-translate-y-0.5 hover:shadow-lg',
      secondary: 'bg-transparent text-executive-navy border-2 border-executive-navy hover:bg-executive-navy hover:text-executive-cream hover:-translate-y-0.5',
      ghost: 'bg-transparent text-executive-navy hover:bg-executive-cream',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-red-700',
      light: 'bg-executive-cream text-executive-navy border-2 border-executive-cream hover:bg-transparent hover:text-executive-cream hover:-translate-y-0.5 hover:shadow-lg',
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-sm rounded-md',
      lg: 'px-8 py-4 text-base rounded-lg',
    };
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          loading && 'relative',
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };