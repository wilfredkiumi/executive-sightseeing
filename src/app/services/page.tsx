import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const services = [
  {
    id: 'classic-tour',
    name: 'The Classic London Executive Tour',
    price: '£899',
    duration: '8 hours',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    description: 'A premium one-day executive sightseeing experience designed for comfort and efficiency.',
    highlights: [
      'Buckingham Palace & Changing of the Guard',
      'Westminster Abbey & Big Ben',
      'Tower of London & Crown Jewels',
      'Tower Bridge & Thames Riverside',
      'Canary Wharf Financial District',
      'Professional driver and luxury vehicle',
      'Complimentary refreshments',
      'Flexible itinerary adjustments'
    ],
    included: ['Luxury vehicle with professional chauffeur', 'Bottled water and refreshments', 'WiFi connectivity', 'Phone charging facilities']
  },
  {
    id: 'bespoke-tours',
    name: 'Bespoke Executive Tours',
    price: 'Custom',
    duration: 'Flexible',
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80',
    description: 'Fully customized tours designed around your specific interests and schedule.',
    highlights: [
      'Personalized itinerary planning',
      'Expert local guides available',
      'Access to exclusive locations',
      'VIP treatment at attractions',
      'Flexible timing and duration',
      'Multi-day tour options',
      'Corporate group arrangements',
      'Event coordination services'
    ],
    included: ['Dedicated tour coordinator', 'Premium vehicle selection', 'VIP access arrangements', 'Concierge services']
  },
  {
    id: 'airport-transfer',
    name: 'Executive Airport Transfers',
    price: '£150',
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    description: 'Premium airport pickup and drop-off service for the discerning traveler.',
    highlights: [
      'Meet & greet at arrivals',
      'Flight tracking and monitoring',
      'Luggage assistance',
      'All London airports covered',
      'Business class comfort',
      'Privacy and discretion',
      'Complimentary wait time',
      'Corporate account options'
    ],
    included: ['Professional chauffeur', 'Flight monitoring', 'Luggage handling', 'Refreshments onboard']
  },
  {
    id: 'outside-london',
    name: 'Executive Trips Outside London',
    price: '£899 + £2/mile',
    duration: 'Full day',
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80',
    description: 'Bespoke executive trips to destinations beyond London for tailored experiences.',
    highlights: [
      'Oxford and Cambridge Universities',
      'Cotswolds villages tour',
      'Windsor Castle and Eton',
      'Stonehenge and Bath',
      'Brighton and South Coast',
      'Custom destination planning',
      'Historic estates and castles',
      'Wine country excursions'
    ],
    included: ['Executive vehicle and driver', 'Fuel and parking', 'Route planning', 'Itinerary coordination']
  },
  {
    id: 'corporate',
    name: 'Corporate & Business Services',
    price: 'Custom',
    duration: 'As required',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    description: 'Comprehensive executive transportation for businesses and corporate events.',
    highlights: [
      'Multi-day conference transport',
      'Executive roadshows',
      'Client entertainment tours',
      'Team building excursions',
      'Board meeting transfers',
      'Corporate account management',
      'Invoice and reporting services',
      'Dedicated account manager'
    ],
    included: ['Fleet coordination', 'Corporate billing', 'Event planning support', 'Priority booking']
  },
  {
    id: 'special-events',
    name: 'Special Events & Occasions',
    price: 'From £500',
    duration: 'Varies',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    description: 'Luxury transportation for weddings, celebrations, and special occasions.',
    highlights: [
      'Wedding day transportation',
      'Anniversary celebrations',
      'Theatre and opera packages',
      'Sporting event transfers',
      'Fine dining experiences',
      'Birthday celebrations',
      'Proposal arrangements',
      'Special request accommodations'
    ],
    included: ['Premium vehicle presentation', 'Red carpet service', 'Champagne service', 'Photography stops']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative bg-executive-navy text-executive-cream py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
            alt="London skyline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">Premium Services</span>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Executive Travel Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-executive-cream/90 leading-relaxed">
              Bespoke luxury sightseeing and executive transportation solutions tailored for discerning travelers
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-executive bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {services.map((service) => (
              <Card key={service.id} dark={false} variant="elevated" className="overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-executive-cream font-heading font-bold text-xl sm:text-2xl mb-1">{service.name}</h3>
                    <div className="flex items-center gap-3 text-executive-gold text-sm">
                      <span className="font-semibold">{service.price}</span>
                      <span className="text-executive-cream/70">•</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col pt-6">
                  <p className="text-executive-charcoal mb-6 text-sm sm:text-base">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-executive-navy mb-3 text-sm sm:text-base">Tour Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.highlights.slice(0, 6).map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs sm:text-sm text-executive-charcoal">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-executive-cream pt-4 mt-auto">
                    <h5 className="text-xs font-semibold text-executive-navy/70 mb-2">Included:</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.included.map((item, index) => (
                        <span key={index} className="text-xs bg-executive-cream text-executive-charcoal px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full" size="lg">Book This Service</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="section-executive bg-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
              Why Book With Us
            </h2>
            <div className="executive-divider w-16 md:w-24 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card dark className="text-center bg-executive-navy border-executive-navy">
              <CardHeader>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <CardTitle className="text-lg sm:text-xl">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Luxury vehicles, professional chauffeurs, and impeccable service standards
                </CardDescription>
              </CardContent>
            </Card>

            <Card dark className="text-center bg-executive-navy border-executive-navy">
              <CardHeader>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <CardTitle className="text-lg sm:text-xl">Punctuality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  We value your time with precise scheduling and reliable service
                </CardDescription>
              </CardContent>
            </Card>

            <Card dark className="text-center bg-executive-navy border-executive-navy">
              <CardHeader>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-executive-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <CardTitle className="text-lg sm:text-xl">24/7 Concierge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Round-the-clock support for all your travel needs
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-executive-gradient text-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            Ready to Book Your Experience?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-executive-cream/90">
            Contact us today to discuss your requirements and create a bespoke travel experience
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              Request a Quote
            </Button>
            <Button variant="light" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
