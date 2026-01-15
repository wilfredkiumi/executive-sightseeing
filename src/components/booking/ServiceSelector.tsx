import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface ServiceOption {
    id: string;
    name: string;
    duration: string;
    price: number;
    description: string;
}

interface ServiceSelectorProps {
    selectedServiceId: string | undefined;
    onSelect: (serviceId: string) => void;
    className?: string;
}

const services: ServiceOption[] = [
    {
        id: 'classic-london',
        name: 'Classic London Executive Tour',
        duration: '4 Hours',
        price: 450,
        description: 'Perfect overview of London\'s iconic landmarks in luxury.',
    },
    {
        id: 'full-day-royal',
        name: 'Full Day Royal London',
        duration: '8 Hours',
        price: 850,
        description: 'Comprehensive tour including palace visits and royal parks.',
    },
    {
        id: 'evening-city',
        name: 'Evening City Lights',
        duration: '3 Hours',
        price: 350,
        description: 'Experience the magic of London illuminated at night.',
    },
    {
        id: 'windsor-hampton',
        name: 'Windsor & Hampton Court',
        duration: '8 Hours',
        price: 950,
        description: 'Day trip to historic royal residences outside the city.',
    },
];

export function ServiceSelector({ selectedServiceId, onSelect, className }: ServiceSelectorProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
            {services.map((service) => (
                <div
                    key={service.id}
                    onClick={() => onSelect(service.id)}
                    className={cn(
                        "relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md",
                        selectedServiceId === service.id
                            ? "border-executive-gold bg-executive-gold/5 shadow-md"
                            : "border-gray-200 bg-white hover:border-executive-gold/50"
                    )}
                >
                    {selectedServiceId === service.id && (
                        <div className="absolute top-3 right-3 text-executive-gold">
                            <Check className="w-5 h-5" />
                        </div>
                    )}
                    <h3 className="font-display font-semibold text-lg text-executive-navy mb-1 pr-6">{service.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-500">{service.duration}</span>
                        <span className="font-bold text-executive-gold">£{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
            ))}
        </div>
    );
}

export { services };
