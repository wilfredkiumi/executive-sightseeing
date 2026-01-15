import React from 'react';
import { Button } from '@/components/ui/Button';

export function CtaSection() {
    return (
        <section className="bg-executive-gradient text-executive-cream py-12 md:py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-executive-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-executive-gold rounded-full blur-3xl"></div>
            </div>
            <div className="w-full text-center relative z-10 px-6 sm:px-8 md:px-12 lg:px-16">
                <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                    Ready to Experience Executive London?
                </h2>
                <p className="body-large text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-executive-cream/90">
                    Contact us to arrange your luxury sightseeing experience or request a customised executive itinerary.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 shadow-xl w-full sm:w-auto">
                        Book Your Tour
                    </Button>
                    <Button variant="light" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 shadow-xl w-full sm:w-auto">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
