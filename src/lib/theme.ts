/**
 * Executive Sightseeing Theme Configuration
 * Global theme constants and utilities for consistent styling
 */

export const executiveTheme = {
  colors: {
    // Primary Executive Colors
    navy: '#1a2332',
    gold: '#d4af37',
    cream: '#f8f6f0',
    charcoal: '#2c3e50',
    silver: '#95a5a6',
    
    // Semantic Colors
    background: '#ffffff',
    foreground: '#1a2332',
    muted: '#f8f6f0',
    mutedForeground: '#6b7280',
    accent: '#d4af37',
    accentForeground: '#1a2332',
    destructive: '#dc2626',
    destructiveForeground: '#ffffff',
    border: '#e5e7eb',
    input: '#f9fafb',
    ring: '#d4af37',
    
    // Status Colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  typography: {
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },
    
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    lineHeights: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.3,
      relaxed: 1.6,
      loose: 1.7,
    },
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(26, 35, 50, 0.05)',
    md: '0 4px 6px -1px rgba(26, 35, 50, 0.1), 0 2px 4px -1px rgba(26, 35, 50, 0.06)',
    lg: '0 10px 25px -5px rgba(26, 35, 50, 0.1), 0 4px 6px -2px rgba(26, 35, 50, 0.05)',
    xl: '0 20px 25px -5px rgba(26, 35, 50, 0.1), 0 10px 10px -5px rgba(26, 35, 50, 0.04)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  animations: {
    transition: 'all 0.2s ease-in-out',
    transitionSlow: 'all 0.3s ease-in-out',
    hover: 'transform 0.2s ease-in-out',
  },
} as const;

// Type definitions for theme
export type ExecutiveTheme = typeof executiveTheme;
export type ThemeColors = keyof typeof executiveTheme.colors;
export type ThemeSpacing = keyof typeof executiveTheme.spacing;
export type ThemeFonts = keyof typeof executiveTheme.typography.fonts;

// Utility functions for theme usage
export const getThemeColor = (color: ThemeColors): string => {
  return executiveTheme.colors[color];
};

export const getThemeSpacing = (spacing: ThemeSpacing): string => {
  return executiveTheme.spacing[spacing];
};

// CSS custom properties generator
export const generateCSSCustomProperties = () => {
  const properties: Record<string, string> = {};
  
  // Colors
  Object.entries(executiveTheme.colors).forEach(([key, value]) => {
    properties[`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value;
  });
  
  // Spacing
  Object.entries(executiveTheme.spacing).forEach(([key, value]) => {
    properties[`--spacing-${key}`] = value;
  });
  
  // Typography
  Object.entries(executiveTheme.typography.fonts).forEach(([key, value]) => {
    properties[`--font-${key}`] = value;
  });
  
  return properties;
};

// Component style variants
export const buttonVariants = {
  primary: {
    backgroundColor: executiveTheme.colors.gold,
    color: executiveTheme.colors.navy,
    '&:hover': {
      backgroundColor: '#c19b26',
      transform: 'translateY(-1px)',
    },
  },
  secondary: {
    backgroundColor: 'transparent',
    color: executiveTheme.colors.navy,
    border: `2px solid ${executiveTheme.colors.navy}`,
    '&:hover': {
      backgroundColor: executiveTheme.colors.navy,
      color: executiveTheme.colors.cream,
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: executiveTheme.colors.navy,
    '&:hover': {
      backgroundColor: executiveTheme.colors.cream,
    },
  },
} as const;

export const cardVariants = {
  default: {
    backgroundColor: executiveTheme.colors.background,
    border: `1px solid ${executiveTheme.colors.border}`,
    borderRadius: executiveTheme.borderRadius.lg,
    boxShadow: executiveTheme.shadows.md,
    transition: executiveTheme.animations.transitionSlow,
    '&:hover': {
      boxShadow: executiveTheme.shadows.lg,
      transform: 'translateY(-2px)',
    },
  },
  elevated: {
    backgroundColor: executiveTheme.colors.background,
    borderRadius: executiveTheme.borderRadius.lg,
    boxShadow: executiveTheme.shadows.lg,
    transition: executiveTheme.animations.transitionSlow,
    '&:hover': {
      boxShadow: executiveTheme.shadows.xl,
      transform: 'translateY(-4px)',
    },
  },
} as const;