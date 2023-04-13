import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedPoem from "../../components/Poem/RelatedPoem";
import Write from "../../components/Write/Write";

function ReadArticle() {
  const params = useParams();
  const { slug } = params;

  const [poem] = usePrismicDocumentByUID("poem", slug);
  console.log(poem);

  return poem ? (
    <div className="text-white">
      <Write />
      {/* <div class="flex flex-wrap justify-center">
        <div class="max-w-3xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
          <img
            class="w-full my-4"
            src={poem?.data.banner.url}
            alt="Sunset in the mountains"
          />
        </div>

        <div class="max-w-2xl mx-auto">
          <a
            href="!#"
            class=" text-4xl font-assistant tracking-wide sm:text-4xl mt-6 font-semibold  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            <PrismicRichText field={poem.data.heading} />
          </a>
          <div class="mt-3 text-white lg:px-0  text-justify font-assistant tracking-wide  leading-relaxed">
            <div class="">
              <p class="text-base leading-8 my-5">
                <PrismicRichText field={poem.data.description} />
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-20">
        <div class="container m-auto px-6   md:px-auto xl:px-20">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:ml-40 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={poem?.data.banner.url}
                alt=""
                loading="lazy"
                className="shadow-lg  shadow-black"
              />
            </div>
            <div class="md:7/12 lg:w-6/12 justify-center">
              <h2 class="text-4xl text-white font-bold hover:text-indigo-600 font-assistant tracking-widest transition duration-500 ease-in-out md:text-4xl">
                <PrismicRichText field={poem.data.heading} />
              </h2>
              <br />
              <hr className="w-36 " />
              <p class="mt-6 text-white font-assistant tracking-widest leading-7 text-justify">
                <PrismicRichText field={poem.data.description} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <aside
        aria-label="Related articles "
        className="py-8 lg:py-24 mt-16  bg-stone-800"
      >
        <div className="px-0 justify-center mx-auto max-w-screen-lg">
          <h2 className="mb-8 text-2xl font-bold  text-white">
            Related articles
          </h2>
          {/* <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {poem.data?.body1[0]?.items.map((item) => (
              <RelatedPoem uid={item?.link.uid} />
            ))}
          </div> */}
        </div>
      </aside>
    </div>
  ) : (
    <></>
  );
}

export default ReadArticle;
