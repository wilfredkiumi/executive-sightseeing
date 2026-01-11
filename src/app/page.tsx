import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Stats Bar */}
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

      {/* Why Choose Us Section */}
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
            <Card className="text-center group">
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

            <Card className="text-center group">
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

            <Card className="text-center group">
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

            <Card className="text-center group">
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

      {/* Services Preview */}
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
            <Card variant="elevated" className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-executive-gold to-[#b8941f]"></div>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">The Classic London Executive Tour</CardTitle>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-executive-gold">£899</div>
                    <div className="text-xs text-executive-charcoal/60">per person</div>
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
                    <span className="text-sm text-executive-charcoal">8 hours total duration (8:00 am – 4:00 pm)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Buckingham Palace & Westminster</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Tower Bridge & Thames Riverside</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Canary Wharf Financial District</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Professional driver and luxury vehicle</span>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">Book This Tour</Button>
              </CardContent>
            </Card>

            <Card variant="elevated" className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-executive-gold to-[#b8941f]"></div>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">Executive Trips Outside London</CardTitle>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-executive-gold">£899</div>
                    <div className="text-xs text-executive-charcoal/60">+ £2/mile</div>
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
                    <span className="text-sm text-executive-charcoal">Fully customized itineraries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Professional chauffeur service</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Flexible scheduling options</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Premium vehicle selection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-executive-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-executive-charcoal">Concierge-level service</span>
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

      {/* Testimonial Section */}
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
            <Card className="glass-effect border-executive-gold/30">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-executive-charcoal mb-4 italic">
                  "Exceptional service from start to finish. The attention to detail and professionalism exceeded all expectations."
                </p>
                <div className="border-t border-executive-gold/20 pt-4">
                  <p className="font-semibold text-executive-navy">Sarah Johnson</p>
                  <p className="text-sm text-executive-charcoal/60">CEO, Tech Innovations Ltd</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-executive-gold/30">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-executive-charcoal mb-4 italic">
                  "The perfect blend of luxury and efficiency. Made our London visit truly memorable and hassle-free."
                </p>
                <div className="border-t border-executive-gold/20 pt-4">
                  <p className="font-semibold text-executive-navy">Michael Chen</p>
                  <p className="text-sm text-executive-charcoal/60">Managing Director, Global Finance Corp</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-executive-gold/30">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-executive-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-executive-charcoal mb-4 italic">
                  "Outstanding professionalism and knowledge. Their service truly reflects the executive experience they promise."
                </p>
                <div className="border-t border-executive-gold/20 pt-4">
                  <p className="font-semibold text-executive-navy">Emma Williams</p>
                  <p className="text-sm text-executive-charcoal/60">VP Operations, International Ventures</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
            <Button variant="secondary" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 border-2 border-executive-cream text-executive-cream hover:bg-executive-cream hover:text-executive-navy shadow-xl w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
