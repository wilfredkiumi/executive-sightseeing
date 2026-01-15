'use client';

import React, { useState } from 'react';
import { BookingCalendar, DateRange } from '@/components/booking/BookingCalendar';
import { ServiceSelector, services } from '@/components/booking/ServiceSelector';
import { PassengerForm } from '@/components/booking/PassengerForm';
import { BookingSummary } from '@/components/booking/BookingSummary';
import { Button } from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';
import { differenceInCalendarDays } from 'date-fns';

export default function BookingPage() {
    const [date, setDate] = useState<DateRange | undefined>(undefined);
    const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        passengers: 1,
        specialRequests: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const selectedService = services.find((s) => s.id === selectedServiceId);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!date?.from || !selectedServiceId) {
            alert('Please select a service and at least a start date.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Calculate Total Price (Logic duplicated from BookingSummary - should be refactored to utility in future)
            const basePrice = selectedService ? selectedService.price : 0;
            let duration = 1;
            if (date.from && date.to) {
                duration = differenceInCalendarDays(date.to, date.from) + 1;
            }
            const extraPassengerCost = Number(formData.passengers) > 2 ? (Number(formData.passengers) - 2) * 50 : 0;
            const dailyTotal = basePrice + extraPassengerCost;
            const totalPrice = dailyTotal * duration;

            const supabase = createClient();
            const { error } = await supabase.from('bookings').insert({
                service_id: selectedServiceId,
                service_name: selectedService?.name,
                start_date: date.from.toISOString(),
                end_date: date.to ? date.to.toISOString() : date.from.toISOString(),
                customer_name: formData.name,
                customer_email: formData.email,
                customer_phone: formData.phone,
                passengers: Number(formData.passengers),
                special_requests: formData.specialRequests,
                total_price: totalPrice,
                status: 'pending'
            });

            if (error) {
                console.error('Error submitting booking:', error);
                alert('There was an issue submitting your booking. Please try again.');
                return;
            }

            setIsSubmitted(true);
        } catch (err) {
            console.error('Unexpected error:', err);
            alert('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 pt-40 pb-20 px-4">
                <div className="max-w-2xl mx-auto w-full bg-white p-8 md:p-12 rounded-xl shadow-xl text-center border-t-8 border-executive-gold animate-scale-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h1 className="heading-primary text-3xl md:text-5xl text-executive-navy mb-6">Booking Request Received</h1>
                    <div className="space-y-4 text-gray-600 text-lg mb-10 text-center max-w-lg mx-auto">
                        <p>
                            Thank you, <span className="font-bold text-executive-navy">{formData.name}</span>. We have received your request for the <strong className="text-executive-gold font-bold">{selectedService?.name}</strong>.
                        </p>
                        <p>
                            Our concierge team will review your details and contact you shortly at <span className="font-medium text-executive-navy">{formData.phone}</span> or <span className="font-medium text-executive-navy">{formData.email}</span> to confirm availability and finalize arrangements.
                        </p>
                    </div>
                    <Button
                        onClick={() => setIsSubmitted(false)}
                        className="min-w-[200px]"
                        size="lg"
                    >
                        Make Another Booking
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-fade-in-up">
                    <p className="text-executive-gold font-medium uppercase tracking-widest mb-2">Reserve Your Experience</p>
                    <h1 className="heading-primary text-3xl md:text-5xl text-executive-navy">Book Your Executive Tour</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left Column: Form Steps */}
                    <div className="lg:col-span-2 space-y-8 animate-fade-in-up animation-delay-100">

                        {/* Step 1: Service Selection */}
                        <section>
                            <h2 className="heading-secondary text-2xl text-executive-navy mb-4 flex items-center">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-executive-navy text-executive-cream text-sm font-bold mr-3">1</span>
                                Select Your Service
                            </h2>
                            <ServiceSelector
                                selectedServiceId={selectedServiceId}
                                onSelect={setSelectedServiceId}
                            />
                        </section>

                        {/* Step 2: Date Selection */}
                        <section>
                            <h2 className="heading-secondary text-2xl text-executive-navy mb-4 flex items-center">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-executive-navy text-executive-cream text-sm font-bold mr-3">2</span>
                                Select Dates
                            </h2>
                            <div className="flex justify-start">
                                <BookingCalendar
                                    mode="range"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={(date) => date < new Date()}
                                />
                            </div>
                        </section>

                        {/* Step 3: Passenger Details */}
                        <section>
                            <h2 className="heading-secondary text-2xl text-executive-navy mb-4 flex items-center">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-executive-navy text-executive-cream text-sm font-bold mr-3">3</span>
                                Your Details
                            </h2>
                            <PassengerForm
                                formData={formData}
                                onChange={handleInputChange}
                            />
                        </section>
                    </div>

                    {/* Right Column: Summary & Submit */}
                    <div className="lg:col-span-1 animate-fade-in-up animation-delay-200 sticky top-24 h-fit">
                        <BookingSummary
                            selectedService={selectedService}
                            date={date}
                            passengers={Number(formData.passengers)}
                        />

                        <Button
                            onClick={handleSubmit}
                            className="w-full mt-6 text-lg py-6 shadow-xl"
                            size="lg"
                            disabled={!date?.from || !selectedServiceId || !formData.name || !formData.email || !formData.phone}
                            loading={isSubmitting}
                        >
                            Request Booking
                        </Button>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Secure SSL Encrypted Transaction. No payment required at this stage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
