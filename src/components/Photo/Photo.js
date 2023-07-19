import React from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";
import "../../App.css";
function IndexPage() {
  // const [photo] = usePrismicDocumentsByType("photo");
  // const firstPhoto = photo && photo?.results[0];
  // const restPhotosToShow = photo && photo?.results.slice(1, 4);

  return (
    <>
      <div class="external ">
        <div class="horizontal-scroll-wrapper">
          <div class="img-wrapper slower">
            <a
              href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper faster">
            <a
              href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper slower vertical">
            <a
              href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper slower slower-down">
            <a
              href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper">
            <a
              href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper slower">
            <a
              href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper faster1">
            <a
              href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper slower slower2">
            <a
              href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper">
            <a
              href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper slower">
            <a
              href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="img-wrapper slower last">
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center my-16 w-full">
        <Link to="/browse">
          <button className="hover:bg-indigo-500 border shadow-md shadow-black border-white tracking-widest font-assistant border-1 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-white focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
            Browse More
          </button>
        </Link>
      </div>
    </>
  );
}

export default IndexPage;
