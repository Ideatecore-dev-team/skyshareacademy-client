import React from "react";
import skyshareApi from "../../utilities/skyshareApi";
import { useState, useEffect } from "react";
import TalentCta from "../../components/client/CtaTalents";
import AlurAcara from "../../components/client/AlurAcara";
import TimelineSkyshare from "../../components/client/TimelineSkyshare";
import CurrentGroupTalent from "../../components/client/CurrentGroupTalent";
import AllActivitiesSkyShare from "../../components/client/AllActivitiesTalent";
import SkyshareAbout from "../../components/client/AboutTalent";

function Skyshare() {
  const [talent, setTalent] = useState([]);

  useEffect(() => {
    const getDataTalent = async function () {
      try {
        const response = await skyshareApi.get("/talent");
        setTalent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataTalent();
  }, []);
  return (
    <>
      <div className="talent-academy">
        <TalentCta talent={talent} />
        <SkyshareAbout />
        <AlurAcara talent={talent} />
        <TimelineSkyshare talent={talent} />
        <CurrentGroupTalent />
        <AllActivitiesSkyShare talent={talent} />
      </div>
    </>
  );
}

export default Skyshare;
