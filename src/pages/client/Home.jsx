import React from "react";
import Hero from "../../components/Hero";
import Testimoni from "../../components/Testimoni";
import HomeArticle from "../../components/HomeArticle";

import BecomeMentor from "../../components/BecomeMentor";
import OurImpact from "../../components/OurImpact";

import Partner from "../../components/Partner";

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
