import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export function FeaturesSection() {
    return (
        <section className="section-executive bg-executive-cream py-12 md:py-16 lg:py-20">
            <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-block">
                        <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 md:mb-3 block">Excellence in Every Detail</span>
                        <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-executive-navy">
                            Why Executive Sightseeing Ltd
                        </h2>
                        <div className="executive-divider w-16 md:w-24 mx-auto mb-4 md:mb-6"></div>
                    </div>
                    <p className="body-large text-base sm:text-lg md:text-xl text-executive-charcoal">
                        Experience London with the refinement and discretion that executive travelers expect
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <Card dark className="text-center group bg-executive-navy border-executive-navy">
                        <CardHeader>
                            <div className="w-16 h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <CardTitle>Luxury Executive Experiences</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                High-end, private sightseeing experiences designed specifically for VIPs and business leaders
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card dark className="text-center group bg-executive-navy border-executive-navy">
                        <CardHeader>
                            <div className="w-16 h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <CardTitle>Professional & Discreet</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Highly professional, discreet drivers and guides who understand executive expectations
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card dark className="text-center group bg-executive-navy border-executive-navy">
                        <CardHeader>
                            <div className="w-16 h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                                </svg>
                            </div>
                            <CardTitle>Premium Vehicles</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Executive-class vehicles that are comfortable, well-maintained, and luxurious
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card dark className="text-center group bg-executive-navy border-executive-navy">
                        <CardHeader>
                            <div className="w-16 h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <CardTitle>Personalised Itineraries</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Flexible schedules tailored to busy executives with valuable, limited time
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
