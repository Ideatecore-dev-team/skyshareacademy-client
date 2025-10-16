import React from "react";
import { useNavigate } from "react-router-dom";
import mascot from "@public/images/mascot-icons/pose=5.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBuildingFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ButtonLink from "./ButtonLink";
import map from "../../assets/idmap.svg";


function OurImpact() {
    const navigate = useNavigate();
    const OurProgramData = [
        { 
            program: "provinsi", 
            number: 21, 
            icon: <FaMapMarkerAlt size={32} className="text-white" />, 
        },
        { 
            program: "Kabupaten/Kota", 
            number: 55, 
            icon: <BsBuildingFill size={32} className="text-white" />, 
        },
        { 
            program: "Sekolah", 
            number: 3, 
            icon: <IoMdSchool size={32} className="text-white" />, 
        },
    ];

    const mascotDescription = <span><strong>Sejak 2006</strong> bekerja, berkontribusi pada bangsa indonesia</span>;

    return (
        <>
            <div className="kelebihan-section flex xs:py-12 lg:pt-12 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-background">
                <div className="kelebihan-container flex w-[312px] lg:w-[1152px] lg:justify-between xs:flex-col items-center lg:gap-12 gap-[46px] xsflex-shrink-0">
                    <div className="video-container flex flex-col items-start gap-4 lg:gap-6 self-stretch lg:w-[1152px] w-[312px] lg:p-[0px]">
                        <h2 className="text-2xl lg:text-[30px] text-left font-bold text-primary mx-auto">
                            Jangkauan Kami
                        </h2>
                        <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-8 lg:w-full">
                            <div className="timeline-content-wrapper flex items-center gap-4 lg:gap-0 lg:w-[1152px]">
                                <div className="timeline-img-container flex-grow container">
                                    <img className="timeline-img w-full lg:rounded-2xl rounded-md" src={map} alt="map indonesia" />
                                </div>
                                <div className="mascot-container flex-col items-center justify-center lg:size-[240px] hidden lg:flex">
                                    <img src={mascot} alt="Mascot" className="mb-2 hover:animate-ping transition-transform" />
                                    <p className="text-sm text-center text-gray-700 max-w-[200px]">
                                        {mascotDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="programs lg:pb-0 pb-6 flex flex-col lg:flex-row lg:flex-wrap items-start lg:content-start lg:justify-between xs:gap-8 lg:gap-y-8 self-stretch">
                            {OurProgramData.map((programData, index) => {
                                const { ref, inView } = useInView({
                                    triggerOnce: true,
                                    threshold: 0.1,
                                });
                                return (
                                    <div key={index} ref={ref} className="lg:w-[350px] flex flex-col items-start gap-2 lg:gap-3 self-stretch pt-[20px]">
                                        <div className="program-header flex gap-3 self-stretch items-center">
                                            <div className="icon flex p-3 items-center justify-center rounded-lg bg-primary-1 hover:bg-primary-2 border border-neutral-900">
                                                {programData.icon}
                                            </div>
                                            <h1 className="text-4xl font-bold text-primary">
                                                {inView && (
                                                    <CountUp start={0} end={programData.number} duration={2.5} separator="" />
                                                )}
                                            </h1>
                                        </div>
                                        <h2 className="lg:text-[16px] text-[14px]  font-[400] text-neutral-2">{programData.program} di seluruh Indonesia</h2>
                                    </div>
                                );
                            })}
                        </div>
                        <div className=" flex justify-center items-center mx-auto">
                            <ButtonLink caption="Pelajari lebih lanjut" to="/aboutus" backgroundColor="bg-primary-1 hover:bg-primary-2" textColor="text-white"  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.749 12.75L3.24926 12.75L3.24926 11.25L20.749 11.25L20.749 12.75Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z" fill="white" />
                                </svg>
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurImpact;