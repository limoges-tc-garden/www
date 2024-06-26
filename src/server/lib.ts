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

export const getArticle = cache(async (id: number) => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("articles").select("*, banner_file_id(*)").eq("id", id).single();
  if (!data) return null;
  
  const article = {
    ...data,
    banner_file_url: ("banner_file_id" in data && data.banner_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(data.banner_file_id)
      : null
  };

  return article;
}, "article");

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
  const { data } = await supabase.from("tournaments").select("id, created_at, updated_at, title, banner_file_id(*)").order("created_at", { ascending: false }).limit(1).single();
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

export const getTournament = cache(async (id: number) => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("tournaments").select("*, banner_file_id(*)").eq("id", id).single();
  if (!data) return null;
  
  const tournament = {
    ...data,
    banner_file_url: ("banner_file_id" in data && data.banner_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(data.banner_file_id)
      : null
  };

  return tournament;
}, "tournament");

interface Leader {
  first_name: string
  last_name: string
  direction: boolean
  headline: string
}

export const getLeaders = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("leaders").select(`
    first_name,
    last_name,
    direction,
    headline
  `.trim());

  const direction: Leader[] = [];
  const others: Leader[] = [];

  for (const leader of (data ?? []) as unknown as Leader[]) {
    if (leader.direction) direction.push(leader);
    else others.push(leader);
  }

  return { direction, others };
}, "leaders");

export const getPartners = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("partners").select("id, name, url, logo_file_id(*)");
  const partners = data ?? [];

  const output = await Promise.all(partners.map(async (partner) => ({
    ...partner,
    logo_url: ("logo_file_id" in partner && partner.logo_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(partner.logo_file_id)
      : null
  })));

  return output;
}, "partners");

export const getTeachers = cache(async () => {
  "use server";
  const { supabase } = await import("./supabase");
  const { data } = await supabase.from("teachers").select("id, first_name, last_name, avatar_file_id(*)");
  const teachers = data ?? [];

  const output = await Promise.all(teachers.map(async (teacher) => ({
    ...teacher,
    avatar_url: ("avatar_file_id" in teacher && teacher.avatar_file_id !== null)
      // @ts-expect-error
      ? await getURLFromFile(teacher.avatar_file_id)
      : null
  })));

  return output;
}, "teachers");
