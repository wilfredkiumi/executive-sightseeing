import React from 'react';
import { cn } from '@/lib/utils';
import { User, Mail, Phone, Users, FileText } from 'lucide-react';

interface PassengerFormProps {
    formData: {
        name: string;
        email: string;
        phone: string;
        passengers: number;
        specialRequests: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    className?: string;
}

export function PassengerForm({ formData, onChange, className }: PassengerFormProps) {
    return (
        <div className={cn("space-y-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm", className)}>
            <h3 className="font-display text-xl text-executive-navy mb-4 border-b border-gray-100 pb-2">Guest Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-executive-gold" />
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-executive-gold" />
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-executive-gold" />
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent outline-none transition-all"
                        placeholder="+44 7700 900000"
                    />
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                    <label htmlFor="passengers" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Users className="w-4 h-4 text-executive-gold" />
                        Number of Passengers
                    </label>
                    <select
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={onChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent outline-none transition-all"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                                {num} {num === 1 ? 'Passenger' : 'Passengers'}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
                <label htmlFor="specialRequests" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-executive-gold" />
                    Special Requests / Notes
                </label>
                <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={onChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent outline-none transition-all"
                    placeholder="Any dietary requirements, specific pickup locations, or accessibility needs..."
                />
            </div>
        </div>
    );
}
