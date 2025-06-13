import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import skyshareApi from "../utilities/skyshareApi";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

import HomeArticle from "../components/HomeArticle";


function ArticlePageOpenned() {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getArticleById = async function () {
      try {
        const response = await skyshareApi.get(`article/${id}`);
        setArticle(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticleById();
  }, [id]);

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{article.title || "Skyshare Article"}</title>
        <meta name="description" content={article.description || "Baca artikel menarik dari Skyshare."} />
        <link rel="canonical" href={`https://skyshareacademy.id/article/${id}`} /> {/* Ganti dengan domain kamu */}

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content={article.title || "Skyshare Article"} />
        <meta property="og:description" content={article.description || "Baca artikel menarik dari Skyshare."} />
        <meta property="og:image" content={article.image_heading || "https://skyshareacademy.id/default-og-image.jpg"} /> {/* Ganti dengan default OG image */}
        <meta property="og:url" content={`https://skyshareacademy.id/article/${id}`} /> {/* Ganti dengan domain kamu */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Skyshare" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title || "Skyshare Article"} />
        <meta name="twitter:description" content={article.description || "Baca artikel menarik dari Skyshare."} />
        <meta name="twitter:image" content={article.image_heading || "https://skyshareacademy.id/default-og-image.jpg"} /> {/* Ganti dengan default OG image */}
      </Helmet>

      <div className="hero flex background flex-col items-center self-stretch">
        <div className="content h-full lg:mt-10">
          <div>
          <h1 className="headline-1 lg:text-[32px] xs:text-[24px] text-center content-center">
            {article.title}
          </h1>

          </div>
          <div className="pt-4 lg:hidden block">
            <h4
              style={{ backgroundColor: `${article.category_color}` }}
              className={`text-white flex justify-center items-center font-bold px-2 py-1 w-[50%] rounded-full mx-auto`}
            >
              {article.category_name}
            </h4>
          </div>
          <div>
            {article.image_heading && (
              <img
                src={article.image_heading}
                className="mt-4 mx-auto lg:w-[1152px] lg:max-h-[648px]"
                alt={article.title || "Article Image"} // Tambahkan alt text untuk aksesibilitas
              />
            )}
            <div className="flex w-full mt-10 justify-between">
              <div className="penulis lg:w-[200px]">
                <p className="paragraph">Author:</p>
                <h4 className="headline-4">{article.admin_name}</h4>
              </div>
              <div
                className="hidden lg:block prose lg:prose-lg mx-auto text-justify lg:w-[700px]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className="kategori lg:block lg:w-[200px] hidden ">
                <p className="paragraph pl-10 text-right pr-2">Category:</p>
                <h4
                  style={{ backgroundColor: `${article.category_color}` }}
                  className={`text-white flex justify-center items-center font-bold px-2 py-1 w-auto lg:w-max-full rounded-full`}
                >
                  {article.category_name}
                </h4>
              </div>
            </div>
          </div>
          <div
            className="block lg:hidden prose lg:prose-lg mx-auto text-justify lg:w-[600px] xs:pt-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {/* <div className="w-full flex justify-center mt-10">
            <a
              className="px-5 py-4 items-center gap-2 bg-primary-1 flex hover:bg-primary-2 rounded-lg"
              href={`https://${article.link}`}
              target="_blank" // Tambahkan target="_blank" untuk membuka di tab baru
              rel="noopener noreferrer" // Penting untuk keamanan
            >
              <p className="text-white font-semibold">Learn more</p>
              <img className="w-6 -rotate-90" src={ArrowLeft} alt="" />
            </a>
          </div> */}
        </div>
      </div>
      <HomeArticle />

    </>
  );
}

export default ArticlePageOpenned;