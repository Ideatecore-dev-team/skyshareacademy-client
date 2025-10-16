import React from "react";
import ProgramImage1 from "@public/images/banner/circle-time.webp";
import ProgramImage2 from "@public/images/banner/sport-time.webp";
import ProgramImage3 from "@public/images/banner/training.webp";
import ProgramImage4 from "@public/images/banner/fum.webp";
import ProgramImage5 from "@public/images/banner/homvis.webp";

import ProgramImage6 from "@public/images/banner/studex.webp";
import ProgramImage7 from "@public/images/banner/take-a-walk-together.webp";
import ProgramImage8 from "@public/images/banner/soul-of-charge.webp";
import ProgramImage9 from "@public/images/banner/experential-learning.webp";
import ProgramImage10 from "@public/images/banner/personal-approach.webp";

import ProgramImage11 from "@public/images/banner/catch-wisdom.webp";
import ProgramImage12 from "@public/images/banner/sharing-elevate.webp";
import ProgramImage13 from "@public/images/banner/mentor-and-parents-conference.webp";


import { motion } from "framer-motion";

export const OurProgramDropdownContent = ({ programId }) => {
  const programDetails = {

    "Circle Time": {
      image: ProgramImage1,
      name: "Circle Time",
      description: "Kegiatan kelompok mingguan untuk membangun pemahaman materi.",
      caption1:
        "Circle Time adalah kegiatan yang dilakukan secara berkelompok dengan tujuan membangun pemahaman atau konsep mengenai suatu materi. Sesi ini diadakan seminggu sekali sesuai kesepakatan bersama. Dalam kegiatan ini, peserta diajak untuk berdiskusi, berbagi pandangan, dan menggali topik bersama dalam suasana yang santai dan suportif.",
      caption2:
        "Melalui pendekatan teman sebaya, Circle Time memfasilitasi pembelajaran aktif dan partisipatif, di mana setiap individu memiliki kesempatan untuk berkontribusi. Ini membantu mengoptimalkan Multiple Intelligence dan The 7 essential life skills yang dimiliki setiap talenta, menciptakan lingkungan belajar yang dinamis dan efektif.",
    },
    "Sport Time": {
      image: ProgramImage2,
      name: "Sport Time",
      description: "Sesi olahraga rutin bulanan untuk menjaga kebugaran dan kebersamaan.",
      caption1:
        "Sport Time adalah kegiatan berolahraga secara rutin bersama yang dilaksanakan sebulan sekali. Program ini dirancang untuk menjaga kebugaran fisik dan membangun kekompakan antar anggota, serta menjadi sarana rekreasi yang menyegarkan setelah berbagai kegiatan belajar.",
      caption2:
        "Selain manfaat fisik, Sport Time juga memperkuat bonding antar peserta melalui aktivitas bersama yang menyenangkan. Ini merupakan salah satu dari 13 program unggulan Skyshare Academy yang membantu mengoptimalkan Multiple Intelligence dan The 7 essential life skills, khususnya dalam aspek kinestetik dan interpersonal.",
    },
    "Training": {
      image: ProgramImage3,
      name: "Training",
      description: "Pelatihan untuk meningkatkan kapasitas softskill dan hardskill.",
      caption1:
        "Program Training adalah pelatihan yang diberikan kepada member untuk meningkatkan kapasitas softskill dan hardskill mereka. Kegiatan ini diadakan minimal setahun sekali, dengan materi pelatihan yang disesuaikan untuk relevansi dengan perkembangan zaman.",
      caption2:
        "Pelatihan ini tidak hanya memberikan pengetahuan teknis, tetapi juga memperkuat karakter dan kompetensi yang dibutuhkan untuk menghadapi tantangan. Ini adalah bagian penting dari upaya Skyshare Academy untuk mengoptimalkan Multiple Intelligence dan The 7 essential life skills, mempersiapkan talenta menjadi individu yang berkualitas dan berdaya saing tinggi.",
    },
    "Fill Your Mind": {
      image: ProgramImage4,
      name: "Fill Your Mind",
      description: "Seminar atau talkshow untuk memperluas wawasan dan cakrawala berpikir.",
      caption1:
        "Fill Your Mind (FUM) adalah kegiatan mengikuti seminar atau talkshow dengan tema pengembangan diri. Program ini diselenggarakan minimal setahun sekali, bertujuan untuk memperluas wawasan dan cakrawala berpikir member.",
      caption2:
        "Melalui interaksi dalam sesi-sesi ini, peserta didorong untuk berpikir kritis, mendapatkan perspektif baru, dan memicu ide-ide inovatif. Ini berkontribusi pada pengoptimalan Multiple Intelligence dan The 7 essential life skills, terutama dalam aspek kognitif dan sosial, menyiapkan mereka menjadi individu yang terinformasi dan berdaya.",
    },
    "Home Visit": {
      image: ProgramImage5,
      name: "Home Visit",
      description: "Kunjungan rutin ke rumah member untuk membangun bonding dan mengenal latar belakang.",
      caption1:
        "Home Visit adalah kegiatan circle time yang dilakukan secara berkala dari rumah ke rumah secara bergantian. Kegiatan ini dilaksanakan sebulan sekali dengan tujuan membangun bonding yang kuat, serta mengenal keluarga dan latar belakang member secara lebih mendalam.",
      caption2:
        "Pendekatan personal ini memungkinkan terciptanya suasana kekeluargaan yang erat, memperkuat dukungan sosial, dan memahami kebutuhan individu secara lebih mendalam. Ini sangat efektif dalam pembentukan citra diri positif, attitude, knowledge, dan spiritual, sejalan dengan upaya Skyshare Academy untuk mengoptimalkan Multiple Intelligence dan The 7 essential life skills.",
    },
    "Student Expedition": {
      image: ProgramImage6,
      name: "Student Expedition",
      description: "Program tahunan di alam bebas untuk melatih kemandirian dan kepemimpinan.",
      caption1:
        "Student Expedition, atau Leadership Survival Camp, adalah program tahunan yang dilakukan selama 3 hari 2 malam di alam bebas untuk seluruh member. Tujuan utamanya adalah membangun kecerdasan makna, naturalis, dan kinestetik, serta melatih kemandirian, tanggung jawab, kerja sama, dan kepemimpinan member.",
      caption2:
        "Melalui berbagai tantangan dan aktivitas di luar ruangan, program ini mendorong peserta untuk keluar dari zona nyaman, mengembangkan kemampuan adaptasi, dan memperkuat soft skills yang penting untuk kehidupan. Ini adalah salah satu dari 13 program unggulan Skyshare Academy yang secara efektif mengasah karakter dan potensi diri secara menyeluruh.",
    },
    "Take a Walk Together": {
      image: ProgramImage7,
      name: "Take a Walk Together",
      description: "Kegiatan rekreasi dan edukasi internal grup atau gabungan ke tempat wisata.",
      caption1:
        "Take a Walk Together adalah kegiatan rekreasi dan edukasi internal grup maupun gabungan untuk mengunjungi tempat wisata. Kegiatan ini dilaksanakan minimal setahun sekali, dirancang untuk memberikan pengalaman baru, memperluas wawasan, dan mempererat tali silaturahmi antar member dalam suasana yang santai.",
      caption2:
        "Selain aspek hiburan, kegiatan ini juga memiliki nilai edukasi yang tinggi, di mana peserta dapat belajar tentang budaya, sejarah, atau lingkungan sekitar tempat yang dikunjungi. Ini mendukung pengembangan Multiple Intelligence, terutama aspek naturalis dan interpersonal, serta memperkuat bonding dan support system antar talenta.",
    },
    "Soul of Charge": {
      image: ProgramImage8,
      name: "Soul of Charge",
      description: "Kegiatan peningkatan kondisi ruhiyah dan ibadah untuk melatih kecerdasan spiritual.",
      caption1:
        "Soul of Charge adalah kegiatan untuk meningkatkan kondisi ruhiyah dan ibadah dalam rangka melatih kecerdasan spiritual. Program ini dilaksanakan minimal setahun sekali, mencakup berbagai bentuk pembinaan spiritual yang dirancang untuk memperkuat fondasi keimanan dan nilai-nilai moral.",
      caption2:
        "Melalui program ini, peserta diajak untuk lebih mendalami aspek spiritualitas, menumbuhkan kebijaksanaan, dan mengembangkan kepribadian yang berlandaskan akhlak mulia. Ini adalah pilar penting dalam pembentukan karakter yang seimbang antara kecerdasan intelektual, emosional, dan spiritual, sesuai dengan visi Skyshare Academy.",
    },
    "Experiential Learning": {
      image: ProgramImage9,
      name: "Experiential Learning",
      description: "Penugasan untuk melatih manajemen diri, organisasi, dan kepekaan sosial.",
      caption1:
        "Experiential Learning adalah penugasan yang diberikan kepada masing-masing member ataupun grup untuk melatih manajemen diri, organisasi, dan kepekaan sosial. Kegiatan ini dilaksanakan setahun sekali, berfokus pada pembelajaran melalui pengalaman langsung, di mana peserta menerapkan teori dalam praktik nyata.",
      caption2:
        "Melalui proyek-proyek dan tugas-tugas yang relevan, anggota didorong untuk mengembangkan keterampilan pemecahan masalah, kerja sama tim, dan kepedulian terhadap lingkungan sekitar. Ini secara efektif mengoptimalkan Multiple Intelligence dan The 7 essential life skills, mempersiapkan talenta menjadi individu yang mandiri dan bertanggung jawab.",
    },
    "Personal Approach": {
      image: ProgramImage10,
      name: "Personal Approach",
      description: "Pendekatan pribadi mentor untuk membantu pembentukan karakter positif.",
      caption1:
        "Personal Approach adalah pendekatan pribadi dari mentor kepada member untuk membantu terbentuknya karakter positif yang dimilikinya. Kegiatan ini dilakukan minimal seminggu sekali, melalui bimbingan dan pendampingan yang personal dan mendalam.",
      caption2:
        "Melalui interaksi satu lawan satu, mentor dapat memahami kebutuhan, tantangan, dan potensi unik setiap member. Ini memungkinkan mentor memberikan arahan yang lebih spesifik dan efektif dalam membentuk citra diri positif, attitude, knowledge, dan spiritual, sesuai dengan pendekatan Mentoring Project Harvard yang menjadi inspirasi Skyshare Academy.",
    },
    "Catch The Wisdom": {
      image: ProgramImage11,
      name: "Catch The Wisdom",
      description: "Mengunjungi tokoh berpengaruh untuk mendapatkan pengalaman dan ilmu.",
      caption1:
        "Catch The Wisdom adalah kegiatan di mana member mengunjungi tokoh yang memiliki pengaruh di lingkungan dan masyarakat. Tujuan dari program ini adalah agar member mendapatkan pengalaman dan ilmu dari tokoh tersebut, yang dilaksanakan minimal setahun sekali.",
      caption2:
        "Interaksi dengan para tokoh memungkinkan peserta untuk belajar dari pengalaman hidup, wawasan, dan nilai-nilai yang mereka pegang. Ini memperkaya perspektif member, memotivasi mereka untuk mencapai tujuan, dan membantu mengoptimalkan Multiple Intelligence, terutama dalam aspek interpersonal dan eksistensial.",
    },
    "Sharing To Elevate": {
      image: ProgramImage12,
      name: "Sharing To Elevate",
      description: "Studi banding dengan grup lain untuk berbagi wawasan dan pengalaman.",
      caption1:
        "Sharing To Elevate adalah kegiatan studi banding dengan grup lain yang dilaksanakan setahun sekali. Program ini dirancang untuk memfasilitasi pertukaran ide, wawasan, dan pengalaman antar kelompok, sehingga setiap pihak dapat belajar dari praktik terbaik satu sama lain.",
      caption2:
        "Melalui interaksi ini, peserta dapat memperluas jaringan, mendapatkan inspirasi baru, dan mengidentifikasi area untuk perbaikan dalam pengembangan diri dan program. Ini sangat efektif dalam mengoptimalkan Multiple Intelligence, khususnya dalam aspek interpersonal dan logis-matematis, serta membangun semangat kolaborasi.",
    },
    "Mentor & Parents Conference": {
      image: ProgramImage13,
      name: "Mentor & Parents Conference",
      description: "Pertemuan rutin tahunan manajemen, mentor, dan orang tua untuk evaluasi program.",
      caption1:
        "Mentor and Parents Conference adalah kegiatan rutin tahunan yang mempertemukan manajemen pengelola Skyshare Academy, mentor, dan juga orang tua. Agenda utama pertemuan ini adalah penyampaian laporan perkembangan member dan program yang telah dilakukan, serta diskusi terkait program lanjutan.",
      caption2:
        "Kegiatan ini memastikan adanya kesamaan visi dan misi antara seluruh pihak yang terlibat dalam pembentukan karakter dan pengembangan potensi talenta. Kolaborasi yang erat antara orang tua dan mentor merupakan kunci sukses program, mendukung self motivation dan keaktifan talents dalam mencapai hasil yang optimal.",
    },
  };

  const { image, name, description, caption1, caption2 } = programDetails[
    programId
  ] || {
    image: undefined,
    name: "Unknown Program",
    description: "Data tidak tersedia untuk program ini.",
    caption1: "lorem ipsum",
    caption2: "dolor sit ammet",
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
      className="w-full lg:w-[750px] lg:h-[250px] h-[127.333px] rounded-2xl 
      
        border-[1px] border-neutral-600 cursor-pointer
        shadow-[8px_8px_0px_0px_rgba(51,65,81,1)] transition-all duration-300 ease-in-out
        hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(51,65,81,1)]"
      alt="program-banner"
    />
    <div className="program-header-content flex flex-col items-start gap-4 self-stretch lg:w-[1152]">
      <p className="font-bold text-sm text-neutral-1">Talent Activity</p>
      <div className="program-heading-desc flex flex-col gap-3 items-start self-stretch ">
        <h2 className=" text-2xl lg:text-[32px] font-bold">
          {name}
        </h2>
        <p className="text-base text-neutral-2  text-justify">
          {description}
        </p>
      </div>
    </div>
  </div>
  <p className="text-base text-neutral-2  text-justify pt-6 lg:w-[1152px]">
    {caption1}
    <br />
    <br />
    {caption2}
  </p>
  </motion.div>
</div>
    
  );
};
