/*
  # Create Contact Inquiries Table

  ## Overview
  This migration creates a table to store contact form inquiries submitted through the NR Infra Steel website.

  ## Tables Created
  
  ### contact_inquiries
  - `id` (uuid, primary key) - Unique identifier for each inquiry
  - `full_name` (text) - Name of the person submitting the inquiry
  - `company_name` (text, nullable) - Optional company name
  - `email` (text) - Email address for follow-up
  - `phone` (text) - Contact phone number
  - `subject` (text) - Subject of the inquiry
  - `message` (text) - Detailed message from the customer
  - `created_at` (timestamptz) - Timestamp when inquiry was submitted
  - `status` (text) - Status of inquiry (new, contacted, resolved) with default 'new'

  ## Security
  - Enable Row Level Security (RLS) on contact_inquiries table
  - Add policy to allow anyone to insert inquiries (public form submission)
  - Add policy to allow authenticated users to view all inquiries (for admin access)

  ## Notes
  - The table is designed to capture all necessary information from potential customers
  - Status field helps track follow-up progress
  - Timestamps help prioritize recent inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at 
  ON contact_inquiries(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status 
  ON contact_inquiries(status);
