import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

// Créer une erreur si jamais on oublie de mettre les variables d'environnement.
if (!SUPABASE_URL || !SUPABASE_SERVICE_ANON_KEY) {
  throw new Error("Missing Supabase URL or Anonymous Role Key");
}

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_SERVICE_ANON_KEY
);
