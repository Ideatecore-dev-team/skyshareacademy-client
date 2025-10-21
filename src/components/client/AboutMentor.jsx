import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineManageAccounts, MdHealthAndSafety } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import mascot from "@public/images/mascot-icons/pose=10.webp";
import SecondayButton from "./SecondayButton";

function MentorAbout() {
    const advantages = [
        {
            title: "Peningkatan Kapasitas",
            description:
                "Meningkatkan mutu, pengetahuan, dan keterampilan (hard skill & soft skill) para mentor.",
            icon: FaGraduationCap,
        },
        {
            title: "Manajemen Diri dan Kelompok",
            description:
                "Mendapatkan ilmu manajemen diri dan pengelolaan kelompok mentoring.",
            icon: MdOutlineManageAccounts,
        },
        {
            title: "Wawasan Keislaman",
            description:
                "Memperoleh pemahaman Islam yang syamil, mencakup akidah, akhlak, ibadah, dan fikih.",
            icon: GiOpenBook,
        },
        {
            title: "Klinik Bimbingan",
            description:
                "Pembimbingan singkat dalam bentuk pelatihan atau sesi perorangan untuk penguatan pengetahuan dan kecakapan, serta konsultasi.",
            icon: MdHealthAndSafety,
        },
    ];

    return (
        <>
            <div className="kelebihan-section flex py-12 lg:py-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-blue-bg bg-cover">
                <div className="kelebihan-container flex w-[312px] lg:w-[1152px] lg:justify-between xs:flex-col items-center lg:gap-12 gap-[46px] xsflex-shrink-0">
                    <div className="kelebihan-title flex lg:w-[1152px] w-[310px] flex-col lg:items-start items-center gap-4">
                        <div className="flex flex-row lg:items-center lg:gap-4 gap-1">
                            <div className="mascot-container flex lg:size-[200px] xs:h-auto size-[100px] justify-center items-center hover:animate-ping transition-transform">
                                <img src={mascot} alt="Mascot" />
                            </div>
                            <h2 className=" lg:w-[400px] text-2xl lg:text-4xl xs:text-left text-primary font-semibold tracking-[-0.48px] lg:tracking-[-0.72px]">
                                Jadi apa sih Mentor Academy itu?
                            </h2>
                        </div>
                        <p className="paragraph lg:w-[616px] text-base text-justify font-normal self-stretch">
                            Mentor Academy adalah rangkaian kegiatan yang bertujuan untuk
                            meningkatkan kapasitas (kemampuan dan kapabilitas) para mentor,
                            baik dalam <strong>soft skill</strong>maupun <strong>hard skill</strong>. 
                            Program ini dirancang
                            agar mentor memiliki kapabilitas 3K+1P: Komitmen, Konsisten,
                            Kreatif, dan ber-Pengalaman.
                        </p>

                        {/* MOVED: kelebihan-cards div is now inside kelebihan-title */}
                        <div className="kelebihan-cards flex flex-col items-start gap-4 lg:gap-6 self-stretch lg:flex-row lg:flex-wrap lg:justify-center lg:mt-8"> {/* Added lg:mt-8 for spacing */}
                            {advantages.map((advantage, index) => {
                                const IconComponent = advantage.icon;
                                return (
                                    <div
                                        key={index}
                                        className="keunggulan-card container flex p-4 lg:p-6 items-start gap-2 lg:gap-4 self-stretch rounded-2xl bg-white lg:w-[calc(50%-12px)]"
                                    >
                                        <div className="icon-container flex relative p-3 items-center justify-center rounded-lg bg-primary-1 size-[64px] border border-neutral-900 flex-shrink-0">
                                            {IconComponent && (
                                                <IconComponent className="text-white size-[24px]" />
                                            )}
                                        </div>
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
                        <div className=" mx-auto">
                        <SecondayButton caption="Seluruh Kegiatan" to="/ourprogram/mentor/activities">
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
                    </div>
                    {/* REMOVED: kelebihan-cards div was here */}
                </div>
            </div>
        </>
    );
}

export default MentorAbout;