import React from "react";

export default function Home() {
  return (
    <>
      {/* <div className="xl:px-20 px-6 py-2 xl:mx-auto xl:container">
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
      </div> */}

      <div className="2xl:mx-auto h-screen 2xl:container mx-4 py-16">
        <div className=" w-full  relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/4sYZ8gC/img-2.png"
            alt="dining"
            className="w-full h-full absolute z-0 hidden xl:block"
          />
          <img
            src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
          />
          <img
            src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            className="w-full h-full absolute z-0  sm:hidden "
          />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Don’t miss out!
            </h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>

            <button className="mt-6 focus:outline-none focus:ring-offset-2 text-white focus:ring  border-white bg-transparent border-2 w-full sm:w-auto bg-white py-4 px-16 hover:bg-opacity-75">
              Click on Me 😌
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
