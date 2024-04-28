import { createContext } from "react";
import { Session } from "@supabase/supabase-js";

export const AuthSession = createContext<Session | null>(null);
