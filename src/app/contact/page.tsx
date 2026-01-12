'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const contactMethods = [
  {
    title: 'Phone',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    details: [
      { label: 'Main Line', value: '+44 (0)20 7123 4567' },
      { label: 'Mobile', value: '+44 (0)77 8899 0011' }
    ]
  },
  {
    title: 'Email',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    details: [
      { label: 'General Inquiries', value: 'info@executivesightseeing.co.uk' },
      { label: 'Bookings', value: 'bookings@executivesightseeing.co.uk' }
    ]
  },
  {
    title: 'Address',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    details: [
      { label: 'Office', value: '123 Mayfair Lane' },
      { label: '', value: 'London W1K 7AB' },
      { label: '', value: 'United Kingdom' }
    ]
  },
  {
    title: 'Hours',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    details: [
      { label: 'Office', value: 'Mon-Fri: 9:00 AM - 6:00 PM' },
      { label: 'Bookings', value: '24/7 Available' },
      { label: 'Emergency', value: '24/7 On-Call' }
    ]
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    passengers: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', passengers: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative bg-executive-navy text-executive-cream py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
            alt="London contact"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">Get In Touch</span>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-executive-cream/90 leading-relaxed">
              Ready to experience luxury travel? We're here to assist with all your executive transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} dark className="text-center group hover:shadow-xl transition-all duration-300 bg-executive-navy border-executive-navy">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-executive-navy">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.details.map((detail, index) => (
                      <div key={index} className="text-sm sm:text-base">
                        {detail.label && <div className="text-xs text-white/60 font-semibold">{detail.label}</div>}
                        <div className="text-white/90">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl mb-4 text-executive-navy">
                  Send Us a Message
                </h2>
                <p className="text-sm sm:text-base text-executive-charcoal">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-executive-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-sm sm:text-base"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-executive-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-executive-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-sm sm:text-base"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-executive-navy mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="classic-tour">Classic London Tour</option>
                      <option value="bespoke">Bespoke Tour</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="outside-london">Outside London</option>
                      <option value="corporate">Corporate Services</option>
                      <option value="special-events">Special Events</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-executive-navy mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-executive-navy mb-2">
                      Number of Passengers
                    </label>
                    <input
                      type="number"
                      id="passengers"
                      name="passengers"
                      min="1"
                      max="20"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent text-sm sm:text-base"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-executive-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-executive-gold/30 bg-white text-executive-navy focus:outline-none focus:ring-2 focus:ring-executive-gold focus:border-transparent resize-none text-sm sm:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-base md:text-lg" loading={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs sm:text-sm text-executive-charcoal/60 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="heading-secondary text-xl sm:text-2xl md:text-3xl mb-4 text-executive-navy">
                  Visit Our Office
                </h3>
                <p className="text-sm sm:text-base text-executive-charcoal mb-6">
                  We're located in the heart of Mayfair, one of London's most prestigious districts.
                  Drop by for a consultation or to view our fleet.
                </p>

                {/* Map Placeholder */}
                <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="London map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-executive-navy/30 flex items-center justify-center">
                    <div className="text-center text-executive-cream">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="font-semibold text-sm sm:text-base">123 Mayfair Lane, London W1K 7AB</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card dark={false} variant="elevated">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-executive-navy mb-4 text-base sm:text-lg">Quick Response Guarantee</h4>
                  <ul className="space-y-3 text-sm sm:text-base text-executive-charcoal">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>We respond to all inquiries within 2 hours during business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>24/7 emergency contact available for urgent bookings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Instant booking confirmation via email and SMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Dedicated account manager for corporate clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-executive-gradient text-executive-cream py-12 md:py-16">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-base sm:text-lg mb-6 md:mb-8 text-executive-cream/90">
            Our team is available to answer your questions and help plan your perfect journey
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              Call +44 (0)20 7123 4567
            </Button>
            <Button variant="light" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
