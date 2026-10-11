begin;

create table if not exists public.newsletter_subscribers (
  email text primary key,
  consented_at timestamptz not null,
  source text not null default 'homepage',
  created_at timestamptz not null default now(),
  constraint newsletter_subscribers_email_length
    check (char_length(email) between 3 and 254)
);

alter table public.newsletter_subscribers enable row level security;

revoke all on table public.newsletter_subscribers from anon, authenticated;
grant all on table public.newsletter_subscribers to service_role;

commit;
