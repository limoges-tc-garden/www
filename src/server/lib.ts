import { cache } from "@solidjs/router";

export const getURLFromFile = async (file?: { id: string, extension: string } | null): Promise<string | null> => {
  "use server";
  if (!file) return null;

  const { supabase } = await import("./supabase");
  return supabase.storage.from("files").getPublicUrl(file.id + "." + file.extension).data.publicUrl;
}

export const getArticles = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("articles").select("*, banner_file_id(*)");
  const articles = data ?? [];

  const output = await Promise.all(articles.map(async (article) => ({
    ...article,
    banner_file_url: ("banner_file_id" in article && article.banner_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(article.banner_file_id)
      : null
  })));
  
  output.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  return output;
}, "articles");

export const getLatestArticle = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("articles").select("*, banner_file_id(*)").order("created_at", { ascending: false }).limit(1).single();
  if (!data) return null;
  
  const article = {
    ...data,
    banner_file_url: ("banner_file_id" in data && data.banner_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(data.banner_file_id)
      : null
  };

  return article;
}, "latestArticle");

export const getTournaments = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("tournaments").select("*, banner_file_id(*)");
  const tournaments = data ?? [];

  const output = await Promise.all(tournaments.map(async (article) => ({
    ...article,
    banner_file_url: ("banner_file_id" in article && article.banner_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(article.banner_file_id)
      : null
  })));
  
  output.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  return output;
}, "tournaments");

export const getLatestTournament = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("tournaments").select("*, banner_file_id(*)").order("created_at", { ascending: false }).limit(1).single();
  if (!data) return null;
  
  const tournament = {
    ...data,
    banner_file_url: ("banner_file_id" in data && data.banner_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(data.banner_file_id)
      : null
  };

  return tournament;
}, "latestTournament");