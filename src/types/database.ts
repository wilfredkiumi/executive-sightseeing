export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone: string | null
          user_type: 'individual' | 'corporate_admin' | 'business_admin'
          corporate_id: string | null
          preferences: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          phone?: string | null
          user_type?: 'individual' | 'corporate_admin' | 'business_admin'
          corporate_id?: string | null
          preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          phone?: string | null
          user_type?: 'individual' | 'corporate_admin' | 'business_admin'
          corporate_id?: string | null
          preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      corporate_accounts: {
        Row: {
          id: string
          company_name: string
          contact_person: string
          email: string
          phone: string
          billing_address: Json
          payment_terms: string
          discount_rate: number
          credit_limit: number | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_name: string
          contact_person: string
          email: string
          phone: string
          billing_address: Json
          payment_terms: string
          discount_rate?: number
          credit_limit?: number | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_name?: string
          contact_person?: string
          email?: string
          phone?: string
          billing_address?: Json
          payment_terms?: string
          discount_rate?: number
          credit_limit?: number | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          description: string
          duration: number
          base_price: number
          max_passengers: number
          inclusions: string[]
          route: Json
          images: string[]
          availability_rules: Json
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          duration: number
          base_price: number
          max_passengers: number
          inclusions: string[]
          route: Json
          images: string[]
          availability_rules: Json
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          duration?: number
          base_price?: number
          max_passengers?: number
          inclusions?: string[]
          route?: Json
          images?: string[]
          availability_rules?: Json
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          user_id: string
          service_id: string
          booking_date: string
          time_slot: string
          passenger_count: number
          special_requirements: string | null
          pickup_location: Json
          dropoff_location: Json | null
          status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
          payment_status: 'pending' | 'paid' | 'refunded' | 'failed'
          total_amount: number
          currency: string
          driver_id: string | null
          vehicle_id: string | null
          stripe_payment_intent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          service_id: string
          booking_date: string
          time_slot: string
          passenger_count: number
          special_requirements?: string | null
          pickup_location: Json
          dropoff_location?: Json | null
          status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'paid' | 'refunded' | 'failed'
          total_amount: number
          currency: string
          driver_id?: string | null
          vehicle_id?: string | null
          stripe_payment_intent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          service_id?: string
          booking_date?: string
          time_slot?: string
          passenger_count?: number
          special_requirements?: string | null
          pickup_location?: Json
          dropoff_location?: Json | null
          status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'paid' | 'refunded' | 'failed'
          total_amount?: number
          currency?: string
          driver_id?: string | null
          vehicle_id?: string | null
          stripe_payment_intent_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      drivers: {
        Row: {
          id: string
          first_name: string
          last_name: string
          phone: string
          email: string
          license_number: string
          license_expiry: string
          rating: number
          is_available: boolean
          current_location: Json | null
          assigned_vehicle_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          phone: string
          email: string
          license_number: string
          license_expiry: string
          rating?: number
          is_available?: boolean
          current_location?: Json | null
          assigned_vehicle_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          phone?: string
          email?: string
          license_number?: string
          license_expiry?: string
          rating?: number
          is_available?: boolean
          current_location?: Json | null
          assigned_vehicle_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      vehicles: {
        Row: {
          id: string
          make: string
          model: string
          year: number
          license_plate: string
          capacity: number
          type: 'executive' | 'luxury' | 'premium'
          is_available: boolean
          last_maintenance: string
          next_maintenance: string
          current_driver_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          make: string
          model: string
          year: number
          license_plate: string
          capacity: number
          type: 'executive' | 'luxury' | 'premium'
          is_available?: boolean
          last_maintenance: string
          next_maintenance: string
          current_driver_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          make?: string
          model?: string
          year?: number
          license_plate?: string
          capacity?: number
          type?: 'executive' | 'luxury' | 'premium'
          is_available?: boolean
          last_maintenance?: string
          next_maintenance?: string
          current_driver_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          booking_id: string
          user_id: string
          service_id: string
          rating: number
          title: string | null
          comment: string | null
          is_verified: boolean
          is_published: boolean
          reviewer_credentials: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          user_id: string
          service_id: string
          rating: number
          title?: string | null
          comment?: string | null
          is_verified?: boolean
          is_published?: boolean
          reviewer_credentials?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          user_id?: string
          service_id?: string
          rating?: number
          title?: string | null
          comment?: string | null
          is_verified?: boolean
          is_published?: boolean
          reviewer_credentials?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_type: 'individual' | 'corporate_admin' | 'business_admin'
      booking_status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
      payment_status: 'pending' | 'paid' | 'refunded' | 'failed'
      vehicle_type: 'executive' | 'luxury' | 'premium'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}