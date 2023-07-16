import React from "react";
import ColorCircle from "./Common/ColorCircle";

const About = () => {
  return (
    <div
      id="aboutTag"
      className="text-white d-flex align-items-center justify-content-center gap-3 position-relative aboutContainer wm100"
    >
      <ColorCircle width="1000" height="700" top={10} left={60} />
      <ColorCircle
        color={"rgba(77, 159, 12, 0.1)"}
        top={0}
        left={-10}
        width="700"
      />
      <div className="hideMobile w50">
        <div className="w100 d-flex align-items-center justify-content-end aboutImageContainer wm0 hideMobile">
          <div className="aboutImage hideMobile"></div>
        </div>
      </div>

      <div className="w50 leftAbout px-2 wm100">
        <h4 className="aboutTitle wm100 translate20">
          About <br />
          me
        </h4>
        <p className="w70 aboutText wm100 text-justify">
          With more than <strong>5 years</strong> of experience as a senior web
          developer, I specialize in creating <strong>websites</strong> ,{" "}
          <strong>mobile applications</strong>, and
          <strong> SaaS platforms</strong>. I also have expertise in crafting{" "}
          <strong>web scraping</strong> and integrating{" "}
          <strong>modern AI</strong> capabilities. Additionally, I have a
          passion for mentoring and have experience in guiding and{" "}
          <strong>teaching</strong> students. Explore my portfolio to see
          examples of my work and let's collaborate to bring your
          <strong> ideas</strong> to life.
        </p>
      </div>
    </div>
  );
};

export default About;
