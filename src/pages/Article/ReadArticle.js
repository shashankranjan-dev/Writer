import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedArticle from "../../components/Article/RelatedArticle";
import Write from "../../components/Write/Write";
import { Link } from "react-router-dom";

function ReadArticle() {
  const params = useParams();
  const { slug } = params;

  const [article] = usePrismicDocumentByUID("article", slug);
  console.log(article);

  return article ? (
    <div className="text-white">
      {/* <Write /> */}

      <div className="max-w-screen-lg mx-auto">
        <main class="mt-10">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="text-4xl font-semibold py-2 text-white text-center font-assistant tracking-wider leading-tight">
                <PrismicRichText field={article.data.heading} />
              </h2>
            </div>

            {/* <img
              src={article?.data.banner.url}
              alt={article?.data.banner.alt}
              class="w-full mt-6  sm:h-[600px] object-center lg:rounded"
            /> */}
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div class="px-4 lg:px-0 mt-6 text-white text-center text-lg leading-relaxed w-full lg:w-full">
              <p class="pb-6 text-justify font-assistant tracking-wide">
                <PrismicRichText
                  field={article.data.desc}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="mb-3">{children}</p>
                    ),
                  }}
                />
              </p>
            </div>

            {/* <div class="w-full lg:w-1/4 m-auto mt-8 max-w-screen-sm">
              <div class="p-4 border-t border-b  md:border md:rounded">
                <div class="flex py-2">
                  <img
                    src="/nazu1.jpg"
                    class="h-12 w-12 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p class="font-semibold text-white text-base">
                      {" "}
                      Naziya Khan{" "}
                    </p>
                    <p class="font-semibold text-white text-sm"> Writer </p>
                  </div>
                </div>
                <p class="text-white text-justify py-3">
                  Naziya Khan writes about technology Yourself required no at
                  thoughts delicate landlord it be. Branched dashwood do is
                  whatever it.
                </p>
                <button class="px-2 py-1 text-white bg-blue-700 flex w-full items-center justify-center rounded">
                  <a href="https://www.linkedin.com/in/naziya-perveen-3a010b262/">
                    {" "}
                    Follow
                  </a>

                  <i class="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div> */}
          </div>
        </main>
      </div>

      <aside aria-label="Related articles " className="py-8 lg:py-20 mt-16  ">
        <div className="px-12 sm:px-0  justify-center mx-auto max-w-screen-lg">
          {/* <h2 className="mb-8 text-2xl flex justify-between font-bold  tracking-widest  text-white">
            Read More{" "}
          </h2> */}
          <div className="flex flex-row justify-between">
            <div className="grid gap-12  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  justify-between">
              {article.data?.body1[0]?.items.map((item) => (
                <RelatedArticle uid={item?.link.uid} />
              ))}
            </div>
            <Link
              to="/writing"
              className="text-white pl-12  font-assistant  tracking-widest font-bold text-base "
            >
              Back
            </Link>
          </div>
        </div>
      </aside>
    </div>
  ) : (
    <></>
  );
}

export default ReadArticle;
