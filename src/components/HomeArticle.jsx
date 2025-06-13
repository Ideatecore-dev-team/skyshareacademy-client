import React from "react";
import skyshareApi from "../utilities/skyshareApi";
import { useState, useEffect } from "react";
import "./HomeArticle.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper dan SwiperSlide
import "swiper/css"; // Import base Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Pagination } from "swiper/modules"; // Import Pagination module

function HomeArticle() {
  const [articles, setArticles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 638);

  useEffect(() => {
    const getAllArticle = async function () {
      try {
        const response = await skyshareApi.get("/article");
        setArticles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllArticle();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 638);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortArticles = [...articles]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3)

  const navigate = useNavigate();

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const extractAndLimitContent = (htmlContent, limit) => {
    if (!htmlContent) return "";
    let strippedContent = htmlContent.replace(/<[^>]*>/g, "");
    strippedContent = strippedContent.replace(/&nbsp;/g, "");
    strippedContent = strippedContent.trim();
    if (strippedContent.length > limit) {
      return strippedContent.substring(0, limit) + "...";
    }
    return strippedContent;
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className=" home-art lg:py-20 xs:py-14 lg:px-0 xs:px-6">
        <div className="art-header lg:pb-12 xs:pb-7 flex max-w-6xl mx-auto justify-around items-center">
          <h2 className="text-right lg:w-1/2 lg:ml-20 font-bold lg:text-3xl xs:text-2xl">
            Artikel Terbaru
          </h2>
          <button
            onClick={() => {
              navigate("/article");
              scrollToTop();
            }}
            className=" bg-primary-1 hover:bg-primary-2 px-4 py-3 rounded-lg lg:flex hidden"
          >
            <p className="text-white font-semibold">View More</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" inline ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.749 13.3037L3.24926 13.3037L3.24926 11.8037L20.749 11.8037L20.749 13.3037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.8037C16.4718 11.8037 13.5894 14.9059 13.5894 18.2138L13.5894 18.9638L15.0894 18.9638L15.0894 18.2138C15.0894 15.7022 17.332 13.3037 19.9994 13.3037L20.7494 13.3037L20.7494 11.8037L19.9994 11.8037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 13.3037C16.4718 13.3037 13.5894 10.2016 13.5894 6.89366L13.5894 6.14366L15.0894 6.14366L15.0894 6.89366C15.0894 9.40524 17.332 11.8037 19.9994 11.8037L20.7494 11.8037L20.7494 13.3037L19.9994 13.3037Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="article max-w-6xl mx-auto xs:pb-[80px] xs:overflow-hidden">
          {isMobile ? (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              // pagination={{ clickable: true }}
              // modules={[Pagination]}
              className="w-[260px] overflow-hidden"
            >
              {sortArticles.map((article) => (
                <SwiperSlide key={article.id}>
                  <a
                    href={"/article/" + article.id}
                    onClick={scrollToTop}
                    // Menghilangkan hover dan shadow saat mobile
                    className="card-art bg-white rounded-2xl lg:gap-6 gap-4 flex flex-col overflow-hidden relative border-[2px] border-neutral-600"
                  >
                    <div
                      className="card-img bg-cover h-[110px] self-stretch flex-shrink-0"
                      style={{ backgroundImage: `url(${article.image_heading})` }}
                    ></div>
                    <div className="card-content flex flex-col px-6 gap-4">
                      <p className="font-bold text-base">
                        {extractAndLimitContent(article.title, 20)}
                      </p>
                      <div className="font-normal text-sm">
                        {extractAndLimitContent(article.content, 90)}
                      </div>
                      <div className="card-cta mt-auto flex lg:flex-row xs:flex-col gap-4 items-center pb-[32px]">
                        <p
                          style={{ backgroundColor: `${article.category_color}` }}
                          className="font-normal lg:text-sm xs:text-xs text-white flex px-4 py-1 content-center items-center gap-3 rounded-3xl"
                        >
                          {article.category_name}
                        </p>
                        <p className="link-txt flex items-start gap-1">
                          <span className="lg:text-base xs:text-sm">
                            {" "}
                            Baca Selengkapnya{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex flex-wrap justify-center gap-6">
              {sortArticles.map((article) => (
                <a
                  href={"/article/" + article.id}
                  key={article.id}
                  onClick={scrollToTop}
                  className="card-art bg-white rounded-2xl lg:gap-6 xs:gap-4 flex flex-col overflow-hidden lg:pb-[32px] relative border-[2px] border-neutral-600 shadow-none transition-all duration-300 ease-in-out hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[8px_8px_0px_0px_rgba(51,65,81,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                >
                  <div
                    className="card-img bg-cover"
                    style={{ backgroundImage: `url(${article.image_heading})` }}
                  ></div>
                  <div className="card-content flex px-6 flex-col gap-4">
                    <p className="font-bold text-base">
                      {extractAndLimitContent(article.title, 20)}
                    </p>
                    <div className="font-normal text-sm">
                      {extractAndLimitContent(article.content, 160)}
                    </div>
                    <div className="card-cta flex lg:flex-row xs:flex-col gap-4 items-center">
                      <p
                        style={{ backgroundColor: `${article.category_color}` }}
                        className="font-normal text-white lg:text-sm xs:text-xs flex px-4 py-1 content-center items-center gap-3 rounded-3xl"
                      >
                        {article.category_name}
                      </p>
                      <p className="link-txt flex items-start gap-1">
                        <span className="lg:text-base xs:text-sm">
                          {" "}
                          Baca Selengkapnya{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center w-full -mt-10">
          <button
            onClick={() => {
              navigate("/article");
              scrollToTop();
            }}
            className=" bg-primary-1 hover:bg-primary-2 lg:px-4 lg:py-3 xs:px-3 xs:py-3 rounded-lg flex lg:hidden"
          >
            <p className="text-white lg:text-base xs:text-sm font-semibold">
              {" "}
              View More{" "}
            </p>
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" inline ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.749 13.3037L3.24926 13.3037L3.24926 11.8037L20.749 11.8037L20.749 13.3037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.8037C16.4718 11.8037 13.5894 14.9059 13.5894 18.2138L13.5894 18.9638L15.0894 18.9638L15.0894 18.2138C15.0894 15.7022 17.332 13.3037 19.9994 13.3037L20.7494 13.3037L20.7494 11.8037L19.9994 11.8037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 13.3037C16.4718 13.3037 13.5894 10.2016 13.5894 6.89366L13.5894 6.14366L15.0894 6.14366L15.0894 6.89366C15.0894 9.40524 17.332 11.8037 19.9994 11.8037L20.7494 11.8037L20.7494 13.3037L19.9994 13.3037Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeArticle;