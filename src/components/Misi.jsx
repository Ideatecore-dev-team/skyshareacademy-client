import React from "react"; 
// Hapus import gambar ikon yang lama
// import Icon1 from "../../public/images/mascot-icons/circle-1.png"; 
// import Icon2 from "../../public/images/mascot-icons/circle-2.png"; 
// import Icon3 from "../../public/images/mascot-icons/circle.png"; 

// Import ikon dari React Icons (misalnya dari Font Awesome)
import { FaGraduationCap, FaHandshake, FaLightbulb, FaBookOpen } from "react-icons/fa"; 
// Anda bisa mencari dan memilih ikon lain di situs React Icons: https://react-icons.github.io/react-icons/

import Mascot1 from "../../public/images/mascot-icons/pose=5.png"; 

function Misi() { 
  const cardContent = [ 
    { 
      // Gunakan komponen ikon langsung
      icon: <FaGraduationCap className="text-white" size={32} />, // Ukuran dan warna bisa disesuaikan
      title: "Mendorong Pengembangan Potensi Diri Remaja", 
      description: "Melalui program-program pendidikan dan pelatihan yang inovatif dan berkelanjutan.", 
    }, 
    { 
      icon: <FaHandshake className="text-white" size={32} />, 
      title: "Membangun Kerja Sama yang Erat", 
      description: "Dengan orang tua, pemerintah, dan berbagai pihak terkait untuk menciptakan ekosistem pembinaan karakter yang holistik dan inklusif.", 
    }, 
    { 
      icon: <FaLightbulb className="text-white" size={32} />, 
      title: "Memfasilitasi Kegiatan yang Menginspirasi", 
      description: "Menginspirasi kreativitas, terbangunnya integritas, kemandirian, dan leadership di kalangan remaja.", 
    }, 
    { 
      icon: <FaBookOpen className="text-white" size={32} />, 
      title: "Menanamkan Nilai-nilai Moral dan Etika Kuat", 
      description: "Melalui pendekatan yang relevan dan adaptif terhadap perkembangan zaman.", 
    }, 
  ]; 

  return ( 
    <> 
      <div className="misi pt-14 lg:py-14 flex flex-col items-center self-stretch lg:w-[1152px] w-[312px] mx-auto lg:border-b-[1px] border-neutral-3 "> 
        <div className="misi-content flex flex-col gap-[24px] lg:w-[1152px] xs:w-[312px]"> 
          <h1 className="headline-1 text-center text-black font-bold">Misi</h1> 
          <div className="mascot-container absolute"> 
            <img 
              className="relative size-24 lg:size-[300px] left-[852px] top-[128px] lg:block hidden hover:rotate-12 transition-transform" 
              src={Mascot1} 
              alt="mascot1" 
            /> 
          </div> 
          {cardContent.map((item, index) => ( 
            <div 
              className="misi-point lg:w-[800px] lg:h-full w-[312px] h-[100%] flex gap-6 items-center container p-5 " 
              key={index} 
            > 
              {/* Render langsung komponen ikon */}
              <div className="icon size-[64px] flex items-center justify-center rounded-lg bg-primary-1 p-3">
                  {item.icon} 
              </div>
              
              <div className="misi-paragraph flex flex-col items-start gap-2 lg:gap-4 w-full"> 
                <h4 className=" text-base lg:text-lg font-semibold"> 
                  {" "}
                  {item.title}{" "} 
                </h4> 
                <p className="text-sm lg:text-base font-normal "> 
                  {" "}
                  {item.description}{" "} 
                </p> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </> 
  ); 
} 

export default Misi;