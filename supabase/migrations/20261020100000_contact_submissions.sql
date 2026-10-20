-- Applied: contact_submissions table (insert-only for visitors, admin read/delete)
CREATE TABLE IF NOT EXISTS public.contact_submissions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, email text NOT NULL, subject text NOT NULL, message text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
