import { Show, createMemo, type Component } from "solid-js";
import { createAsync, type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { getArticle } from "~/server/lib";
import edjsHTML from "editorjs-html"

export const route = {
  load ({ params }) {
    void getArticle(parseInt(params.id));
  }
} satisfies RouteDefinition

const Page: Component<RouteSectionProps> = (props) => {
  const article = createAsync(() => getArticle(parseInt(props.params.id)));
  const articleHTML = createMemo(() => {
    const content = article()?.content;
    if (!content) return "";

    const parser = edjsHTML();
    return parser.parse(content).join("");
  });

  return (
    <Show when={article()}>
      {(article) => (
        <div class="w-full py-4 px-6 space-y-2 max-w-[1000px] mx-auto">
          <h1 class="font-bold text-3xl py-6 text-center">
            {article().title}
          </h1>

          <div class="flex flex-col gap-4">
            <Show when={article().banner_file_url}>
              <div class="mx-auto pb-6">
                <img class="max-h-[400px] rounded-lg" src={article().banner_file_url!} />
              </div>
            </Show>

            <main innerHTML={articleHTML()} />

            <div class="flex flex-col gap-2">
              <p class="text-xs">
                Dernière mise à jour le {new Date(article().updated_at).toLocaleString("fr-FR")}
              </p>
            </div>
          </div>
        </div>
      )}
    </Show>
  );
};

export default Page;
