import React from "react";
// import "./Partner.css";
import Partner1 from "@public/images/partner/partner1.webp";
import Partner2 from "@public/images/partner/partner2.webp";
import Partner3 from "@public/images/partner/partner3.webp";
import Partner4 from "@public/images/partner/partner4.webp";
import Partner5 from "@public/images/partner/partner5.webp";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Partner() {
  const partners = [
    { id: 1, src: Partner1 },
    { id: 2, src: Partner2 },
    { id: 3, src: Partner3 },
    { id: 4, src: Partner4 },
    { id: 5, src: Partner5 },
    { id: 6, src: Partner3 },
  ];

  return (
    <>
      <div className="partner flex flex-col mx-auto lg:pb-12 lg:px-0 py-9 px-6 gap-gap10 ">
        <div className="partner-container flex flex-col items-center overflow-hidden lg:w-[1152px] w-[312px] mx-auto lg:gap-6 gap-4">
          <h2 className=" font-bold lg:text-3xl xs:text-2xl text-center">
            Mitra Kami
          </h2>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="mySwiper lg:w-[1152px] w-[312px]"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="logoplaceholder flex w-120 h-120 content-center items-center justify-center">
                  <img
                    src={partner.src}
                    alt="partnerlogo"
                    className="w-120 h-120 flex-shrink-0 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Partner;