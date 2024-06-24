import { createContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../libs/supabase/cliens";

interface AuthContextProps {
  session?: Session | null;
}

export const AuthContext = createContext<AuthContextProps>({
  session: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    console.log(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITeE_SUPABASE_ANON_KEY
    );
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};
