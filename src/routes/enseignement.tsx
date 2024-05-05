import { For, Show, type Component } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getTeachers } from "~/server/lib";
import BrowserTitle from "~/components/BrowserTitle";

export const route = {
  load () {
    void getTeachers();
  }
} satisfies RouteDefinition

const Page: Component = () => {
  const teachers = createAsync(() => getTeachers());

  return (
    <>
      <BrowserTitle title="Enseignement" />
      <main class="w-full px-6 space-y-2 max-w-[1000px] mx-auto">
        <h1 class="font-bold text-3xl pb-8 text-center">
          L'Équipe Pédagogique du LTCG
        </h1>

        <div class="flex flex-wrap items-center justify-center gap-6">
          <For each={teachers()} fallback={
            <p>Aucun partenaires, pour le moment.</p>
          }>
            {(teacher) => (
              <div class="flex flex-col gap-2 items-center">
                <div class="max-h-[200px] max-w-[200px]">
                  <Show when={teacher.avatar_url} fallback={
                    <span class="opacity-50">Pas de photo disponible</span>
                  }>
                    <img class="w-full object-contain rounded-lg" src={teacher.avatar_url!} />
                  </Show>
                </div>
                <p>{teacher.first_name} <strong>{teacher.last_name.toUpperCase()}</strong></p>
              </div>
            )}
          </For>
        </div>
      </main>
    </>
  );
};

export default Page;