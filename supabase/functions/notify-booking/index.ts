import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

interface BookingPayload {
    type: 'INSERT';
    table: 'bookings';
    record: {
        id: string;
        service_name: string;
        customer_name: string;
        customer_email: string;
        customer_phone: string;
        start_date: string;
        end_date: string;
        passengers: number;
        total_price: number;
        special_requests: string | null;
    };
}

Deno.serve(async (req: Request) => {
    try {
        const payload: BookingPayload = await req.json();

        if (payload.type !== 'INSERT') {
            return new Response(JSON.stringify({ message: 'Not an insert event' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const booking = payload.record;

        // Send email to admin
        const adminEmailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Executive Sightseeing <bookings@executivesightseeing.com>',
                to: ['admin@executivesightseeing.com'], // Replace with actual admin email
                subject: `New Booking: ${booking.service_name}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a365d;">New Booking Received</h2>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #d4af37; margin-top: 0;">Booking Details</h3>
              <p><strong>Service:</strong> ${booking.service_name}</p>
              <p><strong>Customer:</strong> ${booking.customer_name}</p>
              <p><strong>Email:</strong> ${booking.customer_email}</p>
              <p><strong>Phone:</strong> ${booking.customer_phone}</p>
              <p><strong>Dates:</strong> ${new Date(booking.start_date).toLocaleDateString()} - ${new Date(booking.end_date).toLocaleDateString()}</p>
              <p><strong>Passengers:</strong> ${booking.passengers}</p>
              <p><strong>Total Price:</strong> £${booking.total_price}</p>
              ${booking.special_requests ? `<p><strong>Special Requests:</strong> ${booking.special_requests}</p>` : ''}
            </div>
            
            <p style="color: #718096;">
              <a href="https://yourdomain.com/admin" style="background: #d4af37; color: #1a365d; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                View in Dashboard
              </a>
            </p>
          </div>
        `
            })
        });

        if (!adminEmailResponse.ok) {
            console.error('Failed to send admin email:', await adminEmailResponse.text());
        }

        // Send confirmation email to customer
        const customerEmailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Executive Sightseeing <bookings@executivesightseeing.com>',
                to: [booking.customer_email],
                subject: 'Booking Confirmation - Executive Sightseeing',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a365d;">Thank You for Your Booking!</h2>
            
            <p>Dear ${booking.customer_name},</p>
            
            <p>We have received your booking request for <strong>${booking.service_name}</strong>.</p>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #d4af37; margin-top: 0;">Your Booking Summary</h3>
              <p><strong>Service:</strong> ${booking.service_name}</p>
              <p><strong>Dates:</strong> ${new Date(booking.start_date).toLocaleDateString()} - ${new Date(booking.end_date).toLocaleDateString()}</p>
              <p><strong>Passengers:</strong> ${booking.passengers}</p>
              <p><strong>Total Price:</strong> £${booking.total_price}</p>
              ${booking.special_requests ? `<p><strong>Special Requests:</strong> ${booking.special_requests}</p>` : ''}
            </div>
            
            <p>Our concierge team will review your request and contact you shortly at <strong>${booking.customer_phone}</strong> to confirm availability and finalize arrangements.</p>
            
            <p style="color: #718096; font-size: 14px; margin-top: 30px;">
              Best regards,<br>
              Executive Sightseeing Team
            </p>
          </div>
        `
            })
        });

        if (!customerEmailResponse.ok) {
            console.error('Failed to send customer email:', await customerEmailResponse.text());
        }

        return new Response(
            JSON.stringify({
                message: 'Emails sent successfully',
                adminEmail: adminEmailResponse.ok,
                customerEmail: customerEmailResponse.ok
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
});
