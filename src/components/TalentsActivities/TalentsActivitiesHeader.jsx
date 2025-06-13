    import React from "react";
    import {
    MdSportsSoccer,
    MdOutlineAccessTime,
    MdSchool,
    MdHome,
    MdHiking,
    MdSelfImprovement,
    MdWork,
    MdGroupAdd,
    MdFamilyRestroom,
    MdOutlineLightbulb, // Menggunakan MdOutlineLightbulb untuk "Fill Your Mind"
    } from "react-icons/md";
    import { GiCampingTent } from "react-icons/gi";

    // Import Swiper React components
    import { Swiper, SwiperSlide } from "swiper/react";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/autoplay";

    // Import required modules
    import { Autoplay, Pagination, Navigation } from "swiper/modules";

    import Mascot1 from "../../../public/images/mascot-icons/pose=10.png";


    export const TalentsActivitiesHeader = () => {
    const OurProgramData = [
        {
        program: "Circle Time",
        desc: "Membangun pemahaman materi secara berkelompok setiap minggu.",
        icon: <MdOutlineAccessTime size={32} className="text-white" />, // Ukuran icon diperbesar
        },
        {
        program: "Sport Time",
        desc: "Kegiatan olahraga rutin bersama setiap bulan.",
        icon: <MdSportsSoccer size={32} className="text-white" />,
        },
        {
        program: "Training",
        desc: "Pelatihan softskill dan hardskill.",
        icon: <MdSchool size={32} className="text-white" />,
        },
        {
        program: "Fill Your Mind",
        desc: "Talkshow pengembangan diri untuk memperluas wawasan.",
        icon: <MdOutlineLightbulb size={32} className="text-white" />,
        },
        {
        program: "Home Visit",
        desc: "Kunjungan rutin ke rumah member untuk membangun bonding setiap bulan.",
        icon: <MdHome size={32} className="text-white" />,
        },
        {
        program: "Student Expedition",
        desc: "Program tahunan di alam bebas untuk melatih kemandirian dan kepemimpinan.",
        icon: <GiCampingTent size={32} className="text-white" />,
        },
        {
        program: "Take a Walk Together",
        desc: "Rekreasi dan edukasi ke tempat wisata.",
        icon: <MdHiking size={32} className="text-white" />,
        },
        {
        program: "Soul of Charge",
        desc: "Kegiatan peningkatan kondisi ruhiyah dan ibadah.",
        icon: <MdSelfImprovement size={32} className="text-white" />,
        },
        {
        program: "Experiential Learning",
        desc: "Penugasan untuk melatih manajemen diri dan kepekaan sosial setahun sekali.",
        icon: <MdWork size={32} className="text-white" />,
        },
        {
        program: "Personal Approach",
        desc: "Pendekatan pribadi mentor untuk pembentukan karakter positif setiap minggu.",
        icon: <MdOutlineAccessTime size={32} className="text-white" />,
        },
        {
        program: "Catch The Wisdom",
        desc: "Mengunjungi tokoh berpengaruh untuk mendapatkan pengalaman dan ilmu.",
        icon: <MdGroupAdd size={32} className="text-white" />,
        },
        {
        program: "Sharing To Elevate",
        desc: "Studi banding dengan grup lain setahun sekali.",
        icon: <MdSchool size={32} className="text-white" />,
        },
        {
        program: "Mentor & Parents Conference",
        desc: "Pertemuan rutin tahunan manajemen, mentor, dan orang tua untuk evaluasi program.",
        icon: <MdFamilyRestroom size={32} className="text-white" />,
        },
    ];

    return (
        <div className="our-program-section flex items-start justify-center lg:pt-[120px] pt-[60px] bg-background">
        <div className="our-program-container w-[327px] xs:mx-6 lg:w-[1152px] flex flex-col items-center border-b-[1px] border-neutral-3 ">
            <div className="desc flex lg:w-[550px] pt-12 flex-col items-start gap-4 self-stretch">
            <h5 className="text-sm lg:text-base font-bold">TALENTS ACTIVITIES</h5>
            <div className="heading-desc flex flex-col items-start gap-3 self-stretch">
                <h2 className="text-2xl lg:text-[32px] text-left font-bold">
                Menghubungkan Para Pemimpin Muda untuk Berkreasi, Berkolaborasi,
                dan Mempersiapkan Diri.
                </h2>
                <p className="text-base text-justify">
                Skyshare Academy Indonesia adalah lembaga pengembangan potensi diri
                dan kelas karakter minat bakat yang berfokus pada remaja dan
                pemuda (pelajar dan mahasiswa) untuk membentuk diri yang lebih
                baik, berkualitas, dan berdaya bagi bangsa dan negara.
                </p>
            </div>
            
            <div className="mascot-container absolute">
                <img
                    className="relative size-24 lg:size-[400px] left-[752px] top-[-30px] lg:block hidden" // ini kaya selancar
                    // className="relative size-24 lg:size-[400px] left-[752px] top-[25px]" // ini gada kaki

                    src={Mascot1}
                    alt="mascot1"
                />
            </div>

            </div>

            <div className="programs w-full overflow-hidden lg:pt-[52px] pt-[40px]">
            <Swiper
                spaceBetween={30}
                autoplay={{
                delay: 0, 
                disableOnInteraction: true,
                // Hapus pauseOnMouseEnter agar tidak berhenti saat kursor di atas
                // pauseOnMouseEnter: true,
                reverseDirection: false, // Tambahkan ini jika ingin bergerak satu arah terus
                }}
                loop={true} // Tetap true untuk infinite loop
                speed={2500} // Kecepatan transisi antar slide (tingkatkan untuk lebih smooth dan terus berjalan)
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper !pb-[24px]"
                breakpoints={{
                320: {
                    slidesPerView: 2, // Mungkin perlu lebih dari 1 untuk efek continuous
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2, // Sesuaikan jumlah slide yang terlihat untuk efek continuous
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                }}
            >
                {OurProgramData.map((programData, index) => (
                <SwiperSlide key={index}>
                    <div className="program-card bg-white rounded-lg py-2 pt-[24px] flex flex-col items-center text-center gap-4 h-full border border-neutral-900 relative lg:w-[250px] mx-auto xs:h-[100px]">
                    {/* Icon di tengah atas */}
                    <div className="icon-container absolute -top-8 left-1/2 -translate-x-1/2 flex p-3 items-center justify-center rounded-lg bg-primary-1 w-16 h-16  border border-neutral-900">
                        {programData.icon}
                    </div>
                    <h4 className="text-[14px] leading-[24px] font-bold text-gray-800 mt-4">
                        {programData.program}
                    </h4>
                    {/* <p className="text-base text-gray-600">
                        {programData.desc}
                    </p> */}
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </div>
    );
    };