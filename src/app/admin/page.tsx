'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { format } from 'date-fns';
import { Bell, Calendar, Mail, Phone, User, DollarSign, Clock } from 'lucide-react';

interface Booking {
    id: string;
    created_at: string;
    service_id: string;
    service_name: string;
    start_date: string;
    end_date: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    passengers: number;
    special_requests: string | null;
    total_price: number;
    status: string;
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');

    useEffect(() => {
        fetchBookings();
        subscribeToBookings();
    }, []);

    const fetchBookings = async () => {
        const supabase = createClient();
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching bookings:', error);
        } else {
            setBookings(data || []);
        }
        setLoading(false);
    };

    const subscribeToBookings = () => {
        const supabase = createClient();

        const channel = supabase
            .channel('bookings-changes')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'bookings'
                },
                (payload) => {
                    console.log('New booking received!', payload);
                    const newBooking = payload.new as Booking;
                    setBookings((prev) => [newBooking, ...prev]);

                    // Show notification
                    setNotification(`New booking from ${newBooking.customer_name}!`);

                    // Play notification sound (optional)
                    if (typeof Audio !== 'undefined') {
                        const audio = new Audio('/notification.mp3');
                        audio.play().catch(() => console.log('Audio play failed'));
                    }

                    // Clear notification after 5 seconds
                    setTimeout(() => setNotification(null), 5000);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    };

    const updateBookingStatus = async (id: string, newStatus: string) => {
        const supabase = createClient();
        const { error } = await supabase
            .from('bookings')
            .update({ status: newStatus })
            .eq('id', id);

        if (error) {
            console.error('Error updating booking:', error);
            alert('Failed to update booking status');
        } else {
            setBookings((prev) =>
                prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
            );
        }
    };

    const filteredBookings = bookings.filter((b) =>
        filter === 'all' ? true : b.status === filter
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'confirmed':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-executive-gold mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading bookings...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-24 right-8 z-50 animate-fade-in-up">
                    <div className="bg-executive-gold text-executive-navy px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
                        <Bell className="w-5 h-5" />
                        <span className="font-medium">{notification}</span>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="heading-primary text-3xl md:text-4xl text-executive-navy mb-2">
                            Booking Dashboard
                        </h1>
                        <p className="text-gray-600">Manage and track all tour bookings</p>
                    </div>
                    <button
                        onClick={() => {
                            setLoading(true);
                            fetchBookings();
                        }}
                        className="px-6 py-2 bg-executive-navy text-white rounded-lg hover:bg-opacity-90 transition-all font-medium self-start flex items-center gap-2"
                    >
                        <Clock className="w-4 h-4" />
                        Refresh Data
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-executive-gold">
                        <div className="text-sm text-gray-600 mb-1">Total Bookings</div>
                        <div className="text-3xl font-bold text-executive-navy">{bookings.length}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                        <div className="text-sm text-gray-600 mb-1">Pending</div>
                        <div className="text-3xl font-bold text-yellow-600">
                            {bookings.filter((b) => b.status === 'pending').length}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                        <div className="text-sm text-gray-600 mb-1">Confirmed</div>
                        <div className="text-3xl font-bold text-green-600">
                            {bookings.filter((b) => b.status === 'confirmed').length}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                        <div className="text-sm text-gray-600 mb-1">Cancelled</div>
                        <div className="text-3xl font-bold text-red-600">
                            {bookings.filter((b) => b.status === 'cancelled').length}
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-6 flex gap-3">
                    {(['all', 'pending', 'confirmed', 'cancelled'] as const).map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === status
                                ? 'bg-executive-gold text-executive-navy'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Bookings List */}
                <div className="space-y-4">
                    {filteredBookings.length === 0 ? (
                        <div className="bg-white p-12 rounded-xl shadow-md text-center">
                            <p className="text-gray-500">No bookings found</p>
                        </div>
                    ) : (
                        filteredBookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    {/* Left: Booking Info */}
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold text-executive-navy">
                                                {booking.service_name}
                                            </h3>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                                    booking.status
                                                )}`}
                                            >
                                                {booking.status.toUpperCase()}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <User className="w-4 h-4" />
                                                <span>{booking.customer_name}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Mail className="w-4 h-4" />
                                                <span>{booking.customer_email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Phone className="w-4 h-4" />
                                                <span>{booking.customer_phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                                                    {format(new Date(booking.start_date), 'MMM d')} -{' '}
                                                    {format(new Date(booking.end_date), 'MMM d, yyyy')}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <User className="w-4 h-4" />
                                                <span>{booking.passengers} Passengers</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <DollarSign className="w-4 h-4" />
                                                <span className="font-semibold text-executive-gold">
                                                    £{booking.total_price}
                                                </span>
                                            </div>
                                        </div>

                                        {booking.special_requests && (
                                            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                                                <p className="text-sm text-gray-600">
                                                    <strong>Special Requests:</strong> {booking.special_requests}
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Clock className="w-3 h-3" />
                                            <span>
                                                Booked {format(new Date(booking.created_at), 'MMM d, yyyy HH:mm')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Actions */}
                                    <div className="flex lg:flex-col gap-2">
                                        {booking.status === 'pending' && (
                                            <>
                                                <button
                                                    onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                                                >
                                                    Confirm
                                                </button>
                                                <button
                                                    onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        )}
                                        {booking.status === 'confirmed' && (
                                            <button
                                                onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        {booking.status === 'cancelled' && (
                                            <button
                                                onClick={() => updateBookingStatus(booking.id, 'pending')}
                                                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
                                            >
                                                Reopen
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
