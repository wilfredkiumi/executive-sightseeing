-- Executive Sightseeing Database Schema

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE user_type AS ENUM ('individual', 'corporate_admin', 'business_admin');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'refunded', 'failed');
CREATE TYPE vehicle_type AS ENUM ('executive', 'luxury', 'premium');

-- Corporate Accounts Table
CREATE TABLE corporate_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50) NOT NULL,
    billing_address JSONB NOT NULL,
    payment_terms VARCHAR(100) NOT NULL DEFAULT '30 days',
    discount_rate DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    credit_limit DECIMAL(10,2),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users Table (extends Supabase auth.users)
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    user_type user_type NOT NULL DEFAULT 'individual',
    corporate_id UUID REFERENCES corporate_accounts(id) ON DELETE SET NULL,
    preferences JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services Table
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    duration INTEGER NOT NULL, -- in minutes
    base_price DECIMAL(10,2) NOT NULL,
    max_passengers INTEGER NOT NULL DEFAULT 4,
    inclusions TEXT[] NOT NULL DEFAULT '{}',
    route JSONB NOT NULL, -- array of route points with coordinates
    images TEXT[] NOT NULL DEFAULT '{}',
    availability_rules JSONB NOT NULL DEFAULT '{}',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Drivers Table
CREATE TABLE drivers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    license_number VARCHAR(50) NOT NULL UNIQUE,
    license_expiry DATE NOT NULL,
    rating DECIMAL(3,2) NOT NULL DEFAULT 5.00,
    is_available BOOLEAN NOT NULL DEFAULT true,
    current_location JSONB, -- {lat, lng, timestamp}
    assigned_vehicle_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vehicles Table
CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    license_plate VARCHAR(20) NOT NULL UNIQUE,
    capacity INTEGER NOT NULL,
    type vehicle_type NOT NULL DEFAULT 'executive',
    is_available BOOLEAN NOT NULL DEFAULT true,
    last_maintenance DATE NOT NULL,
    next_maintenance DATE NOT NULL,
    current_driver_id UUID REFERENCES drivers(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add foreign key constraint for drivers -> vehicles
ALTER TABLE drivers ADD CONSTRAINT fk_driver_vehicle 
    FOREIGN KEY (assigned_vehicle_id) REFERENCES vehicles(id) ON DELETE SET NULL;

-- Bookings Table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
    booking_date DATE NOT NULL,
    time_slot VARCHAR(20) NOT NULL, -- e.g., "09:00-17:00"
    passenger_count INTEGER NOT NULL,
    special_requirements TEXT,
    pickup_location JSONB NOT NULL, -- {address, lat, lng}
    dropoff_location JSONB, -- {address, lat, lng}
    status booking_status NOT NULL DEFAULT 'pending',
    payment_status payment_status NOT NULL DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'GBP',
    driver_id UUID REFERENCES drivers(id) ON DELETE SET NULL,
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE SET NULL,
    stripe_payment_intent_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews Table
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    is_verified BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT false,
    reviewer_credentials VARCHAR(255), -- e.g., "CEO, Tech Company"
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Availability Calendar Table
CREATE TABLE availability_calendar (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    time_slot VARCHAR(20) NOT NULL,
    max_bookings INTEGER NOT NULL DEFAULT 1,
    current_bookings INTEGER NOT NULL DEFAULT 0,
    is_blocked BOOLEAN NOT NULL DEFAULT false,
    blocked_reason VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(service_id, date, time_slot)
);

-- Email Marketing Lists Table
CREATE TABLE email_marketing_lists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    list_type VARCHAR(50) NOT NULL, -- 'customers', 'prospects', 'corporate'
    subscribed BOOLEAN NOT NULL DEFAULT true,
    subscription_source VARCHAR(100), -- 'booking', 'website', 'manual'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, list_type)
);

-- Loyalty Program Table
CREATE TABLE loyalty_program (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    points_balance INTEGER NOT NULL DEFAULT 0,
    tier_level VARCHAR(20) NOT NULL DEFAULT 'bronze', -- bronze, silver, gold, platinum
    total_spent DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    referral_code VARCHAR(20) UNIQUE,
    referred_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Referrals Table
CREATE TABLE referrals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    referrer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    referred_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    referral_code VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending, completed, rewarded
    reward_amount DECIMAL(10,2),
    booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications Table
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL, -- 'booking_confirmation', 'reminder', 'weather_alert', etc.
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT false,
    email_sent BOOLEAN NOT NULL DEFAULT false,
    sms_sent BOOLEAN NOT NULL DEFAULT false,
    push_sent BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_corporate_id ON users(corporate_id);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_service_id ON bookings(service_id);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_availability_service_date ON availability_calendar(service_id, date);
CREATE INDEX idx_reviews_service_id ON reviews(service_id);
CREATE INDEX idx_reviews_published ON reviews(is_published);
CREATE INDEX idx_drivers_available ON drivers(is_available);
CREATE INDEX idx_vehicles_available ON vehicles(is_available);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_corporate_accounts_updated_at BEFORE UPDATE ON corporate_accounts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_drivers_updated_at BEFORE UPDATE ON drivers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vehicles_updated_at BEFORE UPDATE ON vehicles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_availability_calendar_updated_at BEFORE UPDATE ON availability_calendar FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_email_marketing_lists_updated_at BEFORE UPDATE ON email_marketing_lists FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_loyalty_program_updated_at BEFORE UPDATE ON loyalty_program FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_referrals_updated_at BEFORE UPDATE ON referrals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_notifications_updated_at BEFORE UPDATE ON notifications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE corporate_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE loyalty_program ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_marketing_lists ENABLE ROW LEVEL SECURITY;

-- Users can read and update their own data
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- Corporate admins can view their company's users
CREATE POLICY "Corporate admins can view company users" ON users FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM users u 
        WHERE u.id = auth.uid() 
        AND u.user_type = 'corporate_admin' 
        AND u.corporate_id = users.corporate_id
    )
);

-- Users can view their own bookings
CREATE POLICY "Users can view own bookings" ON bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create bookings" ON bookings FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Corporate admins can view company bookings
CREATE POLICY "Corporate admins can view company bookings" ON bookings FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM users u 
        WHERE u.id = auth.uid() 
        AND u.user_type = 'corporate_admin' 
        AND u.corporate_id = (SELECT corporate_id FROM users WHERE id = bookings.user_id)
    )
);

-- Business admins can view all data
CREATE POLICY "Business admins can view all bookings" ON bookings FOR ALL 
USING (
    EXISTS (
        SELECT 1 FROM users u 
        WHERE u.id = auth.uid() 
        AND u.user_type = 'business_admin'
    )
);

-- Public read access for services (for browsing)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active services" ON services FOR SELECT USING (is_active = true);

-- Public read access for published reviews
CREATE POLICY "Anyone can view published reviews" ON reviews FOR SELECT USING (is_published = true);

-- Users can create reviews for their own bookings
CREATE POLICY "Users can create reviews for own bookings" ON reviews FOR INSERT 
WITH CHECK (
    auth.uid() = user_id AND 
    EXISTS (SELECT 1 FROM bookings WHERE id = booking_id AND user_id = auth.uid())
);

-- Insert sample data
INSERT INTO services (name, description, duration, base_price, max_passengers, inclusions, route, images) VALUES
(
    'The Classic London Executive Tour',
    'A premium one-day executive sightseeing experience designed for comfort and efficiency.',
    480, -- 8 hours
    899.00,
    4,
    ARRAY['Professional chauffeur', 'Luxury vehicle', 'Bottled water', 'WiFi', 'Phone chargers'],
    '[
        {"name": "Buckingham Palace", "description": "Official residence of the British monarch", "coordinates": [-0.1419, 51.5014], "estimatedDuration": 30, "isOptional": false},
        {"name": "Westminster & Big Ben", "description": "Houses of Parliament and iconic clock tower", "coordinates": [-0.1246, 51.4994], "estimatedDuration": 45, "isOptional": false},
        {"name": "Trafalgar Square", "description": "Historic public square", "coordinates": [-0.1278, 51.5080], "estimatedDuration": 20, "isOptional": false},
        {"name": "Tower Bridge", "description": "Iconic Victorian bridge", "coordinates": [-0.0754, 51.5055], "estimatedDuration": 30, "isOptional": false},
        {"name": "Canary Wharf", "description": "London''s financial district", "coordinates": [-0.0235, 51.5054], "estimatedDuration": 30, "isOptional": false}
    ]'::jsonb,
    ARRAY['/images/classic-tour-1.jpg', '/images/classic-tour-2.jpg']
),
(
    'Executive Airport Transfer',
    'Premium airport transfer service with meet and greet.',
    120, -- 2 hours
    150.00,
    4,
    ARRAY['Meet and greet service', 'Flight monitoring', 'Luxury vehicle', 'Bottled water'],
    '[
        {"name": "Heathrow Airport", "description": "London Heathrow Airport", "coordinates": [-0.4543, 51.4700], "estimatedDuration": 60, "isOptional": false},
        {"name": "Central London", "description": "Central London destination", "coordinates": [-0.1276, 51.5074], "estimatedDuration": 60, "isOptional": false}
    ]'::jsonb,
    ARRAY['/images/airport-transfer-1.jpg']
);

-- Insert sample availability
INSERT INTO availability_calendar (service_id, date, time_slot, max_bookings) 
SELECT 
    s.id,
    CURRENT_DATE + INTERVAL '1 day' * generate_series(1, 30),
    '09:00-17:00',
    2
FROM services s
WHERE s.name = 'The Classic London Executive Tour';

INSERT INTO availability_calendar (service_id, date, time_slot, max_bookings) 
SELECT 
    s.id,
    CURRENT_DATE + INTERVAL '1 day' * generate_series(1, 30),
    time_slot,
    1
FROM services s, 
     (VALUES ('06:00-08:00'), ('08:00-10:00'), ('10:00-12:00'), ('12:00-14:00'), ('14:00-16:00'), ('16:00-18:00'), ('18:00-20:00')) AS t(time_slot)
WHERE s.name = 'Executive Airport Transfer';