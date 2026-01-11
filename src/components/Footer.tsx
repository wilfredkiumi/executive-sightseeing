import React from 'react';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Classic London Tour', href: '/services#classic' },
    { name: 'Executive Transfers', href: '/services#transfers' },
    { name: 'Airport Pickup', href: '/services#airport' },
    { name: 'Custom Itineraries', href: '/services#custom' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cancellation Policy', href: '/cancellation' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Twitter', href: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  ];

  return (
    <footer className="bg-executive-navy text-executive-cream">
      {/* Newsletter Section */}
      <div className="border-b border-executive-gold/20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16">
          <div className="flex flex-col items-center text-center">
            <h3 className="heading-secondary text-xl sm:text-2xl lg:text-3xl mb-3 md:mb-4 text-executive-gold">
              Stay Updated with Exclusive Offers
            </h3>
            <p className="body-regular text-sm sm:text-base mb-5 md:mb-6 text-executive-cream/80">
              Subscribe to receive special promotions, travel tips, and insider access to London's finest experiences
            </p>
            <form className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:gap-4 sm:max-w-2xl sm:mx-auto sm:justify-center sm:items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-80 px-5 py-3.5 rounded-md bg-white/10 border border-executive-gold/30 text-executive-cream placeholder:text-executive-cream/50 focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-base"
              />
              <Button size="lg" className="w-full sm:w-auto whitespace-nowrap text-base px-8 py-3.5">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 sm:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-executive-gold rounded-lg flex items-center justify-center">
                <span className="text-executive-navy font-bold text-lg sm:text-xl">ES</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-xl text-executive-cream leading-tight">
                  Executive Sightseeing
                </h3>
                <p className="text-xs text-executive-gold tracking-wide">Luxury London Tours</p>
              </div>
            </div>
            <p className="body-small text-sm text-executive-cream/70 mb-4 sm:mb-6">
              Kenyan-owned luxury sightseeing company delivering exceptional executive travel experiences
              for VIPs, CEOs, and business leaders visiting London.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-executive-gold hover:text-executive-navy transition-all duration-200"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-executive-gold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="body-small text-xs sm:text-sm text-executive-cream/70 hover:text-executive-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-executive-gold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="body-small text-xs sm:text-sm text-executive-cream/70 hover:text-executive-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-executive-gold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="body-small text-xs sm:text-sm text-executive-cream/70 hover:text-executive-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-executive-gold/20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="body-small text-xs sm:text-sm text-executive-cream/60 text-center md:text-left">
              © {currentYear} Executive Sightseeing Ltd. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              <a href="tel:+442071234567" className="body-small text-xs sm:text-sm text-executive-cream/60 hover:text-executive-gold transition-colors whitespace-nowrap">
                +44 (0)20 7123 4567
              </a>
              <a href="mailto:info@executivesightseeing.co.uk" className="body-small text-xs sm:text-sm text-executive-cream/60 hover:text-executive-gold transition-colors break-all sm:break-normal text-center sm:text-left">
                info@executivesightseeing.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
