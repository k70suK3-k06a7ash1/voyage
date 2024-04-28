import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  // @ts-ignore
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_KEY
);
