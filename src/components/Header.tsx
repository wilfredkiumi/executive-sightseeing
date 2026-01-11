'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-executive-gold/20'
          : 'bg-transparent'
      )}
    >
      <div className="container-executive px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-executive-gold rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-executive-navy font-bold text-lg sm:text-xl lg:text-2xl">ES</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={cn(
                "font-heading font-bold text-base sm:text-xl lg:text-2xl transition-colors leading-tight",
                isScrolled ? 'text-executive-navy' : 'text-executive-cream'
              )}>
                Executive Sightseeing
              </h1>
              <p className={cn(
                "text-xs lg:text-sm font-medium tracking-wide transition-colors",
                isScrolled ? 'text-executive-gold' : 'text-executive-gold/90'
              )}>
                Luxury London Tours
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  isScrolled
                    ? 'text-executive-navy hover:bg-executive-cream hover:text-executive-gold'
                    : 'text-executive-cream hover:bg-white/10 hover:text-executive-gold'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Button variant="ghost" size="sm" className={cn(
              'text-sm',
              isScrolled ? 'text-executive-navy' : 'text-executive-cream hover:bg-white/10'
            )}>
              Sign In
            </Button>
            <Button size="sm" className="text-sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-md transition-colors',
              isScrolled ? 'text-executive-navy' : 'text-executive-cream'
            )}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-executive-gold/20 bg-white/95 backdrop-blur-md animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-executive-navy font-medium hover:bg-executive-cream rounded-md transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 px-4 space-y-2">
                <Button variant="ghost" size="md" className="w-full text-sm">
                  Sign In
                </Button>
                <Button size="md" className="w-full text-sm">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
