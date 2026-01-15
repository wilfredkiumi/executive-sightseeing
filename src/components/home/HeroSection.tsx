import React from 'react';
import { Button } from '@/components/ui/Button';
import { ImageSlider } from '@/components/ImageSlider';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80',
    alt: 'Tower Bridge spanning the River Thames'
  },
  {
    src: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1920&q=80',
    alt: 'Big Ben and the Houses of Parliament at sunset'
  },
  {
    src: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1920&q=80',
    alt: 'Trafalgar Square with Nelson\'s Column'
  },
  {
    src: 'https://images.unsplash.com/photo-1587530795253-06e0a4643188?w=1920&q=80',
    alt: 'Buckingham Palace with guards'
  },
  {
    src: 'https://images.unsplash.com/photo-1543832923-44667a44c804?w=1920&q=80',
    alt: 'The London Eye on the South Bank'
  },
  {
    src: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1920&q=80',
    alt: 'St Paul\'s Cathedral dome'
  },
];

const londonLandmarks = [
  { name: 'Big Ben' },
  { name: 'Tower Bridge' },
  { name: 'Trafalgar Square' },
  { name: 'Buckingham Palace' },
  { name: 'London Eye' },
  { name: 'St Paul\'s Cathedral' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <ImageSlider images={heroImages} autoplayInterval={6000} className="absolute inset-0" />

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-32 md:py-40">
          <div className="text-center text-executive-cream">
            <p className="text-executive-gold text-sm sm:text-base md:text-lg lg:text-xl mb-4 tracking-widest uppercase font-medium animate-fade-in-down">
              Welcome to London
            </p>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 drop-shadow-lg animate-fade-in-up animation-delay-100">
              Executive Sightseeing Ltd
            </h1>
            <p className="heading-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-executive-gold drop-shadow-md animate-fade-in-up animation-delay-200">
              Luxury Sightseeing & Executive Travel
            </p>
            <p className="body-large text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 drop-shadow-md animate-fade-in-up animation-delay-300 opacity-0 leading-relaxed">
              Kenyan-owned, London-based luxury sightseeing company delivering high-end private experiences for VIPs, CEOs, and business leaders visiting London.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 animate-fade-in-up animation-delay-400 opacity-0">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                View Our Services
              </Button>
              <Button variant="secondary" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-executive-cream text-executive-cream hover:bg-executive-cream hover:text-executive-navy w-full sm:w-auto">
                Book Now
              </Button>
            </div>

            {/* Landmark Pills */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 animate-fade-in animation-delay-500 opacity-0">
              {londonLandmarks.map((landmark) => (
                <span
                  key={landmark.name}
                  className="px-3 md:px-4 py-1.5 md:py-2 glass-dark backdrop-blur-sm border border-executive-gold/30 rounded-full text-xs md:text-sm text-executive-cream hover:bg-executive-gold/20 transition-all duration-300 cursor-default"
                >
                  {landmark.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 animate-fade-in animation-delay-600 opacity-0 hidden md:block">
          <div className="w-8 h-12 border-2 border-executive-cream/50 rounded-full flex justify-center hover:border-executive-gold transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-executive-gold rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
  );
}
