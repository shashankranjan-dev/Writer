import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "../../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

const Hero2 = () => {
  SwiperCore.use([Autoplay]);
  const [poems] = usePrismicDocumentsByType("poem");

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto py-9 md:py-12 lg:py-4">
        <div className=" flex flex-wrap sm:justify-end mr-2 justify-center gap-4 z-50">
          <button className="btn btn-primary rounded-full hover:bg-blue-600 text-white text-xs font-semibold py-2 px-2 testimonial-swiper-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button className=" btn btn-primary rounded-full hover:bg-blue-600 text-white text-xs font-semibold py-2 px-2 testimonial-swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
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
          {poems?.results?.map((poem, index) => (
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row justify-center items-center mx-4">
                <div className="lg:w-7/12 flex justify-between items-center">
                  <div>
                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-assistant tracking-wide font-bold  ">
                      <PrismicRichText field={poem.data.heading} />
                    </h1>
                    <p className="dark:text-gray-300 md:w-7/12 font-assistant  line-clamp-3 tracking-widest lg:w-11/12 xl:w-10/12 mt-4 text-justify lg:mt-5 text-base leading-normal text-gray-600">
                      <PrismicRichText field={poem.data.description} />
                    </p>
                    <Link to={`/poems/${poem.uid}`}>
                      <button className="mt-4 border-2 p-3 px-6  hover:bg-pink-200 hover:text-black bg-blue-500 hover bg-opacity-25 text-white">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-9/12 mt-6 md:mt-8 lg:-mt-24">
                  <div className="relative w-full sm:h-screen">
                    <img
                      src={poem?.data.banner.url}
                      alt="A lounge sofa"
                      className="w-[100%] h-[780px] object-cover shadow-lg shadow-black relative hidden lg:block"
                    />
                    <img
                      src={poem?.data.banner.url}
                      alt="A lounge sofa"
                      className="w-full h-[700px] object-cover lg:hidden"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero2;
