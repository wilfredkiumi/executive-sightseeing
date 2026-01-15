# Admin Dashboard & Email Notifications Setup Guide

## ✅ What's Been Implemented

### 1. Admin Dashboard (`/admin`)
- **Real-time booking updates** - New bookings appear instantly without refresh
- **Booking management** - Confirm, cancel, or reopen bookings
- **Statistics dashboard** - View total, pending, confirmed, and cancelled bookings
- **Filtering** - Filter bookings by status
- **Visual notifications** - Toast notifications for new bookings

### 2. Email Notifications (Edge Function)
- **Admin notifications** - Get emailed when new bookings arrive
- **Customer confirmations** - Customers receive booking confirmation emails
- **Professional templates** - Branded HTML email templates

## 🚀 Setup Instructions

### Step 1: Access the Admin Dashboard

1. Start your dev server (if not running):
   ```bash
   npm run dev
   ```

2. Navigate to: **http://localhost:3002/admin**

3. You should see:
   - Booking statistics (Total, Pending, Confirmed, Cancelled)
   - List of all bookings
   - Real-time updates when new bookings are created

### Step 2: Test Real-Time Notifications

1. Open the admin dashboard in one browser tab
2. Open the booking page in another tab: **http://localhost:3002/booking**
3. Create a test booking
4. Watch the admin dashboard update instantly with a notification!

### Step 3: Setup Email Notifications (Optional but Recommended)

#### A. Get Resend API Key

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Verify your domain OR use their test domain for development
3. Create an API key from the dashboard

#### B. Deploy the Edge Function

```bash
# Install Supabase CLI if you haven't
npm install -g supabase

# Login to Supabase
npx supabase login

# Set your Resend API key as a secret
npx supabase secrets set RESEND_API_KEY=re_your_actual_key_here --project-ref rsevtobpjkdilutbkwjg

# Deploy the email notification function
npx supabase functions deploy notify-booking --project-ref rsevtobpjkdilutbkwjg --no-verify-jwt
```

#### C. Create Database Webhook

Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/rsevtobpjkdilutbkwjg/database/hooks) and:

1. Click **Database** > **Webhooks**
2. Click **Create a new hook**
3. Configure:
   - **Name**: `notify-booking`
   - **Table**: `bookings`
   - **Events**: Check `Insert`
   - **Type**: `HTTP Request`
   - **Method**: `POST`
   - **URL**: `https://rsevtobpjkdilutbkwjg.supabase.co/functions/v1/notify-booking`
   - **HTTP Headers**:
     ```
     Content-Type: application/json
     Authorization: Bearer YOUR_ANON_KEY
     ```
4. Click **Create webhook**

#### D. Update Email Addresses

Edit `supabase/functions/notify-booking/index.ts`:
- Line 38: Replace `admin@executivesightseeing.com` with your actual admin email
- Line 37 & 72: Update `from` address to match your verified Resend domain

## 🧪 Testing Email Notifications

1. Create a test booking through the website
2. Check your admin email inbox
3. Check the customer email (use your own email when testing)
4. View function logs in Supabase Dashboard > Edge Functions > notify-booking

## 🔒 Security Note

The admin dashboard currently has no authentication. For production, you should:

1. Add authentication using Supabase Auth
2. Protect the `/admin` route with middleware
3. Add role-based access control

Example middleware (create `src/middleware.ts`):
```typescript
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Add auth check here
    // For now, you could use a simple password or implement full auth
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
```

## 📊 Next Steps

1. **Add Authentication** - Protect the admin dashboard
2. **Export Bookings** - Add CSV/PDF export functionality
3. **Search & Filters** - Add date range filters and search
4. **Booking Details Modal** - Click to view full booking details
5. **Status History** - Track when bookings change status
6. **SMS Notifications** - Add Twilio for SMS alerts

## 🎉 You're All Set!

Your admin dashboard is now live with real-time updates. Email notifications will work once you complete Step 3.

**Test it now:**
1. Go to http://localhost:3002/admin
2. Open http://localhost:3002/booking in another tab
3. Create a booking and watch it appear instantly!
