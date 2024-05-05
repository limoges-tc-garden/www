import { For, Show, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getTournaments } from "~/server/lib";
import BrowserTitle from "~/components/BrowserTitle";

export const route = {
  load () {
    void getTournaments();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const tournaments = createAsync(() => getTournaments());

  return (
    <>
      <BrowserTitle title="Résultats et tournois" />

      <main class="w-full px-6 space-y-2 max-w-[1000px] mx-auto">
        <h1 class="font-bold text-3xl pb-8 text-center">
          Résultats et tournois
        </h1>

        <div class="flex flex-wrap gap-4 justify-center">
          <For each={tournaments()} fallback={
            <p class="mx-auto">Aucun tournoi publié, revenez plus tard !</p>
          }>
            {(tournament) => (
              <a href={`/tournois/${tournament.id}`} role="article" class="border flex flex-col w-full rounded-md overflow-hidden max-w-[300px] hover:border-orange hover:shadow transition">
                <div class="w-full h-[200px]">
                  <Show when={tournament.banner_file_url} fallback={
                    <div class="h-full w-full bg-dark/10" />
                  }>
                    <img class="h-full w-full object-contain bg-dark" src={tournament.banner_file_url!} />
                  </Show>
                </div>
            
                <div class="p-4 flex flex-col gap-2">
                  <h3 class="font-bold text-lg">{tournament.title}</h3>
                  <p class="text-xs">
                    Dernière mise à jour le {new Date(tournament.updated_at).toLocaleString("fr-FR")}
                  </p>
                </div>
              </a>
            )}
          </For>
        </div>
      </main>
    </>
  );
};

export default Page;