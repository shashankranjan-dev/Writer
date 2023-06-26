import React, { useState } from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

export default function Writing() {
  const [articles] = usePrismicDocumentsByType("article");
  const [poems] = usePrismicDocumentsByType("poem");

  return (
    <div>
      <div className="2xl:mx-auto 2xl:container py-12  md:px-4 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-0">
            <button className="flex  flex-row justify-start items-center  py-8  ">
              <p className="text-4xl font-bold leading-8 text-gray-100 tracking-widest hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300 font-assistant">
                Writing
              </p>
            </button>
            {/* <button className="w-full focus:outline-none   flex justify-center  flex-col  py-10  space-y-6"></button> */}
          </div>
          {/* <div className=" 2xl:container    ">
            <p className=" text-lg text-justify leading-8  mt-4 sm:pr-10 font-assistant tracking-widest text-gray-300">
              If you're looking for random paragraphs, you've come to the right
              place.If you're looking for random paragraphs, you've come to the
              right place.If you're looking for random paragraphs, you've come
              to the right place.If you're looking for random paragraphs, you've
              come to the right place.If you're looking for random paragraphs,
              you've come to the right place.If you're looking for random
              paragraphs, you've come to the right place.If you're looking for
              random paragraphs, you've come to the right place.
            </p>
          </div> */}
          {articles?.results?.map((article, index) => (
            <div className="mt-8 flex justify-start flex-col items-start w-full text-left space-y-3 ">
              <div className=" flex justify-start items-start flex-col text-left w-full xl:w-8/12 ">
                <Link to={`/articles/${article.uid}`}>
                  <h3
                    className="text-xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-widest font-assistant hover:translate-x-6 hover:duration-500 hover:scale-105"
                  >
                    <PrismicRichText field={article.data.heading} />
                    <div
                      aria-controls="slide"
                      aria-label="slide forward"
                      className="mx-8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right "
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="	#fff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </h3>
                </Link>
              </div>
              <hr className=" w-full border-gray-800 " />
            </div>
          ))}
        </div>
      </div>
      <div className="2xl:mx-auto 2xl:container py-12 -mt-16  md:px-4 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-0">
            <button className="flex  flex-row justify-start items-center  py-8  ">
              <p className="text-4xl font-bold leading-8 text-gray-100 tracking-widest hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300 font-assistant">
                Poetry
              </p>
            </button>
          </div>
          {/* <div className=" 2xl:container    ">
            <p className=" text-lg text-justify leading-8 mt-4 sm:pr-10 font-assistant tracking-widest text-gray-300">
              The city of Mathura is steeped in history and mythology. It has
              been mentioned in ancient Hindu texts such as the Mahabharata and
              the Puranas. Mathura was ruled by various dynasties, including the
              Mauryas, the Guptas, and the Mughals. The city was also a center
              of learning, arts, and commerce during ancient times.Mathura was
              ruled by various dynasties, including the Mauryas, the Guptas, and
              the Mughals. The city was also a center of learning, arts, and
              commerce during ancient times.
            </p>
          </div> */}
          {poems?.results?.map((poem, index) => (
            <div className="mt-8 flex justify-start flex-col items-start w-full text-left space-y-3">
              <div className=" flex justify-start items-start flex-col text-left w-full xl:w-8/12 ">
                <Link to={`/poems/${poem.uid}`}>
                  <h3
                    className="text-xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-widest font-assistant hover:translate-x-6 hover:duration-500 hover:scale-105"
                  >
                    <PrismicRichText field={poem.data.heading} />
                    <div
                      aria-controls="slide"
                      aria-label="slide forward"
                      className="mx-8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right "
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="	#fff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </h3>
                </Link>
              </div>
              <hr className=" w-full border-gray-800 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
