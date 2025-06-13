/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import ArrowOrange from "/images/mascot-icons/arrow-orange.png";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./ArticleList.css";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import NotFound from "/images/mascot-icons/mascot-404.png";

function ArticleList({ searchTerm, articles, sortOrder, selectedCategories }) {
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const articleListContainerRef = useRef(null);

  // Fungsi untuk scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Membuat efek scroll menjadi lebih halus
    });
  };

  const filterAndSortArticles = () => {
    let filteredArticles = articles;

    // Filter berdasarkan kategori
    if (selectedCategories) {
      filteredArticles = filteredArticles.filter(
        (article) => article.category_name === selectedCategories.category_name
      );
    }

    // Filter berdasarkan kata kunci pencarian
    if (searchTerm) {
      filteredArticles = filteredArticles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Urutkan artikel berdasarkan sortOrder
    if (sortOrder) {
      filteredArticles.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        if (sortOrder === "newest") {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
    }
    return filteredArticles;
  };

  const handleLoadMore = () => {
    setVisibleArticlesCount(articlesPerPage);
    // scrollToTop(); // Scroll ke atas setelah "Load More" diklik
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    articleListContainerRef.current.scrollIntoView({ behavior: "smooth" });
    scrollToTop(); // Scroll ke atas setelah pindah halaman
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    articleListContainerRef.current.scrollIntoView({ behavior: "smooth" });
    scrollToTop(); // Scroll ke atas setelah pindah halaman
  };

  const filteredArticles = filterAndSortArticles();

  const extractAndLimitContent = (htmlContent, limit) => {
    // 1. Hapus tag HTML
    let strippedContent = htmlContent.replace(/<[^>]*>/g, "");
    // 2. Hapus karakter &nbsp; (non-breaking space)
    strippedContent = strippedContent.replace(/&nbsp;/g, "");
    // 3. Hapus spasi berlebih di awal atau akhir
    strippedContent = strippedContent.trim();
    // 4. Batasi panjang karakter
    if (strippedContent.length > limit) {
      return strippedContent.substring(0, limit) + "...";
    }
    return strippedContent;
  };

  // menentukan article yang di render berdasarkan current page and visible count
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex =
    currentPage === 1
      ? Math.min(visibleArticlesCount, filteredArticles.length)
      : startIndex + articlesPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, endIndex);

  const showLoadMore =
    currentPage === 1 &&
    filteredArticles.length > visibleArticlesCount &&
    visibleArticlesCount < articlesPerPage;

  return (
    <div className="article-list-section bg-background flex flex-col items-center self-stretch py-14 lg:pb-24 lg:pt-12">
      <div
        className="article-lists-container flex flex-col items-center gap-7 lg:gap-10"
        ref={articleListContainerRef}
      >
        {searchTerm || selectedCategories || sortOrder ? (
          <h1 className="headline-1 flex gap-2 items-center justify-center">
            <BsSearch /> <span className="ml-4">Hasil Pencarian</span>
          </h1>
        ) : (
          <h1 className="headline-1">Artikel Terbaru</h1>
        )}

        {filteredArticles.length === 0 && (
          <div className="not-found flex flex-col items-center gap-4">
            <img src={NotFound} alt="not found" />
            <div className="notfound-content flex flex-col items-center gap-2">
              <h4 className="headline-4 text-black">
                {" "}
                Hmm, Sepertinya artikel yang kamu cari tidak tersedia{" "}
              </h4>
              <p className="paragraph text-black"> Coba masukkan kata kunci lain </p>
            </div>
          </div>
        )}

        {filteredArticles.length > 0 && (
          <div className="article-list flex flex-col items-start gap-4 lg:gap-6">
            {displayedArticles.map((article, index) => (
              // Animasi untuk Article Card
              <Link
                to={`/article/${article.id}`}
                key={index}
                onClick={scrollToTop} // Tambahkan ini agar scroll ke atas saat artikel diklik
                className="
                article-card 
                lg:h-auto 
                flex flex-col lg:flex-row 
                bg-white rounded-2xl 
                pb-8 lg:pr-6 lg:pb-0 
                gap-4 lg:gap-6 
                overflow-hidden 
                relative 
                border-[2px] border-neutral-600 
                shadow-none 
                
                // Efek transisi dan hover hanya berlaku di layar besar (lg dan di atasnya)
                lg:transition-all lg:duration-300 lg:ease-in-out 
                lg:hover:-translate-x-[4px] lg:hover:-translate-y-[4px] 
                lg:hover:shadow-[8px_8px_0px_0px_rgba(51,65,81,1)] 
                
                // Efek active (saat diklik/tekan) hanya berlaku di layar besar (lg dan di atasnya)
                lg:active:translate-x-[4px] lg:active:translate-y-[4px] 
                lg:active:shadow-none
                "
              >
                <div
                  className="article-list-img bg-cover lg:rounded-2xl lg:h-auto h-[190px]"
                  style={{ backgroundImage: `url(${article.image_heading})` }}
                ></div>
                <div className="article-content w-full lg:w-3/4 flex flex-col py-0 px-6 lg:py-6 lg:px-0 items-start gap-4">
                  <h4 className="headline-4">{article.title}</h4>
                  <div className="article-desc">
                    <p className="paragraph">
                      {extractAndLimitContent(article.content, 150)}
                    </p>
                  </div>
                  <div className="article-cta flex flex-col lg:flex-row items-center mx-auto gap-2 lg:gap-4 w-full">
                    <p
                      style={{ backgroundColor: `${article.category_color}` }}
                      className="px-3 py-1 text-white w-auto text-center rounded-full"
                    >
                      {article.category_name}
                    </p>
                    <p className="paragraph underline text-primary-1 flex flex-row items-center justify-center">
                      Baca Selengkapnya{" "}
                      <img className="size-4 lg:size-6" src={ArrowOrange} alt="" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {showLoadMore && (
          <button
            onClick={handleLoadMore}
            className="load-more-button flex items-center content-center gap-2 px-5 py-4 bg-primary-1 text-white rounded-lg relative border-[2px] border-primary-1 shadow-none transition-all duration-300 ease-in-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.7)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            <p>Load More</p>
            {/* <FaArrowRight /> */}
          </button>
        )}

        {/* Bagian navigasi halaman (pagination) yang saat ini dikomentari */}
        {/* {showPagination && (
          <div className="pagination-buttons flex justify-between w-full px-4">
            {currentPage > 1 && (
              <button
                onClick={handlePreviousPage}
                className="previous-button flex items-center content-center gap-2 px-4 py-2 bg-primary-1 text-white rounded-full relative border-[2px] border-primary-1 shadow-none transition-all duration-300 ease-in-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.7)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <p>Previous</p>
                <FaArrowLeft />
              </button>
            )}
            {endIndex < filteredArticles.length && (
              <button
                onClick={handleNextPage}
                className="next-button flex items-center content-center gap-2 px-4 py-2 bg-primary-1 text-white rounded-full relative border-[2px] border-primary-1 shadow-none transition-all duration-300 ease-in-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.7)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <p>Next</p>
                <FaArrowRight />
              </button>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default ArticleList;