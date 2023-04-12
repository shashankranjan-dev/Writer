import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import React from "react";
import { Link } from "react-router-dom";

function Relatedpoem({ uid }) {
  const [poem] = usePrismicDocumentByUID("poem", uid);
  return poem ? (
    <poem className="max-w-xs">
      <a href="!#">
        <img
          src={poem?.data.banner.url}
          className="mb-5 rounded-lg aspect-video max-w-full"
          alt={poem?.data.banner.alt}
        />
      </a>
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <a href="!#">
          <PrismicRichText field={poem.data.heading} />
        </a>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-2">
        <PrismicRichText field={poem.data.description} />
      </p>
      <Link
        to={`/poems/${poem.uid}`}
        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
      >
        Read Now
      </Link>
    </poem>
  ) : (
    <></>
  );
}

export default Relatedpoem;
