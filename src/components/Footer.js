import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaUpwork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

function CategoryLink({ slug, name }) {
  return (
    <li className="flex">
      <Link href={`/${slug}`} className="hover:dark:text-violet-400">
        {name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }) {
  switch (social) {
    case "Website":
      return <CgWebsite />;
    case "Twitter":
      return <AiFillTwitterCircle />;
    case "Youtube":
      return <AiFillYoutube />;
    case "Upwork":
      return <FaUpwork />;
    case "GitHub":
      return <FaGithub />;
    default:
      return null;
  }
}

export default function Footer({ logoText, categoryLinks, socialLinks }) {
  return (
    <footer className="py-6 dark:bg-black dark:text-gray-50">
      <div className="container mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:space-y-12">
        <div className="grid grid-cols-12">
          <div className="col-span-full pb-6 md:col-span-6 md:pb-0">
            {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
          </div>

          <div className="col-span-6 text-center md:col-span-3 md:text-left">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {categoryLinks?.map((link) => (
                <CategoryLink
                  name={link.title}
                  slug={link.slug.current}
                  key={link._id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex">
            <span className="mr-2">
              ©{new Date().getFullYear()} All rights reserved
            </span>
          </div>
          <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
            {socialLinks.map((link) => {
              console.log(link.link);
              return (
                <Link
                  key={link._id}
                  rel="noopener noreferrer"
                  href={
                    link.link.startsWith("http")
                      ? link.link
                      : `https://${link.link}`
                  }
                  title={link.text}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-violet-400 dark:text-gray-900"
                >
                  <RenderSocialIcon social={link.text} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
