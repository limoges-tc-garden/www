import { Show, createMemo, type Component } from "solid-js";
import { createAsync, type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { getTournament } from "~/server/lib";
import edjsHTML from "editorjs-html";

export const route = {
  load ({ params }) {
    void getTournament(parseInt(params.id));
  }
} satisfies RouteDefinition

const Page: Component<RouteSectionProps> = (props) => {
  const tournament = createAsync(() => getTournament(parseInt(props.params.id)));
  const tournamentHTML = createMemo(() => {
    const content = tournament()?.content;
    if (!content) return "";

    const parser = edjsHTML();
    return parser.parse(content).join("");
  });

  return (
    <Show when={tournament()}>
      {(tournament) => (
        <main class="w-full py-4 px-6 space-y-2 max-w-[1000px] mx-auto">
          <h2 class="font-bold text-3xl pt-6 pb-8 text-center">
            {tournament().title}
          </h2>

          <div class="flex flex-col gap-4">
            <Show when={tournament().banner_file_url}>
              <div class="mx-auto pb-6">
                <img class="max-h-[400px] rounded-lg" src={tournament().banner_file_url!} />
              </div>
            </Show>

            <main innerHTML={tournamentHTML()} />

            <div class="flex flex-col gap-2">
              <p class="text-xs">
                Dernière mise à jour le {new Date(tournament().updated_at).toLocaleString("fr-FR")}
              </p>
            </div>
          </div>
        </main>
      )}
    </Show>
  );
};

export default Page;
