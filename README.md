# `ltcg.club` - LIMOGES TC GARDEN

> Refonte du site web du Limoges TC Garden, club de tennis à Limoges.
> Réalisé en collaboration un professeur de l'[IUT Informatique de Limoges](https://iut.unilim.fr).

## Technologies

- [SolidStart](https://start.solidjs.com/), framework full-stack
- [`pnpm`](https://pnpm.io/) pour le gestionnaire de paquets
- [UnoCSS](https://unocss.dev/) pour gérer le style
- [Kobalte](https://kobalte.dev/) pour les composants utilitaires et accessibles
- [Cloudflare Pages](https://pages.cloudflare.com/) pour le déploiement du projet
- [Supabase](https://supabase.com/) pour la lecture de la base de données et des fichiers

## Développement

### Démarrer

```bash
git clone https://github.com/limoges-tc-garden/website limoges-tc-garden-website
cd limoges-tc-garden-website

# Coper le fichier `.env.example` dans `.env`
# N'OUBLIEZ PAS DE MODIFIER SON CONTENU EN FONCTION DE VOTRE ENVIRONNEMENT !
cp .env.example .env

# Installer les dépendances
pnpm install

# Lancer le serveur de développement (SolidStart)
pnpm dev
```

Vous pourrez ensuite accéder localement à l'interface web à l'adresse <http://localhost:3000>.

### Mettre à jour [les types de la base PostgreSQL](./src/server/database.types.ts)

Il faut avoir le [CLI Supabase](https://github.com/supabase/cli) installé, [connecté](https://supabase.com/docs/reference/cli/supabase-login) et [lié au projet](https://supabase.com/docs/reference/cli/supabase-link) avant d'effectuer cette opération.

```bash
# Voir <https://supabase.com/docs/reference/cli/supabase-gen-types-typescript>.
supabase gen types typescript --project-id abcdefghijklmnopqrst > database.types.ts
```
