# Design Document

## Overview

Executive Sightseeing Ltd requires a sophisticated, full-stack web application with mobile companion apps that delivers luxury-grade user experiences while managing complex business operations. The system will serve three primary user types: executive clients seeking premium sightseeing services, corporate administrators managing multiple bookings, and business administrators overseeing operations.

The application emphasizes performance, security, and scalability while maintaining the refined aesthetic expected by high-end clientele. The architecture supports real-time booking management, integrated payment processing, comprehensive content management, and advanced operational features including driver management, weather integration, and multi-currency support.

## Architecture

### Technology Stack

**Frontend Framework**: Next.js 14 with TypeScript
- Server-side rendering for optimal SEO performance
- App Router for modern routing and layouts
- Built-in optimization for images, fonts, and performance
- TypeScript for type safety and developer experience

**Styling**: Tailwind CSS with Headless UI
- Utility-first CSS framework for rapid development
- Consistent design system with executive-appropriate aesthetics
- Responsive design with mobile-first approach
- Custom color palette reflecting luxury branding

**Backend**: Next.js API Routes with TypeScript
- Serverless functions for scalable backend operations
- Built-in API routing with TypeScript support
- Middleware for authentication and request processing

**Database**: Supabase (PostgreSQL)
- Managed PostgreSQL with real-time subscriptions
- Built-in authentication and row-level security
- Automatic API generation with TypeScript support
- Real-time updates for booking availability

**Content Management**: Sanity CMS
- Headless CMS for flexible content management
- Real-time collaboration for content updates
- Image optimization and CDN delivery
- Structured content with custom schemas

**Payment Processing**: Stripe
- Secure payment processing with PCI compliance
- Support for multiple currencies and payment methods
- Subscription management for corporate accounts
- Webhook integration for payment status updates

**Authentication**: Supabase Auth
- Multi-provider authentication (email, social, corporate SSO)
- Row-level security for data protection
- JWT-based session management
- Role-based access control

**Mobile Applications**: React Native with Expo
- Cross-platform mobile development
- Shared codebase with web application
- Native performance with JavaScript flexibility
- Push notifications and offline capabilities

**Additional Integrations**:
- Google Maps API for location services
- OpenWeatherMap API for weather data
- Twilio for SMS notifications
- Mailchimp/ConvertKit for email marketing
- Vercel for hosting and deployment

### System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Client    │    │  Mobile Apps    │    │  Admin Panel    │
│   (Next.js)     │    │ (React Native)  │    │   (Next.js)     │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                    ┌─────────────┴─────────────┐
                    │     API Layer             │
                    │   (Next.js API Routes)    │
                    └─────────────┬─────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
    ┌─────┴─────┐         ┌───────┴───────┐       ┌───────┴───────┐
    │ Supabase  │         │   Sanity CMS  │       │    Stripe     │
    │(Database) │         │   (Content)   │       │  (Payments)   │
    └───────────┘         └───────────────┘       └───────────────┘
          │
    ┌─────┴─────┐
    │ External  │
    │   APIs    │
    │(Maps,SMS, │
    │ Weather)  │
    └───────────┘
```

## Components and Interfaces

### Core Components

**1. Booking Engine**
- Real-time availability calendar with time slot management
- Multi-step booking flow with service selection and customization
- Dynamic pricing calculation with corporate rates and discounts
- Integration with payment processing and confirmation systems

**2. Payment System**
- Stripe integration for secure payment processing
- Multi-currency support with real-time conversion
- Corporate billing and invoicing capabilities
- Refund and cancellation processing

**3. Content Management Interface**
- Sanity CMS integration for service catalog management
- Real-time content updates with webhook synchronization
- Media management with optimized delivery
- Multi-language content support preparation

**4. User Management System**
- Individual and corporate account management
- Role-based access control (customer, corporate admin, business admin)
- Authentication with social and corporate SSO options
- Profile management with preferences and history

**5. Operational Management**
- Driver assignment and tracking system
- Vehicle maintenance scheduling and availability
- Weather integration for tour planning
- Emergency contact and safety protocols

### API Interfaces

**Booking API**
```typescript
interface BookingAPI {
  createBooking(booking: BookingRequest): Promise<BookingResponse>
  getAvailability(date: Date, service: string): Promise<AvailabilityResponse>
  updateBooking(id: string, updates: BookingUpdate): Promise<BookingResponse>
  cancelBooking(id: string, reason: string): Promise<CancellationResponse>
}
```

**Payment API**
```typescript
interface PaymentAPI {
  processPayment(payment: PaymentRequest): Promise<PaymentResponse>
  createPaymentIntent(amount: number, currency: string): Promise<PaymentIntent>
  handleRefund(paymentId: string, amount?: number): Promise<RefundResponse>
  getCorporateRates(corporateId: string): Promise<RateStructure>
}
```

**Content API**
```typescript
interface ContentAPI {
  getServices(): Promise<Service[]>
  getServiceDetails(id: string): Promise<ServiceDetails>
  updateContent(content: ContentUpdate): Promise<ContentResponse>
  getReviews(serviceId?: string): Promise<Review[]>
}
```

## Data Models

### Core Entities

**User Model**
```typescript
interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  userType: 'individual' | 'corporate_admin' | 'business_admin'
  corporateId?: string
  preferences: UserPreferences
  createdAt: Date
  updatedAt: Date
}

interface UserPreferences {
  currency: string
  timezone: string
  language: string
  notifications: NotificationSettings
}
```

**Booking Model**
```typescript
interface Booking {
  id: string
  userId: string
  serviceId: string
  bookingDate: Date
  timeSlot: string
  passengerCount: number
  specialRequirements?: string
  pickupLocation: Location
  dropoffLocation?: Location
  status: BookingStatus
  paymentStatus: PaymentStatus
  totalAmount: number
  currency: string
  driverId?: string
  vehicleId?: string
  createdAt: Date
  updatedAt: Date
}

type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
type PaymentStatus = 'pending' | 'paid' | 'refunded' | 'failed'
```

**Service Model**
```typescript
interface Service {
  id: string
  name: string
  description: string
  duration: number
  basePrice: number
  maxPassengers: number
  inclusions: string[]
  route: RoutePoint[]
  images: string[]
  availability: AvailabilityRule[]
  isActive: boolean
}

interface RoutePoint {
  name: string
  description: string
  coordinates: [number, number]
  estimatedDuration: number
  isOptional: boolean
}
```

**Corporate Account Model**
```typescript
interface CorporateAccount {
  id: string
  companyName: string
  contactPerson: string
  email: string
  phone: string
  billingAddress: Address
  paymentTerms: string
  discountRate: number
  creditLimit?: number
  isActive: boolean
  administrators: string[] // User IDs
}
```

**Driver Model**
```typescript
interface Driver {
  id: string
  firstName: string
  lastName: string
  phone: string
  email: string
  licenseNumber: string
  licenseExpiry: Date
  rating: number
  isAvailable: boolean
  currentLocation?: [number, number]
  assignedVehicleId?: string
}
```

**Vehicle Model**
```typescript
interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  licensePlate: string
  capacity: number
  type: 'executive' | 'luxury' | 'premium'
  isAvailable: boolean
  lastMaintenance: Date
  nextMaintenance: Date
  currentDriverId?: string
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*
### Proper
ty Reflection

After reviewing all properties identified in the prework, several can be consolidated to eliminate redundancy:

- Properties related to email notifications (6.1, 6.2, 9.2, 10.1) can be combined into a comprehensive notification property
- Properties about data storage and security (5.1, 5.2, 7.1) can be consolidated into a data security property  
- Properties about real-time updates (3.2, 8.2, 8.4) can be combined into a real-time synchronization property
- Properties about performance (1.5, 4.1, 4.2) can be consolidated into a performance property
- Properties about content display (1.2, 9.1, 11.1) can be combined into a content presentation property

### Correctness Properties

**Property 1: Booking Creation Completeness**
*For any* valid booking request with service selection, date, and passenger details, the system should create a complete booking record with all required fields populated and generate a unique reference number
**Validates: Requirements 2.1, 2.4**

**Property 2: Real-time Availability Synchronization**
*For any* booking creation or cancellation, all calendar displays across all user sessions should reflect the updated availability within 30 seconds
**Validates: Requirements 8.2, 8.3, 8.4**

**Property 3: Payment Processing Security**
*For any* payment transaction, the system should use HTTPS encryption, process payments through Stripe without storing credit card details locally, and generate proper audit trails
**Validates: Requirements 5.1, 5.2, 2.3**

**Property 4: Notification Delivery Consistency**
*For any* booking confirmation, modification, or cancellation, the system should send appropriate notifications (email and SMS) containing all required information within 5 minutes
**Validates: Requirements 6.1, 6.2, 6.5, 18.1**

**Property 5: Corporate Account Rate Application**
*For any* booking made by a corporate account user, the system should automatically apply the correct corporate discount rate and track usage against account limits
**Validates: Requirements 12.2, 12.5**

**Property 6: Content Management Synchronization**
*For any* content update in Sanity CMS, the public website should reflect changes within 30 seconds through webhook integration
**Validates: Requirements 3.2, 7.3**

**Property 7: Multi-currency Consistency**
*For any* pricing display, when a customer sets currency preferences, all prices throughout the booking process should display in the selected currency with real-time conversion rates
**Validates: Requirements 18.2, 18.5**

**Property 8: Driver Assignment Optimization**
*For any* confirmed booking, the system should assign an available driver based on location proximity, availability, and performance ratings
**Validates: Requirements 13.1, 13.3**

**Property 9: Weather Integration Responsiveness**
*For any* booking with dates within 7 days, the system should provide weather forecasts and suggest tour modifications if severe weather is predicted
**Validates: Requirements 14.1, 14.2**

**Property 10: Mobile-Web Data Synchronization**
*For any* booking or account change made on mobile app, the web platform and admin systems should reflect the same data immediately
**Validates: Requirements 16.2, 7.3**

**Property 11: Performance Standards Compliance**
*For any* page load or user interaction, the system should complete initial rendering within 3 seconds and provide immediate visual feedback for user actions
**Validates: Requirements 1.5, 4.1, 4.3**

**Property 12: Cross-platform Functionality Parity**
*For any* core booking functionality, mobile devices should provide the same capabilities as the web platform with responsive design
**Validates: Requirements 1.4, 16.1**

**Property 13: Review System Integrity**
*For any* completed booking, the system should send review requests and display only verified, moderated reviews with appropriate privacy protection
**Validates: Requirements 9.2, 9.3, 9.4**

**Property 14: Emergency Response Activation**
*For any* active tour, the system should provide immediate access to emergency contacts and real-time location tracking
**Validates: Requirements 13.4, 11.4**

**Property 15: SEO Optimization Completeness**
*For any* page or content update, the system should automatically generate proper meta tags, structured data, and update sitemaps for search engine optimization
**Validates: Requirements 15.1, 15.3**

## Error Handling

### Error Categories and Responses

**Payment Failures**
- Stripe payment processing errors should display user-friendly messages
- Failed payments should preserve booking details for retry attempts
- Automatic retry mechanisms for temporary payment gateway issues
- Fallback payment methods when primary method fails

**Booking Conflicts**
- Double-booking prevention through database constraints and real-time checks
- Graceful handling of simultaneous booking attempts for the same time slot
- Alternative date suggestions when requested slots become unavailable
- Clear communication of availability changes to users

**External Service Failures**
- Weather API failures should not prevent booking but should disable weather features
- Google Maps API issues should fallback to static maps or text directions
- SMS service failures should fallback to email notifications
- Email service failures should queue messages for retry

**Data Validation Errors**
- Client-side validation for immediate feedback
- Server-side validation for security and data integrity
- Clear error messages indicating specific validation failures
- Form state preservation during error correction

**Authentication and Authorization Errors**
- Session timeout handling with automatic renewal options
- Role-based access control with appropriate error messages
- Corporate account permission errors with escalation options
- Multi-factor authentication failure recovery

## Testing Strategy

### Dual Testing Approach

The testing strategy employs both unit testing and property-based testing to ensure comprehensive coverage:

**Unit Testing with Jest and React Testing Library**
- Component rendering and interaction testing
- API endpoint testing with mock data
- Integration testing for payment flows
- Authentication and authorization testing
- Database operation testing with test fixtures

**Property-Based Testing with fast-check**
- Each correctness property will be implemented as a property-based test
- Minimum 100 iterations per property test to ensure statistical confidence
- Custom generators for booking data, user profiles, and service configurations
- Property tests will be tagged with comments referencing design document properties
- Format: `**Feature: executive-sightseeing-website, Property {number}: {property_text}**`

**Testing Requirements**
- All property-based tests must run minimum 100 iterations
- Each correctness property must be implemented by exactly one property-based test
- Property tests must use fast-check library for JavaScript/TypeScript
- Unit tests complement property tests by covering specific examples and edge cases
- Integration tests verify end-to-end workflows including external service interactions

**Test Environment Setup**
- Separate test database with realistic data fixtures
- Mock external APIs (Stripe, Google Maps, Weather) for consistent testing
- Automated test execution in CI/CD pipeline
- Performance testing for load handling and response times
- Security testing for authentication and data protection

### Mobile Testing Strategy

**React Native Testing**
- Detox for end-to-end mobile testing
- Jest for unit testing mobile-specific components
- Platform-specific testing for iOS and Android differences
- Push notification testing with mock notification services
- Offline functionality testing with network simulation

### Performance Testing

**Load Testing**
- Concurrent user simulation for booking system
- Database performance under high query loads
- API response time monitoring
- CDN performance for content delivery
- Mobile app performance on various devices

**Monitoring and Alerting**
- Real-time performance monitoring with alerts
- Error tracking and automatic notification
- User experience monitoring with analytics
- System health dashboards for administrators
- Automated backup verification and recovery testing