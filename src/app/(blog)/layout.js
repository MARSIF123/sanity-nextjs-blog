import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Header from "@/components/Header";
import { sanityFetch } from "@/sanity/lib/client";
import { CATEGORIES_QUERY, SOCIALS_QUERY } from "@/sanity/lib/queries";
import Footer from "@/components/Footer";

const FRONT_END_NAME = "WebWaves";

export const metadata = {
  title: FRONT_END_NAME + " | Home Page",
  description: "A Blog website",
};

export default async function RootLayout({ children }) {
  const categories = await sanityFetch({ query: CATEGORIES_QUERY });
  const socialLinks = await sanityFetch({ query: SOCIALS_QUERY });

  return (
    <html lang="en">
      <body>
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <Header categories={categories} logoText={FRONT_END_NAME} />
        {children}
        {draftMode().isEnabled && <VisualEditing />}
        <Footer
          categoryLinks={categories}
          logoText={FRONT_END_NAME}
          socialLinks={socialLinks}
        />
      </body>
    </html>
  );
}
