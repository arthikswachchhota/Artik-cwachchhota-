// ==========================================
// আর্থিক স্বচ্ছতা — Common Supabase Config
// ==========================================

const SUPABASE_URL =
  "https://dlfobjpzxdnnszpqowqd.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
