import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const values = [
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in every aspect of our service, from vehicle maintenance to customer care.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  },
  {
    title: 'Integrity',
    description: 'Honesty, transparency, and ethical practices form the foundation of our business relationships.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Professionalism',
    description: 'Our team delivers courteous, discreet, and impeccable service with attention to every detail.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We continuously enhance our services and adapt to the evolving needs of executive travelers.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    )
  }
];

const team = [
  {
    role: 'Professional Chauffeurs',
    description: 'Experienced, licensed drivers with extensive knowledge of London and impeccable driving records.',
    count: '15+'
  },
  {
    role: 'Customer Service',
    description: 'Dedicated support team available 24/7 to ensure seamless travel experiences.',
    count: '24/7'
  },
  {
    role: 'Fleet Managers',
    description: 'Specialists ensuring every vehicle meets our exacting standards of presentation and performance.',
    count: 'Expert'
  }
];

const milestones = [
  { year: '2008', event: 'Company founded in London' },
  { year: '2010', event: 'Expanded fleet to 10 vehicles' },
  { year: '2015', event: 'Reached 500+ satisfied corporate clients' },
  { year: '2018', event: 'Launched bespoke tour services' },
  { year: '2020', event: 'Introduced contactless booking and payment' },
  { year: '2024', event: 'Serving 1000+ executive clients annually' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative bg-executive-navy text-executive-cream py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80"
            alt="London cityscape"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <span className="text-executive-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">About Us</span>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Executive Sightseeing Ltd
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-executive-cream/90 leading-relaxed">
              A Kenyan-owned luxury sightseeing company redefining executive travel in London since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-executive bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
                Our Story
              </h2>
              <div className="executive-divider w-16 md:w-24 mx-auto"></div>
            </div>

            <div className="prose prose-lg text-executive-charcoal space-y-6 text-sm sm:text-base md:text-lg">
              <p className="text-center md:text-left">
                Executive Sightseeing Ltd was founded with a clear vision: to provide discerning travelers with
                an unparalleled luxury sightseeing experience in London. As a proudly Kenyan-owned business, we
                bring a unique perspective to executive travel, combining world-class service standards with genuine
                warmth and personal attention.
              </p>
              <p className="text-center md:text-left">
                Our journey began in 2008 when our founder, inspired by London's rich history and vibrant culture,
                recognized the need for a premium sightseeing service tailored specifically for VIPs, CEOs, and
                business leaders. What started with a single luxury vehicle has grown into a comprehensive fleet
                serving hundreds of executive clients annually.
              </p>
              <p className="text-center md:text-left">
                Today, we're proud to be one of London's most trusted names in executive transportation and luxury
                sightseeing. Our commitment to excellence, combined with our deep knowledge of London and dedication
                to customer satisfaction, has earned us the loyalty of corporate clients, diplomats, and high-profile
                individuals from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
              Our Values
            </h2>
            <div className="executive-divider w-16 md:w-24 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-executive-charcoal">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value) => (
              <Card key={value.title} dark className="text-center group hover:shadow-xl transition-all duration-300 bg-executive-navy border-executive-navy">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-executive-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-executive-navy">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-white/90">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
              Our Journey
            </h2>
            <div className="executive-divider w-16 md:w-24 mx-auto"></div>
          </div>

          <div>
            <div className="space-y-6 md:space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-executive-gold rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-executive-navy font-bold text-sm sm:text-base">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-3 md:pt-5">
                    <div className="bg-executive-cream rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-executive-charcoal text-sm sm:text-base md:text-lg">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-executive-cream py-12 md:py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-executive-navy">
              Our Team
            </h2>
            <div className="executive-divider w-16 md:w-24 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-executive-charcoal">
              Dedicated professionals committed to your exceptional experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member) => (
              <Card key={member.role} variant="elevated" className="text-center">
                <CardHeader>
                  <div className="text-4xl sm:text-5xl font-bold text-executive-gold mb-3">{member.count}</div>
                  <CardTitle className="text-lg sm:text-xl">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-white/90">{member.description}</p>
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
            Experience the Difference
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-executive-cream/90">
            Join hundreds of satisfied executives who trust us with their London travel needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              Book Your Experience
            </Button>
            <Button variant="light" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
