import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export function Posts({ posts }) {
  return (
    <section className="container mx-auto space-y-6 p-6 sm:space-y-12 mb-10">
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <Link
              href={`/posts/${post?.slug.current}`}
              key={post._id}
              className="group mx-auto max-w-sm overflow-hidden rounded-2xl shadow-lg hover:no-underline focus:no-underline lg:w-[300px] xl:min-w-[375px] 2xl:min-w-[450px] dark:bg-gray-900"
            >
              {post.mainImage?.asset?._ref ? (
                <Image
                  className="h-48 w-full object-cover"
                  src={urlFor(post.mainImage?.asset?._ref)
                    .width(300)
                    .height(300)
                    .url()}
                  width={300}
                  height={300}
                  alt={post.title || ""}
                />
              ) : null}
              <div className="relative space-y-2 p-6">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {post.title.toUpperCase()}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
