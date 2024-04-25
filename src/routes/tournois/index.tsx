import { For, Show, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getTournaments } from "~/server/lib";

export const route = {
  load () {
    void getTournaments();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const tournaments = createAsync(() => getTournaments());

  return (
    <main class="w-full py-4 px-6 space-y-2 max-w-[1000px] mx-auto">
      <h2 class="font-bold text-3xl pt-6 pb-8 text-center">
        Résultats et tournois
      </h2>

      <div class="flex flex-wrap gap-4 justify-between">
        <For each={tournaments()}>
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
  );
};

export default Page;