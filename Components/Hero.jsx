import React from "react";
import AnimatedText from "./Common/AnimatedText";
import SecondHeader from "./SecondHeader";

const Hero = () => {
  return (
    <div className="heroContainer d-flex flex-column align-items-center justify-content-start pt-lg-5">
      <AnimatedText
        text="SAMI"
        delay={0}
        flexWitdth={"end w50"}
        odEven={"nameOdd"}
      />
      <AnimatedText
        text="GHARSALLAH"
        delay={600}
        flexWitdth={"center w70"}
        odEven={"nameEven"}
      />
      <AnimatedText
        text="FULLSTACK"
        delay={2100}
        flexWitdth={"start w70"}
        odEven={"nameOdd"}
      />
      <AnimatedText
        text="DEVELOPER"
        delay={3450}
        flexWitdth={"end w70"}
        odEven={"nameEven"}
      />
    </div>
  );
};

export default Hero;
