import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "../../App.css";

const Hero2 = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto py-9 md:py-12 lg:py-6">
        <div className=" flex flex-wrap sm:justify-center justify-center gap-4 z-50">
          <button className="btn btn-primary border-2 rounded-full hover:bg-blue-600 text-white text-xs font-semibold py-2 px-2 testimonial-swiper-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
          </button>
          <button className=" btn btn-primary border-2 rounded-full hover:bg-blue-600 text-white text-xs font-semibold py-2 px-2 testimonial-swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          effect={"creative"}
          navigation={{
            nextEl: ".testimonial-swiper-button-next",
            prevEl: ".testimonial-swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper mt-8"
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
              <div className="lg:w-4/12 flex justify-center items-center">
                <div>
                  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-assistant tracking-wide font-bold  w-7/12">
                    Amoire
                  </h1>
                  <p className="dark:text-gray-300 md:w-7/12 font-assistant tracking-widest lg:w-11/12 xl:w-10/12 mt-4 text-justify lg:mt-5 text-base leading-normal text-gray-600">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using
                  </p>
                  <button className="mt-4 border-2 p-3  hover:bg-pink-200 hover:text-black bg-blue-500 hover bg-opacity-25 text-white">
                    Read More
                  </button>
                </div>
              </div>
              <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                <div className="relative w-full h-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__340.jpg"
                    alt="A lounge sofa"
                    className="w-full h-full relative hidden lg:block"
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__340.jpg"
                    alt="A lounge sofa"
                    className="w-full h-full lg:hidden"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
              <div className="lg:w-4/12 flex justify-center items-center">
                <div>
                  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-assistant tracking-wide font-bold  w-7/12">
                    Amoire
                  </h1>
                  <p className="dark:text-gray-300 md:w-7/12 font-assistant tracking-widest lg:w-11/12 xl:w-10/12 mt-4 text-justify lg:mt-5 text-base leading-normal text-gray-600">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using
                  </p>
                  <button className="mt-4 border-2 p-3  hover:bg-pink-200 hover:text-black bg-blue-500 hover bg-opacity-25 text-white">
                    Read More
                  </button>
                </div>
              </div>
              <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                <div className="relative w-full h-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg"
                    alt="A lounge sofa"
                    className="w-full h-full relative hidden lg:block"
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg"
                    alt="A lounge sofa"
                    className="w-full h-full lg:hidden"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
              <div className="lg:w-4/12 flex justify-center items-center">
                <div>
                  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-assistant tracking-wide font-bold  w-7/12">
                    Amoire
                  </h1>
                  <p className="dark:text-gray-300 md:w-7/12 font-assistant tracking-widest lg:w-11/12 xl:w-10/12 mt-4 text-justify lg:mt-5 text-base leading-normal text-gray-600">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using
                  </p>
                  <button className="mt-4 border-2 p-3  hover:bg-pink-200 hover:text-black bg-blue-500 hover bg-opacity-25 text-white">
                    Read More
                  </button>
                </div>
              </div>
              <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                <div className="relative w-full h-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg"
                    alt="A lounge sofa"
                    className="w-full h-full relative hidden lg:block"
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg"
                    alt="A lounge sofa"
                    className="w-full h-full lg:hidden"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero2;
