import { For, Show, createMemo, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getArticles } from "~/server/lib";
import BrowserTitle from "~/components/BrowserTitle";

export const route = {
  load () {
    void getArticles();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const articles = createAsync(() => getArticles());

  return (
    <>
      <BrowserTitle title="Les actualités du club" />
      <main class="w-full px-6 space-y-2 max-w-[1000px] mx-auto">
        <h2 class="font-bold text-3xl pb-8 text-center">
          Les actualités du club
        </h2>

        <div class="flex flex-wrap gap-4 justify-center">
          <For each={articles()} fallback={
            <p class="mx-auto">Aucun article publié, revenez plus tard !</p>
          }>
            {(article) => (
              <a href={`/actus/${article.id}`} role="article" class="border flex flex-col w-full rounded-md overflow-hidden max-w-[300px] hover:border-orange hover:shadow transition">
                <div class="w-full h-[200px]">
                  <Show when={article.banner_file_url} fallback={
                    <div class="h-full w-full bg-dark/10" />
                  }>
                    <img class="h-full w-full object-contain bg-dark" src={article.banner_file_url!} />
                  </Show>
                </div>
            
                <div class="p-4 flex flex-col gap-2">
                  <h3 class="font-bold text-lg">{article.title}</h3>
                  <p class="text-xs">
                    Dernière mise à jour le {new Date(article.updated_at).toLocaleString("fr-FR")}
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