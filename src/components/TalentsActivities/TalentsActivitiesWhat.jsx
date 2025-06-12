/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { OurProgramDropdownContent } from "./TalentsActivitiesDropdownContent";

export const TalentsActivitiesWhat = () => {
  // Menggunakan nama program sebagai nilai default
  const [selectedProgram, setSelectedProgram] = useState("Circle Time");

  const handleSelectionChange = (e) => {
    setSelectedProgram(e.target.value);
  };

  // Daftar aktivitas yang diambil dari dokumen dan disesuaikan
  const programOptions = [
    { id: "Circle Time", name: "Circle Time" },
    { id: "Sport Time", name: "Sport Time" },
    { id: "Training", name: "Training" },
    { id: "Fill Your Mind", name: "Fill Your Mind" },
    { id: "Home Visit", name: "Home Visit" },
    { id: "Student Expedition", name: "Student Expedition" },
    { id: "Take a Walk Together", name: "Take a Walk Together" },
    { id: "Soul of Charge", name: "Soul of Charge" },
    { id: "Experiential Learning", name: "Experiential Learning" },
    { id: "Personal Approach", name: "Personal Approach" },
    { id: "Catch The Wisdom", name: "Catch The Wisdom" },
    { id: "Sharing To Elevate", name: "Sharing To Elevate" },
    { id: "Mentor & Parents Conference", name: "Mentor & Parents Conference" },
  ];

  return (
<div className="what-we-do-section flex justify-center items-start self-stretch bg-orange-bg bg-cover ">
  <div className="what-we-do-container flex lg:w-[1152px] w-full xs:px-6 py-12 flex-col items-start">
    <div className="title flex lg:w-[550px] flex-col items-start gap-4 xs:self-stretch">
      <div className="title-desc flex flex-col gap-3 items-start self-stretch lg:w-[550px] w-full">
        <h2 className="text-2xl lg:text-[32px] font-bold ">What We Do?</h2>
        <p className="text-base ">
          Pelajari lebih lanjut tentang kegiatan yang kami lakukan di setiap
          program.
        </p>
      </div>
      <div className="dropdown relative w-full">
        <select
          className="flex p-3 items-start w-full rounded-md border-[1px] border-neutral-600 bg-background  text-black hover:bg-neutral-700 appearance-none"
          onChange={handleSelectionChange}
          value={selectedProgram}
        >
          {programOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <MdArrowDropDown
          className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400 pointer-events-none"
          size={24}
        />
      </div>
    </div>
    {/* Meneruskan nama program sebagai programId */}
    <OurProgramDropdownContent programId={selectedProgram} />
  </div>
</div>
  );
};