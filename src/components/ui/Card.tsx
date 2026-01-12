'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
  dark?: boolean;
}

const CardContext = React.createContext<{ dark: boolean }>({ dark: true });

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, dark = true, children, ...props }, ref) => {
    const baseClasses = 'card-executive border rounded-lg transition-all duration-300';
    const bgClasses = dark ? 'bg-executive-navy border-executive-navy text-white' : 'bg-white border-border';

    const variantClasses = {
      default: 'shadow-md',
      elevated: 'shadow-lg',
      outlined: 'border-2 shadow-sm',
    };

    const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

    return (
      <CardContext.Provider value={{ dark }}>
        <div
          className={cn(
            baseClasses,
            bgClasses,
            variantClasses[variant],
            hoverClasses,
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pb-4', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    const { dark } = React.useContext(CardContext);
    return (
      <h3
        ref={ref}
        className={cn(
          'heading-secondary text-xl font-semibold',
          dark ? 'text-white' : 'text-executive-navy',
          className
        )}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { dark } = React.useContext(CardContext);
    return (
      <p
        ref={ref}
        className={cn(
          'body-regular mt-2',
          dark ? 'text-white/90' : 'text-executive-charcoal',
          className
        )}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0 flex items-center', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };