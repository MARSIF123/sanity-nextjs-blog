import PageHeader from "@/components/PageHeader";
import { Posts } from "../../components/Posts";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <>
      <div className="w-full h-[90vh]  flex justify-center bg-opacity-0 items-center bg-center bg-cover  bg-[url('/bgImage.jpg')]">
        <div className="w-[70%] mx-auto ">
          <h2 className="text-2xl">
            Hi, my name is <b className="text-4xl">Maryam Wasif</b>.
          </h2>
          <p className="text-xl">
            A passionate front end web developer and sometimes a blogger. Here
            on <b>WebWaves</b> you can find some really amazing content about
            web i.e HTML, CSS, JavaScript and so on.{" "}
          </p>
        </div>
      </div>
      <PageHeader heading={"Featured Posts"} />
      <Posts posts={posts} />
    </>
  );
}
