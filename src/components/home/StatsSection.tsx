import React from 'react';

export function StatsSection() {
    return (
        <section className="bg-executive-navy py-8 md:py-12 lg:py-16 border-y border-executive-gold/20">
            <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    <div className="animate-fade-in-up px-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-executive-gold mb-1 md:mb-2">500+</div>
                        <div className="text-executive-cream/80 text-xs sm:text-sm md:text-base leading-tight">Executive Clients Served</div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-100 px-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-executive-gold mb-1 md:mb-2">98%</div>
                        <div className="text-executive-cream/80 text-xs sm:text-sm md:text-base leading-tight">Satisfaction Rate</div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-200 px-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-executive-gold mb-1 md:mb-2">24/7</div>
                        <div className="text-executive-cream/80 text-xs sm:text-sm md:text-base leading-tight">Concierge Support</div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-300 px-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-executive-gold mb-1 md:mb-2">15+</div>
                        <div className="text-executive-cream/80 text-xs sm:text-sm md:text-base leading-tight">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
