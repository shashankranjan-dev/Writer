import { useState, useEffect } from "react";
import axios from "axios";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

const Blog4 = () => {
  const [articles] = usePrismicDocumentsByType("article");

  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
      <h1 className="lg:text-5xl text-3xl text-center font-semibold leading-9 font-assistant tracking-widest text-white">
        Read Our Articles
      </h1>
      <p className=" text-base text-center leading-normal mt-4 sm:pr-10 font-assistant tracking-widest text-gray-300">
        If you're looking for random paragraphs, you've come to the right place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-16">
        {articles?.results?.map((article, index) => (
          <>
            <div>
              <div className="relative">
                <img
                  src={article?.data.banner.url}
                  className="w-full h-[400px] object-cover"
                  alt={article?.data.banner.alt}
                />
                <div className="bg-white absolute top-0 left-0">
                  <p className="text-base leading-4 py-3 px-5 text-gray-800">
                    News
                  </p>
                </div>
              </div>
              <p className="text-base font-bold font-assistant tracking-widest  leading-6 text-blue-500 mt-6">
                Naziya Khan
              </p>
              <h1 className="text-2xl font-semibold leading-7 font-assistant tracking-widest text-white sm:pr-20 mt-2">
                <PrismicRichText field={article.data.heading} />
              </h1>
              <p className="text-base leading-normal text-justify mt-4 sm:pr-20 md:pr-10 font-assistant tracking-widest text-white line-clamp-3">
                <PrismicRichText field={article.data.description} />
              </p>
              <Link
                to={`/articles/${article.uid}`}
                className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <p className="text-base font-medium leading-4 text-white">
                  Read more
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33203 8H12.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33344L12.6667 8.0001"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Blog4;
