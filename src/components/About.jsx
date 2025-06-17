// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutUsPhotos from "../../public/images/Walk-Together.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";

export const About = () => {
  return (
    <div className=" about-us-section flex flex-col items-start ">
      <div className=" about-us-container border-b-[1px] border-neutral-3 mx-auto flex flex-col w-[312px] lg:w-[1152px] xs:items-start">
        <div className="about-us-detail flex flex-col lg:flex-row-reverse items-start lg:items-center lg:justify-between gap-12 py-12">
          <img
            src={aboutUsPhotos}
            className=" lg:w-[520px] lg:h-[260px] content-center items-center rounded-md"
          />
            <div className="mascot-container absolute">
                <img
                    className="relative size-24 lg:size-[200px] left-[-400px] top-[60px] lg:block hidden hover:-translate-x-10 transition-transform" // ini kaya selancar
                    // className="relative size-24 lg:size-[400px] left-[752px] top-[25px]" // ini gada kaki

                    src={Mascot1}
                    alt="mascot1"
                />
            </div>
          <div className="heading-and-desc lg:w-[520px] flex flex-col items-start gap-4">
            {/* <h5 className="text-neutral-1 font-lato text-sm lg:text-base font-bold leading-normal">
            </h5> */}
            <h2 className="font-lato text-2xl lg:text-[32px] font-bold leading-normal text-neutral-1">
              Apa itu Skyshare Academy Indonesia?
            </h2>
            <span className="font-lato text-justify text-neutral-2 text-base font-normal">
              Skyshare Academy Indonesia merupakan lembaga pengembangan potensi
              diri dan kelas karakter minat bakat yang terinspirasi dari
              Mentoring Project di Harvard T.H. Chan School of Public Health
              Boston, Amerika Serikat sejak tahun 1997. Lembaga ini
              ditujukan untuk remaja dan pemuda (pelajar dan mahasiswa) yang
              ingin menjadikan dirinya lebih baik, berkualitas, dan berdaya bagi
              bangsa dan negara.
              <br />
              <br />
              Dikembangkan di Tangerang Selatan, Banten sejak tahun 2006,
              program ini telah menjadi salah satu alternatif kegiatan remaja
              dan pemuda masa kini yang terbukti efektif untuk membentuk citra
              diri positif,   <strong>attitude</strong>,  <strong> knowledge</strong>, dan <strong>spiritual</strong>.

            </span>
            {/* <a
              href="#our-program"
              className="text-brand-red font-lato text-[14px] font-bold underline decoration-solid decoration-auto underline-offset-auto"
            >
              Program kami
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};