import { For, Show, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getPartners } from "~/server/lib";
import BrowserTitle from "~/components/BrowserTitle";

export const route = {
  load () {
    void getPartners();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const partners = createAsync(() => getPartners());

  return (
    <>
      <BrowserTitle title="Partenaires" />
      <main class="w-full px-6 space-y-2 max-w-[1000px] mx-auto">
        <h1 class="font-bold text-3xl pb-8 text-center">
          Partenaires
        </h1>

        <div class="flex flex-wrap items-center justify-center gap-2">
          <For each={partners()} fallback={
            <p>Aucun partenaires, pour le moment.</p>
          }>
            {(partner) => (
              <a href={partner.url || "javascript:void(0)"} target={partner.url ? "_blank" : void 0}>
                <div class="max-h-[200px] max-w-[200px]">
                  <Show when={partner.logo_url} fallback={
                    <h3 class="font-medium text-lg">{partner.name}</h3>
                  }>
                    <img class="w-full object-contain" src={partner.logo_url!} />
                  </Show>
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