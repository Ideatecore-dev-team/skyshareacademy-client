import React from "react";
// import ProgramImage1 from "../../../public/images/banner/upme-series.png"; 
// import ProgramImage2 from "../../../public/images/banner/teachme-series.png"; 
// import ProgramImage3 from "../../../public/images/banner/coachme-series.png"; 

import ProgramImage1 from "@public/images/banner/circle-time.webp";
import ProgramImage2 from "@public/images/banner/sport-time.webp";
import ProgramImage3 from "@public/images/banner/training.webp";

import { motion } from "framer-motion";

export const MentorActivitiesDropdownContent = ({ programId }) => {
  const programDetails = {
    "UpMe Series": {
      image: ProgramImage1,
      name: "UpMe Series (Upgrading Mentor)",
      description: "Kegiatan peningkatan mutu, pengetahuan, dan keterampilan (hard skill & soft skill), serta ilmu manajemen diri dan pengelolaan kelompok mentoring bagi para KaMen.",
      caption1: "UpMe Series adalah kegiatan peningkatan mutu, pengetahuan, dan keterampilan (hard skill & soft skill) yang dirancang khusus untuk para Pembimbing (KaMen) di Skyshare Academy. Program ini bertujuan untuk meng-upgrade kapabilitas mentor agar kompatibel dengan Gen Z, Alpha & Beta.",
      caption2: "Selain itu, UpMe Series juga membekali mentor dengan ilmu manajemen diri dan pengelolaan kelompok mentoring, memastikan mereka memiliki kapabilitas sebagai seorang pendamping talents yang mumpuni.",
    },
    "TeachMe Series": {
      image: ProgramImage2,
      name: "TeachMe Series (Teaching Mentor)",
      description: "Kegiatan penambahan wawasan keislaman kepada para KaMen oleh seorang narasumber, mencakup aqidah, akhlak, ibadah, dan fiqih, dengan tujuan membentuk para KaMen yang memiliki Syakhsiyah Islamiyah dan Syakhsiyah Daiyah.",
      caption1: "TeachMe Series merupakan kegiatan yang berfokus pada penambahan wawasan keislaman kepada para Pembimbing (KaMen). Materi yang disampaikan mencakup aqidah, akhlak, ibadah, dan fiqih, disampaikan oleh narasumber yang kompeten.",
      caption2: "Tujuan utama dari seri ini adalah untuk memperoleh pemahaman Islam yang syamil, sehingga terbentuklah para KaMen yang memiliki Syakhsiyah Islamiyah (Kepribadian Islam) dan Syakhsiyah Daiyah (Kepribadian Dai), yang siap menjadi teladan bagi talents.",
    },
    "CoachMe Series": {
      image: ProgramImage3,
      name: "CoachMe Series (Coaching Clinic/Klinik Bimbingan Mentor)",
      description: "Pembimbingan singkat dalam bentuk pelatihan atau sesi perorangan untuk penguatan pengetahuan dan kecakapan di bidang tertentu, serta konsultasi tentang berbagai hal (pengaplikasian materi maupun permasalahan yang ditemui).",
      caption1: "CoachMe Series, atau Coaching Clinic/Klinik Bimbingan Mentor, merupakan pembimbingan singkat dalam bentuk pelatihan atau sesi perorangan. Program ini ditujukan untuk penguatan pengetahuan dan kecakapan di bidang tertentu yang relevan dengan peran mentor.",
      caption2: "Coaching Clinic juga berfungsi sebagai ajang untuk mengkonsultasikan berbagai hal, mulai dari pengaplikasian materi yang sudah didapatkan hingga permasalahan yang ditemui (termasuk masalah dengan member) selama sesi pembinaan kelas karakter berlangsung. Ini memastikan mentor selalu didukung dan terus berkembang.",
    },
  };

  const { image, name, description, caption1, caption2 } = programDetails[programId] || {
    image: undefined,
    name: "Program Tidak Ditemukan",
    description: "Data tidak tersedia untuk program ini.",
    caption1: "Silakan pilih program dari daftar di atas untuk melihat detailnya.",
    caption2: "",
  };

  return (
    <div className="program-content py-12 flex flex-col items-start self-stretch border-t-neutral-3 gap-[34px] lg:gap-[38px] lg:self-stretch text-neutral-1 ">
      <motion.div
        key={programId}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="program-header xs:gap-[34px] gap-[34px] flex flex-col lg:flex-row-reverse items-start lg:self-stretch lg:justify-between lg:w-[1152]">
          <img
            src={image}
            className="w-full lg:w-[750px] lg:h-[250px] h-[127.333px] rounded-2xl border-[1px] border-neutral-600 cursor-pointer shadow-[8px_8px_0px_0px_rgba(51,65,81,1)] transition-all duration-300 ease-in-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(51,65,81,1)]"
            alt="program-banner"
          />
          <div className="program-header-content flex flex-col items-start gap-4 self-stretch lg:w-[1152]">
            <p className="font-bold text-sm text-primary">Mentor Activities</p>
            <div className="program-heading-desc flex flex-col gap-3 items-start self-stretch ">
              <h2 className=" text-2xl lg:text-[32px] font-bold text-primary">
                {name}
              </h2>
              <p className="text-base text-neutral-2 text-justify">
                {description}
              </p>
            </div>
          </div>
        </div>
        <p className="text-base text-neutral-2 text-justify pt-6 lg:w-[1152px]">
          {caption1} <br /> <br /> {caption2}
        </p>
      </motion.div>
    </div>
  );
};