// ==========================================
// আর্থিক স্বচ্ছতা — Common Supabase Config
// ==========================================

const SUPABASE_URL =
  "https://dlfobjpzxdnnszpqowqd.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_Rb2oZZ6XzXFZSpkNSRgqLQ_njWY-TtY"
 
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
