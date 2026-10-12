alter table public.enquiries
  add column if not exists itinerary_details jsonb;
