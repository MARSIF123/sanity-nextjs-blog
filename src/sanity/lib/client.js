import "server-only";

import { draftMode } from "next/headers";
import { createClient, QueryOptions, QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/studio",
  },
});

export async function sanityFetch({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}) {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    // Do not cache in Draft Mode
    dynamicRevalidate = 0;
  } else if (tags.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    dynamicRevalidate = false;
  }

  return client.fetch(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: "previewDrafts",
      stega: true,
    }),
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}
