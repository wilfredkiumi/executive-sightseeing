import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

export function TestimonialsSection() {
    return (
        <section className="section-executive bg-executive-cream/50 py-12 md:py-16 lg:py-20">
            <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 md:mb-3 block">Client Testimonials</span>
                    <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-executive-navy">
                        What Our Clients Say
                    </h2>
                    <div className="executive-divider w-16 md:w-24 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <Card dark className="bg-executive-navy backdrop-blur-sm border-executive-gold/30 shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white/90 mb-4 italic">
                                "Exceptional service from start to finish. The attention to detail and professionalism exceeded all expectations."
                            </p>
                            <div className="border-t border-executive-gold/20 pt-4">
                                <p className="font-semibold text-white">Sarah Johnson</p>
                                <p className="text-sm text-white/70">CEO, Tech Innovations Ltd</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card dark className="bg-executive-navy backdrop-blur-sm border-executive-gold/30 shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white/90 mb-4 italic">
                                "The perfect blend of luxury and efficiency. Made our London visit truly memorable and hassle-free."
                            </p>
                            <div className="border-t border-executive-gold/20 pt-4">
                                <p className="font-semibold text-white">Michael Chen</p>
                                <p className="text-sm text-white/70">Managing Director, Global Finance Corp</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card dark className="bg-executive-navy backdrop-blur-sm border-executive-gold/30 shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white/90 mb-4 italic">
                                "Outstanding professionalism and knowledge. Their service truly reflects the executive experience they promise."
                            </p>
                            <div className="border-t border-executive-gold/20 pt-4">
                                <p className="font-semibold text-white">Emma Williams</p>
                                <p className="text-sm text-white/70">VP Operations, International Ventures</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
