import { groq } from "next-sanity";

export const CATEGORIES_QUERY = groq`*[_type == "category" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const CATEGORY_QUERY = groq`*[_type == "category" && slug.current == $category][0]{
  title, slug, description
}`;

export const POSTS_CATEGORY_QUERY = groq`*[_type == "post" && categories[]->slug.current match $category]{
  title, mainImage, slug, _id
}`;

export const SOCIALS_QUERY = groq`*[_type == "social" ][0...12]{
  _id, text, link
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, mainImage
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;
