import React from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

function Browse() {
  const [photo] = usePrismicDocumentsByType("photo");
  return (
    <div>
      <section class="text-gray-400  body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {photo?.results?.map((photo, index) => (
              <div class="p-4 md:w-1/4">
                <div class="h-full hover:shadow-sm hover:shadow-white border-gray-800 shadow-md shadow-black rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src={photo?.data.banner.url}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
                      Naziya Khan
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      <PrismicRichText field={photo.data.heading} />
                    </h1>
                    <p class="leading-relaxed mb-3 line-clamp-2">
                      <PrismicRichText field={photo.data.description} />
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <Link to={`/browse/${photo.uid}`}>
                        <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Browse;
