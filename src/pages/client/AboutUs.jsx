import React from "react";
import TagLine from "../../components/TagLine";
import Visi from "../../components/Visi";
import Misi from "../../components/Misi";
import { About } from "../../components/About";
import OurProgram from "../../components/OurProgram";

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
