-- Create a table for public bookings
create table public.bookings (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  service_id text not null,
  service_name text not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone,
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  passengers integer not null default 1,
  special_requests text null,
  total_price numeric null,
  status text not null default 'pending', -- pending, confirmed, cancelled
  constraint bookings_pkey primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.bookings enable row level security;

-- Create policy to allow anyone (anon) to INSERT bookings
create policy "Enable insert for everyone" on public.bookings
  for insert
  with check (true);

-- Create policy to allow selection only for the user who created it (optional, if we had auth)
-- For now, maybe restricted or open for testing. Let's start with insert-only for public.