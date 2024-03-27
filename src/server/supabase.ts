import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Créer une erreur si jamais on oublie de mettre les variables d'environnement.
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase URL or Service Role Key");
}

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);
