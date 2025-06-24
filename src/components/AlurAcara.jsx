import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Work.png";
import TimeLine from "../../public/images/Alur Acara Ex.png";
import "./AlurAcara.css";
import mascot from "../../public/images/mascot-icons/pose=5.png";

function AlurAcara({ parents, talent, mentor }) {
  const timelineImageSrc =
    parents?.gambar_alur_acara || talent?.gambar_alur_acara || mentor?.gambar_alur_acara;

  const mascotDescription = "Jelajahi setiap langkahnya untuk memahami prosesnya dengan lebih baik.";

  return (
    <div className="alur-section flex pt-14 lg:pt-24 flex-col items-center bg-background ">
      <div className="alur-container flex flex-col items-center gap-7 lg:gap-10 lg:w-[1152px]">
        <div className="alur-title flex items-center gap-2 lg:gap-4">
          <img className="size-6 lg:size-10" src={WorkIcon} alt="starts" />
          <h2 className="headline-2">Alur Acara</h2>
        </div>
        {timelineImageSrc ? (
          <div className="timeline-content-wrapper flex items-center gap-4 lg:gap-0 lg:w-[1152px]">
            <div className="timeline-img-container flex-grow">
              <img
                className="timeline-img w-full lg:rounded-2xl rounded-md"
                src={timelineImageSrc}
                alt="timeline-acara"
              />
            </div>
            <div className="mascot-container flex-col items-center justify-center lg:size-[240px] hidden lg:flex">
              <img
                src={mascot}
                alt="Mascot"
                className="mb-2 hover:rotate-[30deg] transition-transform" 
              />
              <p className="text-sm text-center text-gray-700 max-w-[200px]">
                {mascotDescription}
              </p>
            </div>
          </div>
        ) : (
          <p className="no-image">No timeline image available</p>
        )}
      </div>
    </div>
  );
}

export default AlurAcara;