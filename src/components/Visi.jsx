import React from "react";
import { MdSportsSoccer, MdOutlineAccessTime, MdSchool, MdHome, MdOutlineLightbulb, MdEmojiEvents, MdPeople, MdFamilyRestroom, MdStars, MdNature, MdSelfImprovement, MdOutlineConnectWithoutContact, MdHandshake, MdBuild } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Visi() {
  const OurValueData = [
    {
      program: "Pengembangan Potensi Diri",
      desc: "Mendorong pengembangan potensi diri remaja melalui program-program pendidikan dan pelatihan yang inovatif dan berkelanjutan.",
      icon: <MdSelfImprovement size={32} className="text-white" />,
    },
    {
      program: "Pembentukan Karakter Positif",
      desc: "Skyshare Academy bertujuan untuk membentuk citra diri positif, attitude, knowledge, dan spiritual pada remaja dan pemuda.",
      icon: <MdStars size={32} className="text-white" />,
    },
    {
      program: "Integritas dan Daya Saing Tinggi",
      desc: "Menciptakan generasi penerus bangsa yang berintegritas dan berdaya saing tinggi.",
      icon: <MdBuild size={32} className="text-white" />,
    },
    {
      program: "Kerja Sama dan Dukungan",
      desc: "Mengandalkan motivasi diri peserta, keaktifan, dan kerja sama orang tua sebagai sistem pendukung yang krusial.",
      icon: <MdHandshake size={32} className="text-white" />,
    },
    {
      program: "Berbagi Ilmu dan Manfaat",
      desc: "Menekankan pentingnya berbagi ilmu dan memberikan manfaat bagi banyak orang, khususnya dalam pembentukan akhlak.",
      icon: <MdOutlineConnectWithoutContact size={32} className="text-white" />,
    },
  ];

  return (
    <>
      <div className="visi flex flex-col items-center self-stretch pt-14 px-6 lg:px-0 lg:pt-14">
        <div className="visi-content lg:w-[1152px] w-[312px] flex flex-col items-center gap-7 lg:gap-10">
          <h1 className="headline-1 text-center text-black">Visi</h1>
          <p className=" text-sm lg:text-base font-normal text-center">
            Menjadi lembaga pengembangan diri dan karakter remaja yang progresif, inovatif, bersinergi mendukung pemerintah untuk menciptakan generasi penerus bangsa yang berintegritas dan berdaya saing tinggi.
          </p>
        </div>
        <div className="programs lg:w-[1152px] w-[312px] overflow-hidden lg:pt-[52px] pt-[40px]">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: false,
            }}
            loop={true}
            speed={3000}
            modules={[Autoplay]}
            className="mySwiper !pb-[24px]"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {OurValueData.map((programData, index) => (
              <SwiperSlide key={index}>
                <div className="program-card bg-white rounded-lg py-2 pt-[24px] flex flex-col items-center text-center gap-4 h-full border border-neutral-900 relative lg:w-[250px] mx-auto xs:h-[100px]">
                  <div className="icon-container absolute -top-8 left-1/2 -translate-x-1/2 flex p-3 items-center justify-center rounded-lg bg-primary-1 w-16 h-16  border border-neutral-900">
                    {programData.icon}
                  </div>
                  <h4 className="text-[14px] leading-[24px] font-bold text-gray-800 mt-4">
                    {programData.program}
                  </h4>
                  {/* <p className="text-base text-gray-600">
                    {programData.desc}
                  </p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Visi;