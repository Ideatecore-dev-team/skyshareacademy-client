import React from "react";
import { useEffect, useState } from "react";
import skyshareApi from "../../utilities/skyshareApi";
import GroupIcon from "@public/images/mascot-icons/3 User.png";
import Chain from "@public/images/mascot-icons/Link.png";
import ArrowDown from "@public/images/mascot-icons/Arrow - Down 3.png";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const CurrentGroupSkyshare = () => {
  const [groups, setGroups] = useState([]);
  const [dataGroups, setDataGroups] = useState([]);
  const [openGroupId, setOpenGroupId] = useState(null);

  useEffect(() => {
    const getGroupSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setGroups(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGroupSchool();
  }, []);

  const getDataGroupByid = async function (id) {
    try {
      const response = await skyshareApi.get(`group/school/${id}`);
      setDataGroups(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleGroup = function (id) {
    if (openGroupId === id) {
      setOpenGroupId(null);
      setDataGroups([]);
    } else {
      setOpenGroupId(id);
      getDataGroupByid(id);
    }
  };

  return (
    <>
      <div className="group-section flex px-3 py-14 lg:pt-24 lg:px-0 flex-col items-center bg-background">
        <div className="group-container flex flex-col items-center gap-9 lg:gap-10 lg:w-[1152px] overflow-hidden w-[312px]">
          <div className="group-title flex items-center gap-2 lg:gap-4">
            <img className=" size-6 lg:size-10" src={GroupIcon} alt="starts" />
            <h2 className="headline-2">Current Group</h2>
          </div>
          <div className="schoolgroup-card w-full flex justify-center">
            {groups.length > 0 ? (
              <Swiper
                spaceBetween={30}
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: false,
                }}
                speed={5000}
                className="mySwiper w-[312px] lg:w-[1152px]"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                }}
              >
                {groups.map((group) => {
                  const isOpen = openGroupId === group.id;
                  return (
                    <SwiperSlide
                      key={group.id}
                      className="flex justify-center lg:w-[300px]"
                    >
                      {" "}
                      <div className="card-size1 pb-4 rounded-xl border-2 mt-4 border-black bg-white w-[312px]">
                        <iframe
                          title="Google Maps"
                          src={group.embed_map}
                          width="290"
                          height="140"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            zIndex: "-10",
                          }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className=" h-auto border-t-2 -mt-3 relative bg-white border-black rounded-t-xl ">
                          <div className="w-full flex justify-center ">
                            <div className="w-16 border-2 border-black  rounded-full -mt-8 mx-auto">
                              <img
                                className="w-16 rounded-full"
                                src={group.gambar_logo_sekolah}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className=" flex justify-center">
                            <div className="w-1/8 px-3 border-b-2 border-black">
                              <h4 className="headline-4 text-center pb-2 ">
                                {" "}
                                {group.nama_sekolah}{" "}
                              </h4>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className=" w-5/6 mt-4 h-[72px]">
                              <p className="paragraph text-justify text-slate-500">
                                {" "}
                                {group.alamat.substring(0, 80)}{" "}
                              </p>
                            </div>
                          </div>
                          <div className="flex mt-5 justify-center">
                            <button
                              onClick={() => handleToggleGroup(group.id)}
                              className="bg-primary-1 z-20 hover:bg-primary-2 px-3 py-2 rounded-full flex"
                            >
                              <p className="px-2 text-white">Daftar Kelompok</p>
                              <motion.img
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 ml-2"
                                src={ArrowDown}
                                alt=""
                              />
                            </button>
                          </div>
                          <div className="flex justify-center">
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                  className="overflow-hidden rounded-lg"
                                >
                                  <div className="px-4 mt-4">
                                    {dataGroups && dataGroups.length > 0 ? (
                                      dataGroups.map((dataGroup) => {
                                        return (
                                          <div
                                            key={dataGroup.id}
                                            className="flex gap-1 w-full"
                                          >
                                            <img
                                              className="w-5 h-5 -ml-3"
                                              src={Chain}
                                              alt=""
                                            />
                                            <a
                                              href={dataGroup.link}
                                              className={`font-bold text-base `}
                                            >
                                              {" "}
                                              {dataGroup.name}{" "}
                                            </a>
                                          </div>
                                        );
                                      })
                                    ) : (
                                      <h4
                                        className={`font-bold text-red-500 ml-2 mt-4`}
                                      >
                                        {" "}
                                        Tidak Ada Group{" "}
                                      </h4>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <p>Loading groups...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentGroupSkyshare;