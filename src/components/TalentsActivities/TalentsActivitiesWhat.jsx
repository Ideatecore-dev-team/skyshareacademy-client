/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import { OurProgramDropdownContent } from "./TalentsActivitiesDropdownContent";
import ButtonLink from "../ButtonLink";

export const TalentsActivitiesWhat = () => {
  const [selectedProgram, setSelectedProgram] = useState("Circle Time");
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol visibilitas dropdown

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

  const handleOptionClick = (optionId) => {
    setSelectedProgram(optionId);
    setIsOpen(false); // Tutup dropdown setelah pilihan diklik
  };

  // Variants untuk animasi muncul/hilang dropdown list
  const dropdownMenuVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.8, originY: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, scaleY: 1, originY: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, scaleY: 0.8, originY: 0, transition: { duration: 0.2 } },
  };

  // Props untuk animasi hover setiap item option di dalam dropdown list
  const optionItemHoverProps = {
    whileHover: {
      x: -2, // Geser 2px ke kiri
      y: -2, // Geser 2px ke atas
      boxShadow: "2px 2px 0px 0px rgba(51, 65, 81, 0.5)", // Tambahkan shadow kecil
      transition: { duration: 0.15, ease: "easeOut" },
    },
    whileTap: {
      x: 0,
      y: 0,
      boxShadow: "none", // Hilangkan shadow saat diklik
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  return (
    <div className="what-we-do-section flex justify-center items-start self-stretch bg-background">
      <div className="what-we-do-container flex lg:w-[1152px] w-full xs:px-6 py-12 flex-col items-start">
        <div className="title flex lg:w-[550px] flex-col items-start gap-4 xs:self-stretch">
          <div className="title-desc flex flex-col gap-3 items-start self-stretch lg:w-[550px] w-full">
            <h2 className="text-2xl lg:text-[32px] font-bold">What We Do?</h2>
            <p className="text-base">
              Pelajari lebih lanjut tentang kegiatan yang kami lakukan di Talents Academy.
            </p>
          </div>

          {/* Custom Dropdown Button */}
          <div className="custom-dropdown-container relative w-full">
            <button
              className="flex p-3 items-center justify-between w-full rounded-md
                         border-[1px] border-neutral-600 bg-white text-black cursor-pointer
                         shadow-[8px_8px_0px_0px_rgba(51,65,81,1)] transition-all duration-300 ease-in-out
                         hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(51,65,81,1)]
                         "
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selectedProgram}</span>
              <MdArrowDropDown
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                size={24}
              />
            </button>

            {/* Custom Dropdown Options (dengan Framer Motion) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownMenuVariants}
                  className="absolute z-10 mt-2 w-full bg-white border border-neutral-600 rounded-md shadow-lg overflow-hidden max-h-60 overflow-y-auto" // Tambahkan max-height dan overflow-y-auto jika banyak opsi
                >
                  {programOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      className="p-3 cursor-pointer text-black hover:bg-gray-100 flex items-center border-b border-gray-200 last:border-b-0"
                      onClick={() => handleOptionClick(option.id)}
                      {...optionItemHoverProps} // Terapkan animasi hover/tap di sini
                    >
                      {option.name}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Meneruskan nama program sebagai programId */}
        <OurProgramDropdownContent programId={selectedProgram} />
        <div className=" flex justify-center items-center mx-auto">
          <ButtonLink
                    caption="Go back to Talents Academy"
                    to="/ourprogram/talent"
                    backgroundColor="bg-primary-1"
                    textColor="text-white"
                    className=" hover:bg-primary-2 bg-primary-1"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.749 12.75L3.24926 12.75L3.24926 11.25L20.749 11.25L20.749 12.75Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                        fill="white"
                    />
                    </svg>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};