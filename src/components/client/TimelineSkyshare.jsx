import React from "react";
import TimeIcon from "@public/images/mascot-icons/Time Circle.png";
import "./TimelineSkyshare.css";
import mascot from "@public/images/mascot-icons/pose=1.webp";

function TimelineSkyshare({ parents, talent, mentor }) {
  const timelineImageSrc = parents?.gambar_timeline || talent?.gambar_timeline || mentor?.gambar_timeline;

  // Kamu bisa mengganti teks ini sesuai deskripsi yang kamu inginkan
  const mascotDescription = "Ikuti langkah-langkah penting dalam timeline acara kami untuk pengalaman terbaik!";

  return (
    <div className="timeline-section flex pt-14 lg:pt-24 flex-col items-center bg-background">
      <div className="timeline-container flex flex-col items-center gap-7 lg:gap-10">
        <div className="timeline-title flex items-center gap-2 lg:gap-4">
          <img className="size-6 lg:size-10" src={TimeIcon} alt="starts" />
          <h2 className="headline-2">Timeline Acara</h2>
        </div>
        {timelineImageSrc ? (
          <div className="timeline-content-wrapper flex items-center gap-4 lg:gap-0 lg:w-[1152px] w-[312px]">
            {/* Mascot berada di sebelah kiri, dengan deskripsi di bawahnya dan rotate hanya pada gambar */}
            <div className="mascot-container flex-col items-center justify-center lg:size-[240px] hidden lg:flex">
              <img
                src={mascot}
                alt="Mascot"
                className="mb-2 hover:rotate-[-30deg] transition-transform" // Rotate hanya pada gambar maskot
              />
              <p className="text-sm text-center text-gray-700 max-w-[200px]">
                {mascotDescription}
              </p>
            </div>

            {/* Timeline berada di sebelah kanan */}
            <div className="timeline-img-container flex-grow">
              <img
                className="timeline-img w-full lg:rounded-2xl rounded-md "
                src={timelineImageSrc}
                alt="timeline-acara"
              />
            </div>
          </div>
        ) : (
          <p className="no-image">No timeline image available</p>
        )}
      </div>
    </div>
  );
}

export default TimelineSkyshare;