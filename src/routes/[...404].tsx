import { type Component } from "solid-js";
import { Navigate } from "@solidjs/router";

/**
 * Si on arrive sur une page qui n'existe pas, on redirige
 * l'utilisateur vers la page d'accueil.
 */
const Page: Component = () => <Navigate href="/" />
export default Page;
