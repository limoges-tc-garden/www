import { defineConfig } from "@solidjs/start/config";
import icons from "unplugin-icons/vite";
import unocss from "unocss/vite";

export default defineConfig({
  ssr: true,
  
  server: {
    // On déploie le code sur Cloudflare Pages, donc on va utiliser
    // le preset `cloudflare-pages` pour la configuration du serveur.
    preset: "cloudflare-pages"
  },
  
  vite: {
    plugins: [
      icons({ compiler: "solid" }),
      unocss()
    ]
  }
});
