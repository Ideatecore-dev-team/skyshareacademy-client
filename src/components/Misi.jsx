import React from "react";
import Icon1 from "../../public/images/mascot-icons/circle-1.png";
import Icon2 from "../../public/images/mascot-icons/circle-2.png";
import Icon3 from "../../public/images/mascot-icons/circle.png";

import Mascot1 from "../../public/images/mascot-icons/pose=5.png";


function Misi() {
  const cardContent = [
    {
      icon: Icon1,
      title: "Mendorong pengembangan potensi diri remaja",
      description:
        "Mendorong pengembangan potensi diri remaja melalui program-program pendidikan dan pelatihan yang inovatif dan berkelanjutan. ",
    },
    {
      icon: Icon2,
      title: "Membangun kerja sama yang erat",
      description:
        "Membangun kerja sama yang erat dengan orang tua, pemerintah dan berbagai pihak terkait untuk menciptakan ekosistem pembinaan karakter yang holistik dan inklusif. ",
    },
    {
      icon: Icon3,
      title: "Memfasilitasi kegiatan yang menginspirasi kreativitas",
      description:
        "Memfasilitasi kegiatan yang menginspirasi kreativitas, terbangunnya integritas, kemandirian, dan leadership di kalangan remaja. ",
    },
  ];

  return (
    <>
      <div className="misi pt-14 lg:py-14 flex flex-col items-center self-stretch lg:w-[1152px] w-[312px] mx-auto lg:border-b-[1px] border-neutral-3 ">
        <div className="misi-content flex flex-col gap-[24px] lg:w-[1152px] xs:w-[312px]">
          <h1 className="headline-1 text-center text-black font-bold">Misi</h1>
          <div className="mascot-container absolute">
                <img
                    className="relative size-24 lg:size-[300px] left-[852px] top-[128px] lg:block hidden hover:rotate-12 transition-transform" // ini kaya selancar
                    // className="relative size-24 lg:size-[400px] left-[752px] top-[25px]" // ini gada kaki

                    src={Mascot1}
                    alt="mascot1"
                />
          </div>

            {cardContent.map((item, index) => (
              <div
                className="misi-point lg:w-[800px] lg:h-full w-[312px] h-[100%] flex gap-6 items-center container p-5 "
                key={index}
              >
                <img className="icon size-10 lg:size-[80px]" src={item.icon} alt="icon" />
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