import { Show, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getLatestArticle, getLatestTournament } from "~/server/lib";

export const route = {
  load () {
    void getLatestArticle();
    void getLatestTournament();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const latestArticle = createAsync(() => getLatestArticle());
  const latestTournament = createAsync(() => getLatestTournament());

  return (
    <main class="w-full py-4 px-6 space-y-2 max-w-[1000px] mx-auto">
      <div class="flex gap-2 justify-between my-6">
        <section class="flex flex-col w-full gap-4">
          <h2 class="font-bold text-xl text-center">La dernière actualité</h2>

          <div>
            <Show when={latestArticle()} fallback={<p>Il n'y a toujours pas eu d'actualité.</p>}>
              {(article) => (
                <a href={`/actus/${article().id}`} role="article" class="flex flex-col w-full">
                  <div class="w-full h-[200px] rounded-lg overflow-hidden">
                    <Show when={article().banner_file_url} fallback={
                      <div class="h-full w-full bg-dark/10" />
                    }>
                      <img class="h-full w-full object-contain bg-dark" src={article().banner_file_url!} />
                    </Show>
                  </div>
              
                  <div class="p-4 flex flex-col gap-2">
                    <h3 class="font-bold text-lg">{article().title}</h3>
                    <p class="text-sm">
                      Dernière mise à jour le {new Date(article().updated_at).toLocaleString("fr-FR")}
                    </p>
                  </div>
                </a>
              )}
            </Show>
          </div>
        </section>

        <section class="flex flex-col w-full gap-4">
          <h2 class="font-bold text-xl text-center">Le dernier résultat</h2>

          <div>
            <Show when={latestTournament()} fallback={<p>Il n'y a toujours pas eu de tournois.</p>}>
              {(tournament) => (
                <a href={`/tournois/${tournament().id}`} role="article" class="flex flex-col w-full">
                  <div class="w-full h-[200px] rounded-lg overflow-hidden">
                    <Show when={tournament().banner_file_url} fallback={
                      <div class="h-full w-full bg-dark/10" />
                    }>
                      <img class="h-full w-full object-contain bg-dark" src={tournament().banner_file_url!} />
                    </Show>
                  </div>
              
                  <div class="p-4 flex flex-col gap-2">
                    <h3 class="font-bold text-lg">{tournament().title}</h3>
                    <p class="text-sm">
                      Dernière mise à jour le {new Date(tournament().updated_at).toLocaleString("fr-FR")}
                    </p>
                  </div>
                </a>
              )}
            </Show>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;