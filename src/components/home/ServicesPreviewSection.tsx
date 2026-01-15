import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export function ServicesPreviewSection() {
    return (
        <section className="section-executive bg-white py-12 md:py-16 lg:py-20">
            <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 md:mb-3 block">Premium Offerings</span>
                    <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-executive-navy">
                        Our Premium Services
                    </h2>
                    <div className="executive-divider w-16 md:w-24 mx-auto mb-4 md:mb-6"></div>
                    <p className="body-large text-base sm:text-lg md:text-xl text-executive-charcoal">
                        Curated experiences designed for the discerning executive traveler
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    <Card dark variant="elevated" className="overflow-hidden bg-executive-navy border-executive-navy">
                        <div className="h-2 bg-gradient-to-r from-executive-gold to-[#b8941f]"></div>
                        <CardHeader className="pb-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                                <CardTitle className="text-lg sm:text-xl md:text-2xl">The Classic London Executive Tour</CardTitle>
                                <div className="text-left sm:text-right">
                                    <div className="text-2xl sm:text-3xl font-bold text-executive-gold">£899</div>
                                    <div className="text-xs text-white/60">per person</div>
                                </div>
                            </div>
                            <CardDescription className="text-sm sm:text-base">
                                A premium one-day executive sightseeing experience designed for comfort and efficiency.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">8 hours total duration (8:00 am – 4:00 pm)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Buckingham Palace & Westminster</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Tower Bridge & Thames Riverside</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Canary Wharf Financial District</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Professional driver and luxury vehicle</span>
                                </div>
                            </div>
                            <Button className="w-full mt-6" size="lg">Book This Tour</Button>
                        </CardContent>
                    </Card>

                    <Card dark variant="elevated" className="overflow-hidden bg-executive-navy border-executive-navy">
                        <div className="h-2 bg-gradient-to-r from-executive-gold to-[#b8941f]"></div>
                        <CardHeader className="pb-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                                <CardTitle className="text-lg sm:text-xl md:text-2xl">Executive Trips Outside London</CardTitle>
                                <div className="text-left sm:text-right">
                                    <div className="text-2xl sm:text-3xl font-bold text-executive-gold">£899</div>
                                    <div className="text-xs text-white/60">+ £2/mile</div>
                                </div>
                            </div>
                            <CardDescription className="text-sm sm:text-base">
                                Bespoke executive trips beyond London for clients seeking tailored travel experiences.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Fully customized itineraries</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Professional chauffeur service</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Flexible scheduling options</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Premium vehicle selection</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-white/90">Concierge-level service</span>
                                </div>
                            </div>
                            <Button className="w-full mt-6" size="lg">Request Custom Quote</Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center mt-12">
                    <Button variant="ghost" size="lg" className="text-lg px-8 py-4 group">
                        View All Services
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}
