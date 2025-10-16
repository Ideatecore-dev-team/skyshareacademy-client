import React from "react";

import { useNavigate } from "react-router-dom";
import mascot from "@public/images/mascot-icons/pose=1.webp";
import Button from "./Button";


function BecomeMentor() {
    const navigate = useNavigate();

    const RightArrowIcon = () => (
        <svg
            className="text-neutral-white"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.999 12.75L3.49926 12.75L3.49926 11.25L20.999 11.25L20.999 12.75Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.2494 11.25C16.7218 11.25 13.8394 14.3521 13.8394 17.66L13.8394 18.41L15.3394 18.41L15.3394 17.66C15.3394 15.1485 17.582 12.75 20.2494 12.75L20.9994 12.75L20.9994 11.25L20.2494 11.25Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.2494 12.75C16.7218 12.75 13.8394 9.64786 13.8394 6.33995L13.8394 5.58995L15.3394 5.58995L15.3394 6.33995C15.3394 8.85153 17.582 11.25 20.2494 11.25L20.9994 11.25L20.9994 12.75L20.2494 12.75Z"
                fill="white"
            />
        </svg>
    );

    return (
        <>
            <div className="kelebihan-section flex py-12 lg:py-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-blue-bg bg-cover">
                <div className="kelebihan-container flex w-[312px] lg:w-[1152px] lg:justify-between xs:flex-col items-center lg:gap-12 gap-[46px] xsflex-shrink-0">
                    <div className="kelebihan-title flex lg:w-[536px] w-[310px] flex-col lg:items-start items-center gap-4">
                        <div className="lg:flex lg:flex-row lg:items-center lg:gap-4">
                            <div className="mascot-container lg:flex size-[120px] justify-center items-center hover:-rotate-12 transition-transform hidden">
                                <img src={mascot} alt="Mascot" />
                            </div>
                            <h2 className=" lg:w-[400px] text-2xl lg:text-4xl xs:text-center text-primary font-semibold tracking-[-0.48px] lg:tracking-[-0.72px]">
                                Berminat mengikuti Mentor Academy Nusantara?
                            </h2>
                        </div>
                        <p className="paragraph lg:w-[536px] text-base text-justify font-normal self-stretch">
                            Bersama Mentor Academy Nusantara bertransformasi menjadi mentor garuda untuk melahirkan pembimbing
                            teladan berjiwa Islam <strong>(Syakhsiyah Islamiyah)</strong> dan dai <strong>(Syakhsiyah Daiyah)</strong>.
                            <br />
                            <br />
                            Bersama, kita membentuk agen perubahan
                            positif bagi generasi penerus bangsa yang berintegritas dan berdaya saing tinggi
                        </p>
                        <div className="lg:block hidden" >
                            <Button onClick={() => {
                                navigate("/ourprogram/mentor");
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                <div className="flex gap-2">
                                    <p className="font-bold text-neutral-white">{"Pelajari Mentor Academy"}</p>
                                    <RightArrowIcon />
                                </div>
                            </Button>
                        </div>
                    </div>

                    <div className="video-container flex flex-col items-start gap-4 lg:gap-6 self-stretch lg:w-[560px] w-[312px] h-full container lg:p-[20px] p-3">
                        <iframe
                            src="https://www.youtube.com/embed/EPs6yyCQ85s?si=XpQS2YLE-ZmbMFv-"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="lg:rounded-xl rounded-md w-[285px] lg:w-[520px] lg:h-[315px]"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="lg:hidden block" >
                            <Button onClick={() => {
                                navigate("/ourprogram/mentor");
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                <div className="flex gap-2">
                                    <p className="font-bold text-neutral-white">{"Pelajari Mentor Academy"}</p>
                                    <RightArrowIcon />
                                </div>
                            </Button>
                        </div>
                </div>
            </div>
        </>
    );
}

export default BecomeMentor;