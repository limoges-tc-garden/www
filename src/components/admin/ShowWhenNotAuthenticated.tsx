import { Navigate } from "@solidjs/router";
import { Show, type FlowComponent } from "solid-js";
import { authStore } from "~/client/user";

/**
 * Redirection automatique si l'utilisateur est déjà connecté.
 */
const ShowWhenNotAuthenticated: FlowComponent = (props) => {
  return (
    <Show when={!authStore.loading} fallback={<p>Chargement des données utilisateur...</p>}>
      <Show when={!authStore.user} fallback={<Navigate href="/admin" />}>
        {props.children}
      </Show>
    </Show>
  )
};

export default ShowWhenNotAuthenticated;
