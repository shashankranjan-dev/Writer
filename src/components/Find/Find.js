import React from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";

export default function Index() {
  const [photo] = usePrismicDocumentsByType("photo");

  // Sort the photo array by the latest update
  if (photo?.results) {
    photo.results.sort((a, b) => {
      const dateA = new Date(a.last_publication_date);
      const dateB = new Date(b.last_publication_date);
      return dateB - dateA;
    });
  }

  return (
    <>
      <div className="2xl:mx-auto 2xl:container 2xl:px-40 xl:px-36 sm:px-12 px-8 py-6">
        <p className="text-lg text-justify leading-8 mt-4 sm:pr-10 font-assistant tracking-wider text-gray-300">
          If you're looking for random paragraphs, you've come to the right
          place.If you're looking for random paragraphs, you've come to the
          right place.If you're looking for random paragraphs, you've come to
          the right place.If you're looking for random paragraphs,
        </p>
      </div>
      <section className="">
        <div className="container px-8 py-2 mx-auto">
          {photo?.results?.map((photo, index) => (
            <section
              className="mt-8 space-y-8 lg:mt-4 cursor-pointer"
              key={index}
            >
              <section className="lg:flex lg:items-center justify-center">
                <div className="mt-4 lg:w-1/3 lg:mt-0 ml-0 sm:ml-0 md:ml-0 lg:ml-4">
                  <img
                    className="object-cover w-full h-96 md:h-96 hover:shadow-sm hover:shadow-gray-600"
                    src={photo?.data.banner.url}
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 px-0 sm:px-0 d:px-0 lg:px-24">
                  <h2 className="mt-2 text-xl font-normal font-assistant tracking-wider text-gray-800 capitalize dark:text-white">
                    <PrismicRichText field={photo.data.heading} />
                  </h2>
                </div>
              </section>

              <hr className="w-full ml-0 sm:ml-0 md:ml-0 lg:ml-20 xl:ml-32 border-gray-700 py-2" />
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
