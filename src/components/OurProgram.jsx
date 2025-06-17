import React from "react";
import { useNavigate } from "react-router-dom";
import TalentLogo from "../../public/images/Talent-logo.png";
import MentorLogo from "../../public/images/Mentor-logo.png";
import ParentsLogo from "../../public/images/Parents-logo.png";
import Button from "./Button";
import "../components/OurProgram.css"; // Pastikan file CSS ini ada jika Anda menambahkan custom CSS

function OurProgram() {
  const navigate = useNavigate();

  const programs = [
    {
      id: "talent",
      logo: TalentLogo,
      title: "Talent Academy",
      description:
        "Talents Academy berfokus pada pengembangan potensi dan karakter diri anggota, didasarkan pada pendekatan teman sebaya.",
      path: "/ourprogram/talent",
    },
    {
      id: "mentor",
      logo: MentorLogo,
      title: "Mentor Academy",
      description:
        "Mentor Academy bertujuan untuk meningkatkan kapabilitas pembimbing agar selaras dengan generasi Z, Alpha, & Beta.",
      path: "/ourprogram/mentor",
    },
    {
      id: "parents",
      logo: ParentsLogo,
      title: "Parents Academy",
      description:
        "Parents Academy dirancang untuk orang tua anggota Talents Academy, memastikan kesamaan visi dalam pembentukan karakter dan pengembangan potensi.",
      path: "/ourprogram/parents",
    },
  ];

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
      <div className="our-program bg-background flex flex-col items-center px-6 pb-14 lg:pt-14 lg:pb-24 gap-[102px]">
        <div className="title lg:flex lg:flex-col lg:items-center lg:gap-2 xs:pt-14">
          <h1 className="headline-1 text-black">Program Kami</h1>
        </div>
        <div className="all-program flex flex-col lg:flex-row items-start gap-28 lg:gap-6 z-10">
          {programs.map((program) => (
            <div
              key={program.id}
              className="program relative px-6 lg:px-0 flex flex-col items-center gap-4 lg:pb-6 pb-6 text-center lg:h-[358px] justify-between
              lg:transition-all lg:duration-300 lg:ease-in-out
              lg:hover:scale-105 lg:hover:shadow-xl lg:hover:translate-y-[-5px]" // Efek hover untuk desktop
            >
              <div className="image-container absolute flex items-center content-center size-44 lg:size-52 p-5">
                <img src={program.logo} alt="" className="image" />
              </div>
              <h2 className="headline-2">{program.title}</h2>
              <p className="paragraph px-6">{program.description}</p>
              <Button onClick={() => navigate(program.path)}>
                <div className="flex gap-2">
                  <p className="font-bold text-neutral-white">Learn more</p>
                  <RightArrowIcon />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurProgram;