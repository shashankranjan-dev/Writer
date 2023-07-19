import React from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

function Publication() {
  const [photo] = usePrismicDocumentsByType("photo");
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container h-screen py-8  md:px-40 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-0">
            <button className="flex  flex-row justify-start items-center  py-8  ">
              <Link
                to="/writing"
                className="text-2xl sm:text-4xl uppercase font-thin leading-8 text-gray-100 tracking-wider hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300 font-assistant"
              >
                Pieces
              </Link>
              <Link
                to="/poem"
                className="text-2xl sm:text-4xl mx-16 leading-8 uppercase font-thin text-gray-100 tracking-wider font-assistant hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300"
              >
                Poems
              </Link>
              <Link
                to="/publication"
                className="text-2xl sm:text-4xl mx-auto leading-8 uppercase font-thin text-gray-100 tracking-wider font-assistant hover:underline hover:underline-offset-8 hover:text-orange-200 hover:duration-300"
              >
                Publications
              </Link>
            </button>
          </div>

          <div className="mt-10 flex justify-start flex-col items-start w-full text-left space-y-8">
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://theprobe.in/stories/maharashtras-missing-girls-lack-of-action-from-law-enforcement-agencies-causes-concern/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Maharashtra - Missing girls report, 2023
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://theprobe.in/stories/tihar-jail-violence-no-quick-fix-solutions-judicial-reforms-necessary/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Tihar Investigation report, 2023
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://theprobe.in/stories/unpacking-nep-the-education-policys-prospects-and-pitfalls/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                NEP 2020, Policy Analysis, 2023
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://www.oneworldnews.com/editors-pick/understanding-down-syndrome-how-it-is-caused/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Report on Down Syndrome, 2019
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://www.oneworldnews.com/lifestyle/modern-parenting-tips-for-indian-parents/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Parenting Mishaps, 2019
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://www.oneworldnews.com/editors-pick/pleasure-in-pop-culture-event/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Pleasure in Pop Culture, 2019
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://www.oneworldnews.com/editors-pick/kingdom-in-dream-the-prime-minister-a-book-on-agri-crisis/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Agricultural Crisis, 2019
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-full ">
              <a
                href="https://www.oneworldnews.com/editors-pick/accept-your-failure/"
                className="text-2xl sm:text-3xl md:text-3xl font-medium leading-7  flex flex-row md:leading-5 text-left
                   text-gray-100 hover:text-orange-300 tracking-wide font-assistant hover:translate-x-10 hover:duration-500 hover:scale-105"
              >
                Value of Acceptance, 2019
              </a>
            </div>
            <hr className="border border-gray-800 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
