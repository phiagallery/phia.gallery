import React from "react";
import Link from "./links/NoScrollLink";

export default function ReadMore({ slug, className: propClasses } : any) {
  return (
    <Link
      as={`/portfolio/${slug}`}
      href={{ pathname: "/portfolio/[slug]", query: { internalLink: true } }}
    >
      <a
        className={`px-4 py-2 mt-6 md:mt-8 border-solid border border-black font-body text-base ease-in-out transition duration-500 ${propClasses}`}
      >
        Read more
      </a>
    </Link>
  );
}
