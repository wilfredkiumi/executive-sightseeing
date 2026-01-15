# Supabase Edge Functions Setup

## Email Notifications

The `notify-booking` Edge Function automatically sends email notifications when new bookings are created.

### Setup Instructions:

1. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Verify your domain (or use their test domain for development)

2. **Deploy the Edge Function:**
   ```bash
   # Set the Resend API key as a secret
   npx supabase secrets set RESEND_API_KEY=re_your_api_key_here --project-ref rsevtobpjkdilutbkwjg
   
   # Deploy the function
   npx supabase functions deploy notify-booking --project-ref rsevtobpjkdilutbkwjg
   ```

3. **Create Database Trigger:**
   Run this SQL in your Supabase SQL Editor:
   ```sql
   -- Create a webhook to call the Edge Function on new bookings
   create or replace function notify_new_booking()
   returns trigger as $$
   begin
     perform
       net.http_post(
         url := 'https://rsevtobpjkdilutbkwjg.supabase.co/functions/v1/notify-booking',
         headers := jsonb_build_object(
           'Content-Type', 'application/json',
           'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
         ),
         body := jsonb_build_object(
           'type', 'INSERT',
           'table', 'bookings',
           'record', row_to_json(new)
         )
       );
     return new;
   end;
   $$ language plpgsql;

   -- Attach trigger to bookings table
   create trigger on_booking_created
     after insert on bookings
     for each row
     execute function notify_new_booking();
   ```

4. **Update Email Addresses:**
   - Edit `supabase/functions/notify-booking/index.ts`
   - Replace `admin@executivesightseeing.com` with your actual admin email
   - Update the `from` address to match your verified domain

### Testing:

Create a test booking through the website and check:
- Admin receives notification email
- Customer receives confirmation email
- Check Supabase Function logs for any errors

### Alternative: Using Supabase Database Webhooks

Instead of a trigger, you can use Supabase's built-in webhooks:
1. Go to Database > Webhooks in Supabase Dashboard
2. Create a new webhook for `bookings` table
3. Set event to `INSERT`
4. Set URL to your Edge Function URL
