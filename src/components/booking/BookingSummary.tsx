import React from 'react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ServiceOption } from './ServiceSelector';

import { differenceInCalendarDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

interface BookingSummaryProps {
    selectedService: ServiceOption | undefined;
    date: DateRange | undefined;
    passengers: number;
    className?: string;
}

export function BookingSummary({ selectedService, date, passengers, className }: BookingSummaryProps) {
    const basePrice = selectedService ? selectedService.price : 0;

    // Calculate Duration
    let duration = 1;
    let fromDate: Date | undefined;
    let toDate: Date | undefined;

    if (date?.from) {
        fromDate = date.from;
        if (date.to) {
            toDate = date.to;
            duration = differenceInCalendarDays(date.to, date.from) + 1;
        }
    }

    // Simple logic: Base price is for up to 2 passengers. Extra passengers +£50 each.
    // Price multiplied by days
    const extraPassengerCost = passengers > 2 ? (passengers - 2) * 50 : 0;
    const dailyTotal = basePrice + extraPassengerCost;
    const totalCost = dailyTotal * duration;

    return (
        <div className={cn("bg-executive-navy text-executive-cream p-6 rounded-xl shadow-lg", className)}>
            <h3 className="font-display text-xl text-executive-gold mb-6 border-b border-executive-gold/20 pb-4">Booking Summary</h3>

            <div className="space-y-4 mb-6">
                <div>
                    <span className="block text-sm text-gray-400 mb-1">Selected Service</span>
                    <p className="font-medium text-lg">{selectedService ? selectedService.name : 'Select a service'}</p>
                </div>

                <div>
                    <span className="block text-sm text-gray-400 mb-1">Dates</span>
                    <p className="font-medium text-lg">
                        {fromDate ? (
                            <>
                                {format(fromDate, 'MMM d')}
                                {toDate ? ` - ${format(toDate, 'MMM d')}` : ''}
                                <span className="text-sm text-executive-gold ml-2">({duration} {duration === 1 ? 'Day' : 'Days'})</span>
                            </>
                        ) : 'Select dates'}
                    </p>
                </div>

                <div>
                    <span className="block text-sm text-gray-400 mb-1">Passengers</span>
                    <p className="font-medium text-lg">{passengers} {passengers === 1 ? 'Guest' : 'Guests'}</p>
                </div>
            </div>

            <div className="border-t border-executive-gold/20 py-4 space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Daily Rate</span>
                    <span>£{basePrice}</span>
                </div>
                {extraPassengerCost > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Extra Guests / Day</span>
                        <span>£{extraPassengerCost}</span>
                    </div>
                )}
                {duration > 1 && (
                    <div className="flex justify-between text-sm font-medium text-executive-gold">
                        <span>Duration</span>
                        <span>{duration} Days</span>
                    </div>
                )}
            </div>

            <div className="border-t border-executive-gold/20 pt-4 mt-2">
                <div className="flex justify-between items-baseline">
                    <span className="text-lg font-display text-executive-gold">Total Estimated</span>
                    <span className="text-2xl font-bold text-white">£{totalCost}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">*Final price may vary based on specific requirements.</p>
            </div>
        </div>
    );
}
