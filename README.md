# `ltcg.club` - LIMOGES TC GARDEN

> Refonte du site web du Limoges TC Garden, club de tennis à Limoges.
> Réalisé en collaboration un professeur de l'[IUT Informatique de Limoges](https://iut.unilim.fr).

## Utilisateurs

Uniquement les administrateurs peuvent s'authentifier, les lecteurs n'ont pas la possibilité de s'inscrire.

Il y a un *super administrateur* `root` qui peut uniquement gérer les administrateurs.
Son mot de passe est prédéfini dans le `.env` du projet haché au préalable pour éviter de l'écrire en clair. Le super administrateur n'a donc pas d'entré dans la base de données, c'est un utilisateur à part. Son mot de passe ne peut pas être changé depuis l'interface web, il faut le faire manuellement dans le `.env`.

Les administrateurs peuvent gérer les pages, les catégories, les informations, les sponsors affichés, etc.

## Technologies

- [SolidStart](https://start.solidjs.com/), framework full-stack basé sur SolidJS et Vinxi
- [`pnpm`](https://pnpm.io/) pour le gestionnaire de paquets
- [UnoCSS](https://unocss.dev/) pour gérer le style
- [Kobalte](https://kobalte.dev/) pour les composants utilitaires et accessibles
- [Vercel](https://vercel.com/) pour le déploiement du projet SolidStart (à voir en fonction du serveur de production utilisé)
  - Cependant le projet peut fonctionner sur tout autre service (et même sur un VPS avec seulement Node.js), grâce à SolidStart
- [MariaDB](https://mariadb.org/fr/) pour la base de données (déploiement sur mon Raspberry PI pour l'instant, à voir en fonction du serveur de production utilisé)
- [Prisma](https://www.prisma.io/) pour l'ORM (Object-Relational Mapping) de la base de données MariaDB

## Questions encore en suspend

- Newsletter -> Comment envoyer des mails ? Quel service utiliser ?
  - Depuis Node.js, on a la librairie Nodemailer qui permet d'envoyer des mails via SMTP
  - Concernant Vercel, voir <https://vercel.com/guides/sending-emails-from-an-application-on-vercel>, qui regroupe des services externes pour envoyer des mails

## Développement

```bash
git clone https://github.com/Vexcited/ltcg.club
cd ltcg.club

# Coper le fichier `.env.example` dans `.env`
# N'OUBLIEZ PAS DE MODIFIER SON CONTENU EN FONCTION DE VOTRE ENVIRONNEMENT !
cp .env.example .env

# Installer les dépendances
pnpm install

# Lancer le serveur de développement (SolidStart)
pnpm dev
```

Vous pourrez ensuite accéder localement à l'interface web à l'adresse <http://localhost:3000>.
