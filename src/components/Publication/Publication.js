import React from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

function Publication() {
  const [articles] = usePrismicDocumentsByType("article");
  const [poems] = usePrismicDocumentsByType("poem");
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container h-screen py-8  md:px-40 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-0">
            <button className="flex  flex-row justify-start items-center  py-8  ">
              <Link
                to="/writing"
                className="text-2xl sm:text-4xl font-bold leading-8 text-gray-100 tracking-widest hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300 font-assistant"
              >
                Pieces
              </Link>
              <Link
                to="/poem"
                className="text-2xl sm:text-4xl mx-16 leading-8 font-bold text-gray-100 tracking-widest font-assistant hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300"
              >
                Poem
              </Link>
              <Link
                to="/publication"
                className="text-2xl sm:text-4xl mx-auto leading-8 font-bold text-gray-100 tracking-widest font-assistant hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300"
              >
                Publications
              </Link>
            </button>
          </div>

          {articles?.results?.map((article, index) => (
            <div className="mt-10 flex justify-start flex-col items-start w-full text-left space-y-8 ">
              <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
                <Link to={`/articles/${article.uid}`}>
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-normal leading-7  flex flex-row md:leading-5 text-left
               text-purple-400 hover:text-orange-300 tracking-widest font-assistant hover:translate-x-10 hover:duration-500 underline underline-offset-8 hover:scale-105"
                  >
                    <PrismicRichText field={article.data.heading} />
                  </h3>

                  <br />
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

export default Publication;
