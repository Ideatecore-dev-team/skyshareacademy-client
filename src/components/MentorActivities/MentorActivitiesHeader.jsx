import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { GiUpgrade, GiTeacher } from "react-icons/gi"; 

// Import Swiper React components
import "swiper/css";
import "swiper/css/autoplay";

import Mascot1 from "../../../public/images/mascot-icons/pose=6.png";

export const MentorActivitiesHeader = () => {
    const OurProgramData = [
        {
            program: "UpMe Series (Upgrading Mentor)",
            icon: <GiUpgrade size={32} className="text-white" />,
        },
        {
            program: "TeachMe Series (Teaching Mentor)",
            icon: <GiTeacher size={32} className="text-white" />,
        },
        {
            program: "CoachMe Series (Coaching Mentor)",
            icon: <MdHealthAndSafety size={32} className="text-white" />,
        },
    ];

    return (
        <div className="our-program-section flex items-start justify-center lg:pt-[120px] pt-[60px] bg-background">
            <div className="our-program-container w-[312px] xs:mx-6 lg:w-[1152px] flex flex-col items-center border-b-[1px] border-neutral-3">
                <div className="desc flex lg:w-[550px] pt-12 flex-col items-start gap-4 self-stretch">
                    <h5 className="text-sm lg:text-base font-bold text-primary">MENTOR ACTIVITIES</h5>
                    <div className="heading-desc flex flex-col items-start gap-3 self-stretch">
                        <h2 className="text-2xl lg:text-[32px] text-left font-bold text-primary">
                            Program Unggulan Mentor Academy untuk Meningkatkan Kapasitas Pembimbing
                        </h2>
                        <p className="text-base text-justify text-neutral-2">
                            Mentor Academy merupakan rangkaian kegiatan yang dilakukan untuk meningkatkan kapabilitas (capacity and ability) mentor baik soft skill maupun hard skill agar memilliki kemampuan 3K+1P (Komitmen, Konsisten, Kreatif dan ber-Pengalaman).
                        </p>
                    </div>
                    <div className="mascot-container absolute right-[194px] top-[px] ">
                        <img
                            className="relative size-24 lg:size-[300px] lg:block hidden hover:animate-ping transition-transform"
                            src={Mascot1}
                            alt="mascot1"
                        />
                    </div>
                </div>
                <div className="programs lg:pb-12 pb-6 flex flex-col lg:flex-row lg:flex-wrap items-start lg:content-start lg:justify-between xs:gap-8 lg:gap-y-8 self-stretch">
                    {OurProgramData.map((programData, index) => (
                        <div key={index} className="lg:w-[350px] flex flex-col items-start gap-2 lg:gap-3 self-stretch pt-[20px]">
                            <div className="program-name flex gap-3 self-stretch items-center">
                                <div className="icon flex p-3 items-center justify-center rounded-lg bg-primary-1 border border-neutral-900">
                                    {programData.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary">{programData.program}</h4>
                            </div>
                            {/* <p className="text-base text-neutral-2">{programData.desc}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};