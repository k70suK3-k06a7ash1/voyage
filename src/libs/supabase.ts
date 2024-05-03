import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";
export const supabase = createClient<Database>(
  // @ts-ignore
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_KEY
);
