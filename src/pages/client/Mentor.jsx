import React from "react";
// import axios from "axios";
import skyshareApi from "../../utilities/skyshareApi";
import { useEffect, useState } from "react";
import MentorCta from "../../components/client/CtaMentor";
import Mentorabout from "../../components/client/AboutMentor";
import MentorTeams from "../../components/client/MentorTeams";

import AllActivitiesMentorAcademy from "../../components/client/AllActivitiesMentor";
import TimelineSkyshare from "../../components/client/TimelineSkyshare";
import AlurAcara from "../../components/client/AlurAcara";

function Mentor() {
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    const getDataMentor = async function () {
      try {
        const response = await skyshareApi.get("/mentor");
        setMentor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataMentor();
  }, []);
  return (
    <>
      <div>
        <MentorCta mentor={mentor} />
        <Mentorabout />

        <AlurAcara mentor={mentor} />
        <TimelineSkyshare mentor={mentor}/>
        <AllActivitiesMentorAcademy mentor={mentor} />

        <MentorTeams />
      </div>
    </>
  );
}

export default Mentor;
