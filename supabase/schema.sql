-- MacroMap schema
create table if not exists menu_items (
  id           text primary key,
  restaurant   text not null,
  item         text not null,
  protein_g    integer not null,
  calories     integer not null,
  price_cad    numeric(6,2),
  price_usd    numeric(6,2),
  country      text not null check (country in ('CA','US','both')),
  category     text not null
);

-- Enable RLS with public read access
alter table menu_items enable row level security;

create policy "Public read access"
  on menu_items for select
  using (true);
