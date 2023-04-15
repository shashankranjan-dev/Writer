import { useState } from "react";

import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

const Blog4 = () => {
  const [articles] = usePrismicDocumentsByType("article");
  const [currentPage, setCurrentPage] = useState(0); // Add current page state
  const articlesPerPage = 4; // Set the number of articles per page

  // Calculate the start and end index of articles for the current page
  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const totalPages = Math.ceil(
    (articles?.results?.length || 1) / articlesPerPage
  );

  // Create a function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
      <h1 className="lg:text-5xl text-3xl text-center font-semibold leading-9 font-assistant tracking-widest text-white">
        Read Our Articles
      </h1>
      <p className=" text-base text-center leading-normal mt-4 sm:pr-10 font-assistant tracking-widest text-gray-300">
        If you're looking for random paragraphs, you've come to the right place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-16 ">
        {articles?.results
          ?.slice(startIndex, endIndex)
          ?.map((article, index) => (
            <>
              <div className="">
                <div className="relative">
                  <img
                    src={article?.data.banner.url}
                    className="w-full h-[400px] object-cover "
                    alt={article?.data.banner.alt}
                  />
                  <div className="bg-white absolute top-0 left-0">
                    <p className="text-base leading-4 py-3 px-5 text-gray-800">
                      News
                    </p>
                  </div>
                </div>
                <p className=" text-base font-bold font-assistant tracking-widest  leading-6 text-blue-500 mt-6">
                  Naziya Khan
                </p>
                <h1 className=" text-2xl font-semibold leading-7 font-assistant tracking-widest text-white sm:pr-20 mt-2">
                  <PrismicRichText field={article.data.heading} />
                </h1>
                <p className=" text-base leading-normal text-justify mt-4 sm:pr-20 md:pr-10 font-assistant tracking-widest text-neutral-300 line-clamp-3">
                  <PrismicRichText field={article.data.description} />
                </p>
                <Link
                  to={`/articles/${article.uid}`}
                  className=" flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                >
                  <p className="text-base font-medium leading-4 text-white">
                    Read more
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http:www.w3.org/2000/svg"
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
      <div className="flex justify-center items-center mt-12 space-x-4">
        <button
          className="shadow-md shadow-black hover:shadow-white hover:shadow-sm inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  border  rounded-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`bg-gray-800 p-2 h-10 w-10 shadow-md shadow-black hover:shadow-white hover:shadow-sm  rounded-full text-white ${
              currentPage === index && "ring-2 ring-offset-2 ring-gray-700"
            }`}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="shadow-md shadow-black hover:shadow-white hover:shadow-sm inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  border  rounded-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          disabled={currentPage === totalPages - 1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blog4;
