import { For, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getLeaders } from "~/server/lib";
import BrowserTitle from "~/components/BrowserTitle";

export const route = {
  load () {
    void getLeaders();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const leaders = createAsync(() => getLeaders());

  return (
    <>
      <BrowserTitle title="Organigramme du club" />
      <main class="w-full px-6 space-y-2 max-w-[1000px] mx-auto">
        <h1 class="font-bold text-3xl pb-8 text-center">
          Organigramme du club
        </h1>

        <section class="flex flex-col gap-2">
          <h2 class="text-xl font-medium">Comité directeur du LTCG</h2>

          <ul class="divide-y divide-orange border rounded-lg border-orange">
            <For each={leaders()?.direction}>
              {(leader) => (
                <li class="flex justify-between py-2 px-4">
                  <p class="font-medium">{leader.headline}</p>
                  <p>{leader.first_name} {leader.last_name.toUpperCase()}</p>
                </li>
              )}
            </For>
          </ul>
        </section>

        <section class="flex flex-col gap-2 pt-6">
          <h2 class="text-xl font-medium">Autres membres</h2>
          
          <ul class="divide-y border rounded-lg">
            <For each={leaders()?.others}>
              {(leader) => (
                <li class="flex justify-between py-2 px-4">
                  <p class="font-medium">{leader.headline}</p>
                  <p>{leader.first_name} {leader.last_name.toUpperCase()}</p>
                </li>
              )}
            </For>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Page;