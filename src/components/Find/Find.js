import React from "react";

export default function Home() {
  return (
    <>
      <div className="xl:px-20 px-6 py-2 xl:mx-auto xl:container">
        <div className="md:mt-0 mt-4 relative sm:flex items-center justify-center">
          <img
            src="/hi-removebg.png"
            alt=""
            className="w-full xl:h-full h-96  object-fill sm:block hidden"
          />
          <img
            src="/hi-removebg.png"
            alt=""
            className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
          />

          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white bg-opacity-0 sm:absolute relative z-20 md:-mt-5 sm:-mt-5 mt-4 right-0 xl:mr-80 sm:mr-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
              alt=""
              className="h-8 w-8 animate-bounce"
            />
            <p className="text-2xl font-bold leading-4 xl:mt-4 mt-2 bg-white bg-opacity-0  text-white animate-pulse">
              New Delhi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
