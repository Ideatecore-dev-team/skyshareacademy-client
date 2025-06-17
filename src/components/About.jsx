// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Impor motion dan AnimatePresence
import aboutUsPhotos1 from "../../public/images/Walk-Together.png";
import aboutUsPhotos2 from "../../public/images/Home-Visit.jpeg";
import aboutUsPhotos3 from "../../public/images/Sport-Time.jpeg";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";

export const About = () => {
  const photos = [aboutUsPhotos1, aboutUsPhotos2, aboutUsPhotos3];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  // Varian animasi untuk foto
  const photoVariants = {
    initial: { opacity: 0, x: 50 }, // Mulai dari transparan dan sedikit ke kanan
    animate: { opacity: 1, x: 0 }, // Muncul penuh dan kembali ke posisi
    exit: { opacity: 0, x: -50 }, // Menghilang transparan dan sedikit ke kiri
  };

  return (
    <div className="about-us-section flex flex-col items-start ">
      <div className="about-us-container border-b-[1px] border-neutral-3 mx-auto flex flex-col w-[312px] lg:w-[1152px] xs:items-start">
        <div className="about-us-detail flex flex-col lg:flex-row-reverse items-start lg:items-center lg:justify-between gap-12 py-12">

          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhotoIndex} 
              src={photos[currentPhotoIndex]}
              alt="About Us Photo"
              className="lg:w-[520px] lg:h-[260px] h-[234px] content-center items-center rounded-md object-cover"
              variants={photoVariants} 
              initial="initial" 
              animate="animate"
              exit="exit" 
              transition={{ duration: 0.8 }} 
            />
          </AnimatePresence>
          <div className="mascot-container absolute">
            <motion.img
              className="relative size-24 lg:size-[200px] left-[-400px] top-[60px] lg:block hidden hover:-translate-x-10 transition-transform"
              src={Mascot1}
              alt="mascot1"
            />
          </div>
          <div className="heading-and-desc lg:w-[520px] flex flex-col items-start gap-4">
            <h2 className="font-lato text-2xl lg:text-[32px] font-bold leading-normal text-neutral-1">
              Apa itu Skyshare Academy Indonesia?
            </h2>
            <span className="font-lato text-justify text-neutral-2 text-base font-normal">
              Skyshare Academy Indonesia merupakan lembaga pengembangan potensi
              diri dan kelas karakter minat bakat yang terinspirasi dari
              Mentoring Project di Harvard T.H. Chan School of Public Health
              Boston, Amerika Serikat sejak tahun 1997. Lembaga ini ditujukan
              untuk remaja dan pemuda (pelajar dan mahasiswa) yang ingin
              menjadikan dirinya lebih baik, berkualitas, dan berdaya bagi
              bangsa dan negara. <br /> <br /> Dikembangkan di Tangerang Selatan,
              Banten sejak tahun 2006, program ini telah menjadi salah satu
              alternatif kegiatan remaja dan pemuda masa kini yang terbukti
              efektif untuk membentuk citra diri positif,{" "}
              <strong>attitude</strong>, <strong> knowledge</strong>, dan{" "}
              <strong>spiritual</strong>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};