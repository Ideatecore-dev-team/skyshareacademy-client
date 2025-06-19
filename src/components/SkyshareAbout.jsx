import React from "react";

import { FaHandshake, FaBookOpen, FaRocket } from "react-icons/fa";

import mascot from "../../public/images/mascot-icons/pose=3.png";
import SecondayButton from "./SecondayButton";


function SkyshareAbout() {
    const advantages = [
        {
            title: "Personalized Mentorship",
            description:
                "Dapatkan mentor yang disesuaikan dengan kebutuhanmu, mendukungmu dalam menghadapi tantangan akademik, keputusan karier, dan perkembangan pribadi.",
            icon: FaHandshake, 
        },
        {
            title: "Exclusive Resources",
            description:
                "Akses ke workshop, seminar, kursus online, dan komunitas yang mendukung untuk meningkatkan pengalaman belajarmu dan memperluas wawasan.",
            icon: FaBookOpen, 
        },
        {
            title: "Career Advancement",
            description:
                "Dapatkan konseling karier, kesempatan untuk berjejaring, dan bimbingan untuk menjelajahi magang dan melamar pekerjaan, mempersiapkanmu untuk sukses dalam bidang yang kamu pilih.",
            icon: FaRocket, 
        },
    ];

    return (
        <>
            <div className="kelebihan-section flex py-12 lg:py-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-orange-bg bg-cover">
                <div className="kelebihan-container flex w-[312px] lg:w-[1152px] lg:justify-between xs:flex-col items-center lg:gap-12 gap-[46px] xsflex-shrink-0">
                    <div className="kelebihan-title flex lg:w-[536px] w-[310px] flex-col lg:items-start items-center gap-4">
                        <div className="lg:flex lg:flex-row lg:items-center lg:gap-4">
                            <div className="mascot-container lg:flex size-[120px] justify-center items-center hover:opacity-40 transition-transform hidden">
                                <img src={mascot} alt="Mascot" />
                            </div>
                            <h2 className=" lg:w-[400px] text-2xl lg:text-4xl xs:text-center text-primary font-semibold tracking-[-0.48px] lg:tracking-[-0.72px]">
                                Jadi apa sih Talents Academy itu?
                            </h2>
                        </div>
                        <p className="paragraph lg:w-[536px] text-base text-justify font-normal self-stretch">
                            Talents Academy adalah salah satu dari tiga program unggulan Skyshare Academy Indonesia.  Program ini berfokus pada pengembangan potensi dan karakter para anggotanya (disebut "talents").
                            <br />
                            <br />

                            Melalui Talents Academy, setiap talents akan dioptimalkan Multiple Intelligence dan <strong>The 7 essential life skills </strong>yang mereka miliki,  dengan menggunakan pendekatan teman sebaya melalui <strong>13 activities </strong> Talents Academy.  

                        </p>
                        <SecondayButton
                            caption="Seluruh Kegiatan"
                            to="/ourprogram/talent/activities"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.8594 8.84814L2.19287 8.84814L2.19287 7.84815L13.8594 7.84814L13.8594 8.84814Z"
                                    fill="#001125"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.3593 7.84814C11.0076 7.84814 9.08594 9.91624 9.08594 12.1215L9.08594 12.6215L10.0859 12.6215L10.0859 12.1215C10.0859 10.4471 11.581 8.84814 13.3593 8.84814L13.8593 8.84814L13.8593 7.84814L13.3593 7.84814Z"
                                    fill="#001125"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.3593 8.84814C11.0076 8.84814 9.08594 6.78005 9.08594 4.57478L9.08594 4.07478L10.0859 4.07478L10.0859 4.57478C10.0859 6.24917 11.581 7.84814 13.3593 7.84814L13.8593 7.84814L13.8593 8.84814L13.3593 8.84814Z"
                                    fill="#001125"
                                />
                            </svg>
                        </SecondayButton>
                    </div>
                    <div className="kelebihan-cards flex flex-col items-start gap-4 lg:gap-6 self-stretch">
                        {advantages.map((advantage, index) => {
                            const IconComponent = advantage.icon;
                            return (
                                <div
                                    key={index}
                                    // Mengubah flex-col menjadi flex, menambahkan items-start dan gap
                                    className="keunggulan-card  container flex p-4 lg:p-6 items-start gap-2 lg:gap-4 self-stretch rounded-2xl bg-white lg:w-[528px]"
                                >
                                    {/* Hapus absolute dari sini */}
                                    <div className="icon-container flex relative p-3 items-center justify-center rounded-lg bg-primary-1 size-[64px] border border-neutral-900 flex-shrink-0">
                                        {IconComponent && (
                                            <IconComponent className="text-white size-[24px]" />
                                        )}
                                    </div>
                                    {/* Tidak ada perubahan pada div ini */}
                                    <div className="title-desc flex flex-col items-start gap-2">
                                        <h4 className=" text-lg lg:text-2xl text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">
                                            {advantage.title}
                                        </h4>
                                        <p className=" text-base text-neutral-2 font-normal self-stretch tracking-[-0.32px] text-justify">
                                            {advantage.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkyshareAbout;