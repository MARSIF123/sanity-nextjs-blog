import { notFound } from "next/navigation";

import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";

import { client, sanityFetch } from "@/sanity/lib/client";

import { Post } from "@/components/Post";

export async function generateStaticParams() {
  const posts = await client.fetch(
    POSTS_QUERY,
    {},
    { perspective: "published" }
  );

  return posts.map((post) => ({
    category: "posts",
    slug: post?.slug?.current,
  }));
}

export default async function Page({ params }) {
  const post = await sanityFetch({
    query: POST_QUERY,
    params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const post = await sanityFetch({ query: POST_QUERY, params });

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      type: "website",
      title: post?.title,
      description: post?.excerpt,
      url: `/${post?.slug?.current}`,
    },
  };
}
