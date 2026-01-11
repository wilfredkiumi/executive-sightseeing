import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const fleet = [
  {
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Sedan',
    passengers: '3',
    luggage: '3',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    description: 'The epitome of luxury and comfort, perfect for executive travel and airport transfers.',
    features: [
      'Premium leather interior',
      'Climate control',
      'WiFi connectivity',
      'Privacy glass',
      'Refreshment bar',
      'Phone charging'
    ],
    ideal: ['Airport transfers', 'Business meetings', 'Executive travel', 'VIP occasions']
  },
  {
    name: 'Mercedes-Benz V-Class',
    category: 'Luxury MPV',
    passengers: '7',
    luggage: '7',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    description: 'Spacious luxury MPV ideal for group travel and extended tours with maximum comfort.',
    features: [
      'Spacious interior',
      'Captain seats',
      'Conference seating',
      'Entertainment system',
      'Ample luggage space',
      'WiFi and charging'
    ],
    ideal: ['Group tours', 'Family travel', 'Corporate events', 'Extended journeys']
  },
  {
    name: 'Range Rover',
    category: 'Luxury SUV',
    passengers: '4',
    luggage: '4',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    description: 'Commanding presence with unmatched luxury, perfect for making a statement.',
    features: [
      'All-weather capability',
      'Elevated seating',
      'Premium sound system',
      'Panoramic roof',
      'Advanced safety',
      'Superior comfort'
    ],
    ideal: ['Special events', 'Countryside tours', 'VIP transport', 'All-terrain travel']
  },
  {
    name: 'BMW 7 Series',
    category: 'Executive Sedan',
    passengers: '3',
    luggage: '3',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    description: 'German engineering excellence delivering sophisticated comfort and performance.',
    features: [
      'Executive lounge seating',
      'Massage functions',
      'Premium audio',
      'Gesture controls',
      'Ambient lighting',
      'Refrigerated compartment'
    ],
    ideal: ['Executive transfers', 'Business travel', 'Corporate accounts', 'Airport service']
  },
  {
    name: 'Mercedes-Benz E-Class',
    category: 'Premium Sedan',
    passengers: '3',
    luggage: '3',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    description: 'Perfect blend of luxury and efficiency for professional transportation needs.',
    features: [
      'Elegant interior',
      'Advanced navigation',
      'Safety systems',
      'Comfortable seating',
      'Climate zones',
      'Business amenities'
    ],
    ideal: ['Daily transfers', 'Business meetings', 'Short journeys', 'Professional service']
  },
  {
    name: 'Audi A8',
    category: 'Luxury Sedan',
    passengers: '3',
    luggage: '3',
    image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800&q=80',
    description: 'Technological innovation meets refined luxury in this flagship executive sedan.',
    features: [
      'Matrix LED headlights',
      'Virtual cockpit',
      'Quattro technology',
      'Premium Bang & Olufsen',
      'Massage seats',
      'Air suspension'
    ],
    ideal: ['VIP service', 'Executive travel', 'Technology enthusiasts', 'Long-distance comfort']
  }
];

const standards = [
  {
    title: 'Impeccable Maintenance',
    description: 'Every vehicle undergoes rigorous maintenance schedules and detailed inspections',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Professional Presentation',
    description: 'Vehicles are pristinely cleaned and presented for every journey',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Latest Technology',
    description: 'Modern amenities including WiFi, charging ports, and entertainment systems',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Safety First',
    description: 'Advanced safety features and fully insured for your peace of mind',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function FleetPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative bg-executive-navy text-executive-cream py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80"
            alt="Luxury vehicle"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">Our Fleet</span>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Premium Executive Vehicles
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-executive-cream/90 leading-relaxed">
              Experience London in ultimate comfort with our meticulously maintained fleet of luxury vehicles
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="bg-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
              Our Standards
            </h2>
            <div className="executive-divider w-16 md:w-24 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-executive-charcoal">
              Every vehicle in our fleet meets the highest standards of luxury, safety, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {standards.map((standard) => (
              <Card key={standard.title} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-executive-navy">
                    {standard.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg">{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{standard.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="section-executive bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
              Available Vehicles
            </h2>
            <div className="executive-divider w-16 md:w-24 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {fleet.map((vehicle) => (
              <Card key={vehicle.name} variant="elevated" className="overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs sm:text-sm text-executive-gold mb-1">{vehicle.category}</div>
                    <h3 className="text-executive-cream font-heading font-bold text-xl sm:text-2xl">{vehicle.name}</h3>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col pt-6">
                  <p className="text-executive-charcoal mb-4 text-sm sm:text-base">{vehicle.description}</p>

                  {/* Capacity */}
                  <div className="flex gap-6 mb-6 pb-6 border-b border-executive-cream">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-sm text-executive-charcoal">Up to {vehicle.passengers} passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-sm text-executive-charcoal">{vehicle.luggage} large bags</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-executive-navy mb-3 text-sm sm:text-base">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-executive-gold rounded-full"></div>
                          <span className="text-xs sm:text-sm text-executive-charcoal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mt-auto">
                    <h5 className="text-xs font-semibold text-executive-navy/70 mb-2">Ideal For:</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.ideal.map((use) => (
                        <span key={use} className="text-xs bg-executive-cream text-executive-charcoal px-2 py-1 rounded">
                          {use}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full" size="lg">Request This Vehicle</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-executive-gradient text-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            Experience Luxury Travel Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-executive-cream/90">
            Book your executive vehicle and enjoy the finest transportation London has to offer
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              Book Now
            </Button>
            <Button variant="light" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
