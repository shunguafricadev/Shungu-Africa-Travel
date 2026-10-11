begin;

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  activity_slug text not null,
  author text not null check (char_length(btrim(author)) between 1 and 100),
  rating smallint not null check (rating between 1 and 5),
  content text not null check (char_length(btrim(content)) between 1 and 2000),
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create index if not exists reviews_approved_activity_created_at_idx
  on public.reviews (activity_slug, created_at desc)
  where status = 'approved';

alter table public.reviews enable row level security;

revoke all on table public.reviews from anon, authenticated;
grant select, insert on table public.reviews to service_role;

commit;
