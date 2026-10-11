begin;

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'enquiries'
      and column_name = 'special_slug'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'enquiries'
      and column_name = 'package_slug'
  ) then
    alter table public.enquiries rename column special_slug to package_slug;
  end if;

  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'enquiries'
      and column_name = 'special_name'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'enquiries'
      and column_name = 'package_name'
  ) then
    alter table public.enquiries rename column special_name to package_name;
  end if;

end;
$$;

create temporary table package_check_constraints (
  table_name text not null,
  constraint_name text not null,
  definition text not null
) on commit drop;

insert into package_check_constraints (table_name, constraint_name, definition)
select 'enquiries', conname, pg_get_constraintdef(oid)
from pg_constraint
where conrelid = 'public.enquiries'::regclass
  and contype = 'c'
  and pg_get_constraintdef(oid) ilike '%enquiry_type%';

insert into package_check_constraints (table_name, constraint_name, definition)
select 'enquiry_items', conname, pg_get_constraintdef(oid)
from pg_constraint
where conrelid = 'public.enquiry_items'::regclass
  and contype = 'c'
  and pg_get_constraintdef(oid) ilike '%item_type%';

do $$
declare
  constraint_row record;
begin
  for constraint_row in
    select table_name, constraint_name
    from package_check_constraints
  loop
    execute format(
      'alter table public.%I drop constraint %I',
      constraint_row.table_name,
      constraint_row.constraint_name
    );
  end loop;
end;
$$;

update public.enquiries
set enquiry_type = 'package'
where enquiry_type = 'special';

update public.enquiry_items
set item_type = 'package'
where item_type = 'special';

do $$
declare
  constraint_row record;
  updated_definition text;
begin
  for constraint_row in
    select table_name, constraint_name, definition
    from package_check_constraints
  loop
    updated_definition := replace(
      constraint_row.definition,
      '''special''',
      '''package'''
    );
    execute format(
      'alter table public.%I add constraint %I %s',
      constraint_row.table_name,
      constraint_row.constraint_name,
      updated_definition
    );
  end loop;
end;
$$;

commit;
