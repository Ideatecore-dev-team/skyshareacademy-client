import React from "react";
import TagLine from "../../components/client/TagLine";
import Visi from "../../components/client/Visi";
import Misi from "../../components/client/Misi";
import { About } from "../../components/client/About";
import OurProgram from "../../components/client/OurProgram";

function AboutUs() {
  return (
    <>
      <div className="aboutus background">
        <TagLine />
        <About />
        <Visi />
        <Misi />
        <OurProgram />
      </div>
    </>
  );
}
export default AboutUs;
