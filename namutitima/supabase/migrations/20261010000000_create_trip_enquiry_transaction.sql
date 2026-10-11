begin;

create or replace function public.create_trip_enquiry(
  p_enquiry jsonb,
  p_items jsonb
)
returns jsonb
language plpgsql
set search_path = ''
as $$
declare
  enquiry_id public.enquiries.id%type;
  enquiry_reference public.enquiries.reference%type;
  item jsonb;
begin
  if jsonb_typeof(p_enquiry) is distinct from 'object' then
    raise exception 'Invalid trip enquiry payload';
  end if;

  if jsonb_typeof(p_items) is distinct from 'array' then
    raise exception 'Invalid trip enquiry items';
  end if;

  if jsonb_array_length(p_items) < 1 or jsonb_array_length(p_items) > 30 then
    raise exception 'Invalid trip enquiry payload';
  end if;

  insert into public.enquiries (
    reference,
    enquiry_type,
    activity_slug,
    activity_name,
    package_slug,
    package_name,
    travel_date,
    return_date,
    adults,
    children,
    total_people,
    price_per_person,
    total,
    currency,
    first_name,
    last_name,
    email,
    phone,
    country,
    message,
    status
  )
  values (
    p_enquiry ->> 'reference',
    p_enquiry ->> 'enquiry_type',
    p_enquiry ->> 'activity_slug',
    p_enquiry ->> 'activity_name',
    p_enquiry ->> 'package_slug',
    p_enquiry ->> 'package_name',
    (p_enquiry ->> 'travel_date')::date,
    nullif(p_enquiry ->> 'return_date', '')::date,
    (p_enquiry ->> 'adults')::integer,
    (p_enquiry ->> 'children')::integer,
    (p_enquiry ->> 'total_people')::integer,
    nullif(p_enquiry ->> 'price_per_person', '')::numeric,
    (p_enquiry ->> 'total')::numeric,
    p_enquiry ->> 'currency',
    p_enquiry ->> 'first_name',
    p_enquiry ->> 'last_name',
    p_enquiry ->> 'email',
    p_enquiry ->> 'phone',
    p_enquiry ->> 'country',
    p_enquiry ->> 'message',
    p_enquiry ->> 'status'
  )
  returning id, reference into enquiry_id, enquiry_reference;

  for item in select value from jsonb_array_elements(p_items)
  loop
    insert into public.enquiry_items (
      enquiry_id,
      item_type,
      item_slug,
      item_name,
      travel_date,
      quantity,
      notes
    )
    values (
      enquiry_id,
      item ->> 'item_type',
      item ->> 'item_slug',
      item ->> 'item_name',
      (item ->> 'travel_date')::date,
      (item ->> 'quantity')::integer,
      item ->> 'notes'
    );
  end loop;

  return jsonb_build_object(
    'id', enquiry_id,
    'reference', enquiry_reference
  );
end;
$$;

revoke all on function public.create_trip_enquiry(jsonb, jsonb)
  from public, anon, authenticated;
grant execute on function public.create_trip_enquiry(jsonb, jsonb)
  to service_role;

commit;
