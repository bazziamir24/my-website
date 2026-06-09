create table if not exists public.blog_likes (
  id bigint generated always as identity primary key,
  post_slug text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.blog_comments (
  id bigint generated always as identity primary key,
  post_slug text not null,
  author_name text not null default 'Anonymous',
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.blog_likes enable row level security;
alter table public.blog_comments enable row level security;

drop policy if exists "Anyone can read blog likes" on public.blog_likes;
drop policy if exists "Anyone can add blog likes" on public.blog_likes;
drop policy if exists "Anyone can read blog comments" on public.blog_comments;
drop policy if exists "Anyone can add blog comments" on public.blog_comments;

create policy "Anyone can read blog likes"
  on public.blog_likes
  for select
  using (true);

create policy "Anyone can add blog likes"
  on public.blog_likes
  for insert
  with check (char_length(post_slug) between 1 and 120);

create policy "Anyone can read blog comments"
  on public.blog_comments
  for select
  using (true);

create policy "Anyone can add blog comments"
  on public.blog_comments
  for insert
  with check (
    char_length(post_slug) between 1 and 120
    and char_length(author_name) between 1 and 80
    and char_length(body) between 1 and 2000
  );

create index if not exists blog_likes_post_slug_idx
  on public.blog_likes (post_slug);

create index if not exists blog_comments_post_slug_created_at_idx
  on public.blog_comments (post_slug, created_at desc);
