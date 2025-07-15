/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdArrowDropDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MentorCardContents from '../database/MentorCardContents';

import mascot1 from "../../public/images/mascot-icons/pose=3.png";
import mascot2 from "../../public/images/mascot-icons/pose=4.png";



const CustomDropdown = ({ categories, selectedCategory, onCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (category) => {
        onCategoryChange(category);
        setIsOpen(false);
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
    };

    return (
        <div className="dropdown relative w-[312px] lg:hidden">
            <button
                className="flex p-3 items-center justify-between w-full rounded-md border-[1px] border-neutral-2 bg-neutral-white text-neutral-1 cursor-pointer shadow-[8px_8px_0px_0px_#334151] transition-all duration-300 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#334151]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedCategory}</span>
                <MdArrowDropDown
                    className={`text-neutral-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    size={24}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute z-10 mt-2 w-full bg-neutral-white border-[1px] border-neutral-2 rounded-md shadow-lg overflow-hidden"
                    >
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="p-3 cursor-pointer text-neutral-2 hover:bg-neutral-4/20 border-b border-neutral-5/50 last:border-b-0"
                                onClick={() => handleOptionClick(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export const MentorTeams = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth >= 1024 ? 4 : 8);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const uniqueCategories = [
        ...new Set(MentorCardContents.map((member) => member.CategoryTeam.name)),
    ];
    const categories = ["Semua", ...uniqueCategories];

    const filteredStaffMembers =
        selectedCategory === "Semua"
            ? MentorCardContents
            : MentorCardContents.filter(
                (member) => member.CategoryTeam.name === selectedCategory
            );

    const totalPages = Math.ceil(filteredStaffMembers.length / itemsPerPage);
    const indexOfLastStaff = currentPage * itemsPerPage;
    const indexOfFirstStaff = indexOfLastStaff - itemsPerPage;
    const currentStaffMembers = filteredStaffMembers.slice(
        indexOfFirstStaff,
        indexOfLastStaff
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // ====================================================================
    // 2. FUNGSI HANDLE DIUBAH UNTUK MENERIMA VALUE LANGSUNG
    // ====================================================================
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const capitalizeFirstLetter = (string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const primaryButton = "bg-primary-1 text-white hover:bg-secondary-2";
    const secondaryButton = "bg-white border border-neutral-3 text-neutral-1 hover:bg-neutral-50 hover:font-bold font-normal";
    const paginationNavButton = "bg-primary-1 text-white hover:bg-secondary-2 disabled:bg-secondary-1 disabled:cursor-not-allowed";

    return (
        <div className="bg-blue-bg bg-cover">
            <div className="our-team-section flex w-full lg:w-[1152px] justify-center items-start lg:items-center mx-auto gap-2.5">
                <div className="our-team-container flex lg:w-full w-[312px] py-12 flex-col items-center gap-8 flex-shrink-0">
                    <div className="our-team-heading w-[312px] px-6 lg:w-[520px] flex flex-col items-center text-center lg:gap-4 lg:self-stretch mx-auto">

                        <div className="mascot-container flex absolute w-[312px] lg:w-[520px] justify-between items-center  lg:hidden mt-[4px]">
                            <img src={mascot1} alt="Mascot" className=" size-[80px] lg:size-[100px] " />
                            <img src={mascot2} alt="Mascot" className=" size-[80px] lg:size-[100px] scale-x-[-1]" />
                        </div>

                        <h5 className="text-neutral-1 text-sm lg:text-[16px] font-lato font-bold xs:">
                            OUR TEAM
                        </h5>

                        <div className="mascot-container lg:flex absolute w-[312px] lg:w-[520px] justify-between items-center hidden z-[1]">
                            <img src={mascot1} alt="Mascot" className=" lg:size-[115px] hover:translate-x-4 transition-transform" />
                            <img src={mascot2} alt="Mascot" className=" lg:size-[115px] hover:-translate-x-4 transition-transform scale-x-[-1]" />
                            {/* <img src={mascot1} alt="Mascot" className=" lg:size-[180px] hover:translate-x-4 transition-transform" />
                            <img src={mascot2} alt="Mascot" className=" lg:size-[180px] hover:-translate-x-4 transition-transform scale-x-[-1]" /> */}
                        </div>

                        <h2 className="self-stretch text-neutral-1 text-[20px] lg:text-[32px] font-lato font-bold">
                            MANS SEASON 1
                        </h2>

                    </div>

                    <div className="our-team-ctg-and-staff lg:w-[1152px] flex flex-col items-center gap-8 xs:self-stretch">
                        <div className="btn-categories lg:flex lg:items-center lg:gap-[12px] hidden ">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryChange(category)}
                                    className={`lg:flex hidden lg:w-max w-[270px] lg:h-[32px] h-[48px] py-2 px-3 justify-center items-center rounded-md font-lato font-bold text-[14px] transition-colors duration-300 ${selectedCategory === category ? primaryButton : secondaryButton
                                        }`}
                                >
                                    {capitalizeFirstLetter(category)}
                                </button>
                            ))}
                        </div>
                        <CustomDropdown
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                        />

                        {/* Pagination Mobile */}
                        <div className="our-team-btn-container w-full lg:hidden flex justify-between items-center ">
                            <button
                                onClick={handlePrevPage}
                                className={`flex p-3 justify-center items-center gap-2.5 rounded-lg transition-colors duration-300 ${paginationNavButton}`}
                                disabled={currentPage === 1}
                            >
                                <MdKeyboardArrowLeft size={24} className="flex-shrink-0 text-white" />
                            </button>
                            <div className="numbers flex items-center gap-[32px]">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <p
                                        key={index + 1}
                                        className={`text-sm font-lato cursor-pointer transition-colors duration-200 ${currentPage === index + 1 ? "text-primary-1 font-bold" : "text-neutral-2 "
                                            } hover:text-primary-1`}
                                        onClick={() => {
                                            setCurrentPage(index + 1);
                                        }}
                                    >
                                        {index + 1}
                                    </p>
                                ))}
                            </div>
                            <button
                                onClick={handleNextPage}
                                className={`flex p-3 justify-center items-center gap-2.5 rounded-lg transition-colors duration-300 ${paginationNavButton}`}
                                disabled={currentPage === totalPages}
                            >
                                <MdKeyboardArrowRight size={24} className="flex-shrink-0 text-white" />
                            </button>
                        </div>

                        <div className="our-team-all-staff flex flex-col items-start self-stretch">
                            <div className="cards-container flex justify-center items-start content-start gap-24-48 self-stretch flex-wrap ">
                                <motion.div
                                    key={`${selectedCategory}-${currentPage}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex justify-center items-start content-start gap-y-12 gap-x-6 self-stretch flex-wrap"
                                >
                                    {currentStaffMembers.map((staff) => (
                                        <div
                                            key={staff.id}
                                            className="staff-card flex w-[270px] flex-col items-start gap-[12px]"
                                        >
                                            <Link to={staff.link} target={"_blank"}>
                                                <img
                                                    src={staff.image}
                                                    alt={staff.name}
                                                    className="w-[270px] h-[448.99px] object-cover rounded-[18px] shadow-lg border border-neutral-900"
                                                />
                                            </Link>
                                            {/* <div className="title-and-detail flex flex-col items-start gap-[4px] self-stretch">
                                                <h4 className="text-neutral-1 text-[20px] font-lato font-bold"> {capitalizeFirstLetter(staff.name)} </h4>
                                                <p className="text-neutral-2 text-[14px] font-lato font-bold">
                                                    {capitalizeFirstLetter(staff.position)}
                                                </p>
                                            </div> */}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Pagination Desktop */}
                        <div className="our-team-btn-container w-[1152px] hidden lg:flex justify-between items-center ">
                            <button
                                onClick={handlePrevPage}
                                className={`flex p-3 justify-center items-center gap-2.5 rounded-lg transition-colors duration-300 ${paginationNavButton}`}
                                disabled={currentPage === 1}
                            >
                                <MdKeyboardArrowLeft size={24} className="flex-shrink-0" />
                                <p className={`text-[16px] font-lato font-bold`}>
                                    Sebelumnya
                                </p>
                            </button>
                            <div className="numbers flex items-center gap-[32px]">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <p
                                        key={index + 1}
                                        className={`text-sm font-lato cursor-pointer transition-colors duration-200 ${currentPage === index + 1 ? "text-primary-1 font-extrabold" : "text-neutral-2 font-normal"
                                            } hover:text-primary-1`}
                                        onClick={() => {
                                            setCurrentPage(index + 1);
                                        }}
                                    >
                                        {index + 1}
                                    </p>
                                ))}
                            </div>
                            <button
                                onClick={handleNextPage}
                                className={`flex p-3 justify-center items-center gap-2.5 rounded-lg transition-colors duration-300 ${paginationNavButton}`}
                                disabled={currentPage === totalPages}
                            >
                                <p className={`text-[16px] font-lato font-bold`}>
                                    Selanjutnya
                                </p>
                                <MdKeyboardArrowRight size={24} className="flex-shrink-0" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorTeams;