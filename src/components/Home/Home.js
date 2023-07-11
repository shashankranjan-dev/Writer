import React from "react";
import { useNavigate } from "react-router-dom";

const Hero8 = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-8 py-8 2xl:mx-auto 2xl:container">
        <div className="z-30 relative lg:w-1/2 ">
          <div className="hidden   w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
            <div className="w-full lg:w-auto lg:-mr-32">
              <img
                src="/naz.jpg"
                alt=""
                className="w-full relative h-[50rem]  z-30 lg:pl-20 px-6 py-14"
              />
            </div>
          </div>
          <div className="absolute top-0   md:h-96 w-full hidden md:block lg:hidden"></div>
          <div className="w-full h-full lg:hidden">
            <img
              src="/naz.jpg"
              alt=""
              className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
            />
          </div>
        </div>
        <div className="  lg:w-1/2 lg:ml-12 lg:p-14 py-8 flex items-center">
          <div>
            {/* <h1 className="text-gray-300 font-assistant tracking-widest md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold  capitalize">
              Naziya Khan
            </h1> */}
            <button
              onClick={() => navigate("/write")}
              className="   sm:w-auto w-full mt-4 font-assistant tracking-widest text-2xl  hover:text-gray-300 font-medium leading-none text-white py-4  flex items-center"
            >
              I write
              <div className="ml-2 mt-0.5">
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33301L12.6667 7.99967"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <p className="text-gray-300 md:w-9/12 font-light font-assistant tracking-wide text-justify lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal  mt-6">
              Get inspired by our curated selection of luxiwood interiors. We
              hope get inspired to have luxiwood interior yourself. You’ll find
              tips here where you can buy a lot of cool furniture,decorations,
              plants, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero8;
