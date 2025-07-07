import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cshjvlammhyrnefsonzl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzaGp2bGFtbWh5cm5lZnNvbnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NTUzOTMsImV4cCI6MjA2NzQzMTM5M30.HphAwtY6MXaoB5j2EOw3nT-8TB8A0eImL8s8mCnLOHg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
