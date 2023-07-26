import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero8 = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl mx-auto ">
      {/* <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-6 py-8 2xl:mx-auto 2xl:container">
//         <div className="z-30 relative lg:w-1/2 ">
//           <div className="hidden   w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
//             <div className="w-full  lg:w-auto lg:-mr-32">
//               <img
//                 src="/naz.jpg"
//                 alt=""
//                 className="w-full relative h-[50rem]  z-30 lg:pl-20 px-6 py-8"
//               />
//             </div>
//           </div>
//           <div className="absolute top-0  md:h-96 w-full hidden md:block lg:hidden"></div>
//           <div className="w-full h-full lg:hidden">
//             <img
//               src="/naz.jpg"
//               alt=""
//               className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
//             />
//           </div>
//         </div>
//         <div className="  lg:w-1/2 lg:ml-12 lg:p-14 py-8 flex items-center">
//           <div>

//             <button
//               onClick={() => navigate("/write")}
//               className="   sm:w-auto w-full mt-4 font-assistant tracking-widest text-2xl  hover:text-gray-300 font-medium leading-none text-white py-4  flex items-center"
//             >
//               I write
//               <div className="ml-2 mt-0.5">
//                 <svg
//                   className="fill-stroke"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M3.33325 8H12.6666"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M10 10.6667L12.6667 8"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M10 5.33301L12.6667 7.99967"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </button>
//             <p className="text-gray-300 md:w-9/12 font-light font-assistant tracking-wide text-justify lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal  mt-6">
//               Get inspired by our curated selection of luxiwood interiors. We
//               hope get inspired to have luxiwood interior yourself. You’ll find
//               tips here where you can buy a lot of cool furniture,decorations,
//               plants, etc.
//             </p>
//           </div>
//         </div>
       </div> */}
      {/* <img src="/WhatsApp Image 2023-07-12 at 23.25.06.jpg" alt="" /> */}
      <div class="w-full">
        <div class="mx-auto flex max-w-screen-xl items-center gap-8 mt-6 py-14 px-10">
          <div class=" w-full sm:w-7/12 overflow-hidden rounded-lg">
            <div class="h-full bg-gray-100">
              <img
                src="/WhatsApp Image 2023-07-12 at 23.25.06.jpg"
                loading="lazy"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-0">
          <div class="flex px-10 sm:px-[780px]  flex-row justify-center items-center py-4">
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin leading-8 text-gray-100 tracking-wider    font-assistant">
              Journalist.
            </p>
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mx-16 leading-8 font-thin text-gray-100 tracking-wider font-assistant   ">
              Writer.
            </p>
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mx-auto leading-8 font-thin text-gray-100 tracking-wider font-assistant   ">
              Researcher.
            </p>
          </div>
        </div>
      </div>
      <p class="text-gray-300 px-16 sm:px-48 pl-10 sm:pl-[480px] font-light font-assistant tracking-wide text-justify w-full text-base leading-normal mt-2">
        Here, you will find a versatile composition of different writings and a
        few visual note-taking experiences through photography. Gender,
        philosophy, society, and understanding of culture array to my
        selective writings
      </p>
      <button
        onClick={() => navigate("/write")}
        className="   sm:w-auto w-full mt-2 px-48 pl-10 sm:pl-[480px] font-assistant tracking-widest text-2xl  hover:text-gray-300 font-medium leading-none text-white py-4  flex items-center"
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
    </div>
  );
};

export default Hero8;
