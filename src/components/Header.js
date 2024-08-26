import React from "react";
import Link from "next/link";
function Header({ categories, logoText }) {
  return (
    <div className="h-[10vh] w-full flex flex-wrap items-center justify-between p-4">
      <Link href="/" className={`font-Dancing text-2xl font-bold`}>
        {logoText}
      </Link>
      <ul className="flex">
        {categories.map((cat) => (
          <li key={cat._id} className="mx-4">
            <Link href={`/${cat.slug.current}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
