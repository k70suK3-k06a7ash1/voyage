import { createContext } from "react";
import { Session } from "@supabase/supabase-js";

export const AuthSessionContext = createContext<Session | null>(null);
