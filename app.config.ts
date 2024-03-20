import { defineConfig } from "@solidjs/start/config";
import unocss from "unocss/vite";

export default defineConfig({
  ssr: true,
  
  server: {
    // On déploie le code sur Vercel, donc on va utiliser
    // le preset `vercel` pour la configuration du serveur.
    preset: "vercel"
  },
  
  vite: {
    plugins: [unocss()]
  }
});
