    // eslint-disable-next-line no-unused-vars
    import React from "react";
    // import Logo from "../assets/images/logo-color.png";
    import {
    MdSportsSoccer, // Sport Time
    MdOutlineAccessTime, // Circle Time, Personal Approach
    MdSchool, // Training, Fill Your Mind, Sharing To Elevate
    MdHome, // Home Visit
    MdHiking, // Leadership Survival Camp / Student Expedition, Take a Walk Together
    MdSelfImprovement, // Soul of Charge
    MdWork, // Experiential Learning
    MdEmojiObjects, // Catch The Wisdom
    MdFamilyRestroom, // Mentor and Parents Conference
    MdGroupAdd, // Catch The Wisdom alternative
    MdOutlineLightbulb, // Fill Your Mind alternative
    } from "react-icons/md";

    import { GiCampingTent } from "react-icons/gi";

    export const TalentsActivitiesHeader = () => {
    const OurProgramData = [
        {
        program: "1. Circle Time",
        desc: "Membangun pemahaman materi secara berkelompok setiap minggu.",
        icon: <MdOutlineAccessTime size={24} className="text-white" />,
        },
        {
        program: "2. Sport Time",
        desc: "Kegiatan olahraga rutin bersama setiap bulan.",
        icon: <MdSportsSoccer size={24} className="text-white" />,
        },
        {
        program: "3. Training",
        desc: "Pelatihan softskill dan hardskill.",
        icon: <MdSchool size={24} className="text-white" />,
        },
        {
        program: "4. Fill Your Mind",
        desc: "Talkshow pengembangan diri untuk memperluas wawasan.",
        icon: <MdOutlineLightbulb size={24} className="text-white" />,
        },
        {
        program: "5. Home Visit",
        desc: "Kunjungan rutin ke rumah member untuk membangun bonding setiap bulan.",
        icon: <MdHome size={24} className="text-white" />,
        },
        {
        program: "6. Student Expedition",
        desc: "Program tahunan di alam bebas untuk melatih kemandirian dan kepemimpinan.",
        icon: <GiCampingTent size={24} className="text-white" />,
        },
        {
        program: "7. Take a Walk Together",
        desc: "Rekreasi dan edukasi ke tempat wisata.",
        icon: <MdHiking size={24} className="text-white" />,
        },
        {
        program: "8. Soul of Charge",
        desc: "Kegiatan peningkatan kondisi ruhiyah dan ibadah.",
        icon: <MdSelfImprovement size={24} className="text-white" />,
        },
        {
        program: "9. Experiential Learning",
        desc: "Penugasan untuk melatih manajemen diri dan kepekaan sosial setahun sekali.",
        icon: <MdWork size={24} className="text-white" />,
        },
        {
        program: "10. Personal Approach",
        desc: "Pendekatan pribadi mentor untuk pembentukan karakter positif setiap minggu.",
        icon: <MdOutlineAccessTime size={24} className="text-white" />,
        },
        {
        program: "11. Catch The Wisdom",
        desc: "Mengunjungi tokoh berpengaruh untuk mendapatkan pengalaman dan ilmu.",
        icon: <MdGroupAdd size={24} className="text-white" />,
        },
        {
        program: "12. Sharing To Elevate",
        desc: "Studi banding dengan grup lain setahun sekali.",
        icon: <MdSchool size={24} className="text-white" />,
        },
        {
        program: "13. Mentor & Parents Conference",
        desc: "Pertemuan rutin tahunan manajemen, mentor, dan orang tua untuk evaluasi program.",
        icon: <MdFamilyRestroom size={24} className="text-white" />,
        },
    ];

    return (
        <div className="our-program-section flex items-start justify-center lg:pt-[120px] pt-[60px] bg-background">
        <div className="our-program-container w-full xs:mx-6 lg:w-[1152px] flex flex-col items-center border-b-[1px] border-neutral-3 ">
            <div className="desc flex lg:w-[520px] py-12 flex-col items-start gap-4 self-stretch">
            <h5 className="text-sm lg:text-base font-bold">TALENTS ACTIVITIES</h5>
            <div className="heading-desc flex flex-col items-start gap-3 self-stretch">
                <h2 className="text-2xl lg:text-[32px] text-left font-bold">
                Menghubungkan Para Pemimpin Muda untuk Berkreasi, Berkolaborasi, dan Mempersiapkan Diri.
                </h2>
                <p className="text-base text-justify">
                Skyshare Academy Indonesia adalah lembaga pengembangan potensi diri dan kelas karakter minat bakat yang berfokus pada remaja dan pemuda (pelajar dan mahasiswa) untuk membentuk diri yang lebih baik, berkualitas, dan berdaya bagi bangsa dan negara. 
                </p>
            </div>
            </div>
            <div className="programs pb-12 flex flex-col lg:flex-row lg:flex-wrap items-start lg:content-start lg:justify-between xs:gap-8 lg:gap-y-8 self-stretch">
            {OurProgramData.map((programData, index) => (
                <div key={index} className="lg:w-[19%] flex flex-col items-start gap-2 lg:gap-3 self-stretch"> {/* Adjusted width for 5 items per row */}
                <div className="program-name flex gap-3 self-stretch items-center">
                    <div className="icon flex p-3 items-center justify-center rounded-lg bg-primary-1 hover:bg-secondary-3">
                    {programData.icon}
                    </div>
                    <h4 className="text-[16px] leading-[24px] font-bold">{programData.program}</h4>
                </div>
                {/* <p className="text-base xs:text-justify ">{programData.desc}</p> */}
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };