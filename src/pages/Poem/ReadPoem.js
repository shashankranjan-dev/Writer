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

      <div class="relative">
        <div class="max-w-3xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
          <a
            href="!#"
            class="max-w-3xl mx-auto text-4xl sm:text-4xl mt-6 font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            <PrismicRichText field={poem.data.heading} />
          </a>

          <img
            class="w-full my-4"
            src={poem?.data.banner.url}
            alt="Sunset in the mountains"
          />

          <hr />
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="mt-3 text-white px-4 lg:px-0  text-justify font-assistant tracking-wide flex flex-col justify-between leading-relaxed">
            <div class="">
              <p class="text-base leading-8 my-5">
                <PrismicRichText field={poem.data.description} />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <aside
        aria-label="Related articles "
        className="py-8 lg:py-24 mt-16  bg-stone-800"
      >
        <div className="px-0 justify-center mx-auto max-w-screen-lg">
          <h2 className="mb-8 text-2xl font-bold  text-white">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {poem.data?.body1[0]?.items.map((item) => (
              <RelatedPoem uid={item?.link.uid} />
            ))}
          </div>
        </div>
      </aside> */}
    </div>
  ) : (
    <></>
  );
}

export default ReadArticle;
