import React from "react";
// import axios from "axios";
import skyshareApi from "../../utilities/skyshareApi";
import { useEffect } from "react";
import { useState } from "react";
import ParentsCta from "../../components/client/CtaParents";
import ParentsAbout from "../../components/client/AboutParents";
import BenefitParents from "../../components/client/BenefitParents";
import AlurAcara from "../../components/client/AlurAcara";
import TimelineSkyshare from "../../components/client/TimelineSkyshare";
import AllActivitiesParents from "../../components/client/AllActivitiesParents";

function Parents() {
  const [parents, setParents] = useState([]);
  useEffect(() => {
    const getDataparents = async function () {
      try {
        const response = await skyshareApi.get("/parent");
        setParents(response.data.data);
      } catch (error) {}
      console.log(error);
    };
    getDataparents();
  }, []);

  return (
    <>
      <div className="home">
        <ParentsCta parents={parents} />
        <ParentsAbout />
        <BenefitParents />
        <AlurAcara parents={parents} />
        <TimelineSkyshare parents={parents} />
        <AllActivitiesParents parents={parents} />
      </div>
    </>
  );
}

export default Parents;
