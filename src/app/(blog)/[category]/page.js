import PageHeader from "@/components/PageHeader";
import { sanityFetch } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import { Posts } from "@/components/Posts";
import { notFound } from "next/navigation";

import {
  CATEGORIES_QUERY,
  POSTS_CATEGORY_QUERY,
  CATEGORY_QUERY,
} from "@/sanity/lib/queries";
import React from "react";

export const dynamicParams = false;

export default async function CategoryRoute({ params }) {
  const category = params.category;
  const posts = await sanityFetch({ query: POSTS_CATEGORY_QUERY, params });

  if (!posts || posts.length === 0) {
    return notFound();
  }

  return (
    <>
      <PageHeader heading={category.toUpperCase()} />
      <Posts posts={posts} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const category = await sanityFetch({ query: CATEGORY_QUERY, params });

  return {
    title: category?.title,
    description: category?.description,
    openGraph: {
      type: "website",
      title: category?.title,
      description: category?.description,
      url: `/${category?.slug?.current}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = await client.fetch(
    CATEGORIES_QUERY,
    {},
    { perspective: "published" }
  );

  const categoriesSlug = categories.map((post) => ({
    slug: post?.slug?.current,
  }));
  return [...categoriesSlug, { slug: "posts" }];
}
