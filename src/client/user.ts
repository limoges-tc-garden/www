import type { User } from "@supabase/supabase-js";
import { createStore } from "solid-js/store";
import { supabase } from "./supabase";

export const [authStore, setAuthStore] = createStore<{
  loading: true
  user: null
} | {
  loading: false
  // Restera `null` si l'utilisateur n'est pas connecté.
  user: User | null
}>({
  loading: true,
  user: null
});

export const authenticate = async (email: string, password: string): Promise<boolean> => {
  setAuthStore({ loading: true, user: null });

  try {
    const response = await supabase.auth.signInWithPassword({ email, password });
    if (response.error) throw response.error;

    setAuthStore({ loading: false, user: response.data.user });
    return true;
  }
  catch (error) {
    console.error(error);
    setAuthStore({ loading: false, user: null });
    return false;
  }
}

// Lors du chargement de la page, on vérifie si l'utilisateur est déjà connecté.
setTimeout(async () => {
  try {
    const response = await supabase.auth.getUser();
    if (response.error) throw response.error;

    setAuthStore({ loading: false, user: response.data.user });
  }
  catch (error) {
    console.error(error);
    setAuthStore({ loading: false, user: null });
  }
}, 0);