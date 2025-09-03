import React from "react";
import Hero from "../../components/client/Hero";
import Testimoni from "../../components/client/Testimoni";
import HomeArticle from "../../components/client/HomeArticle";

import BecomeMentor from "../../components/client/BecomeMentor";
import OurImpact from "../../components/client/OurImpact";

import Partner from "../../components/client/Partner";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <Testimoni />
        <HomeArticle />
        
        <BecomeMentor />
        <OurImpact />

        <Partner />
      </div>
    </>
  );
}

export default Home;
