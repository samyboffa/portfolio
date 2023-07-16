import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import styleContext from "../Context/MyContext";

const SecondHeader = () => {
  const mobileRef = useRef();

  const { mobileDepassed, setmobileDepassed } = useContext(styleContext);

  const scrollHandler = () => {
    const rect = mobileRef.current.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setmobileDepassed(false);
    } else {
      setmobileDepassed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToElement = (id) => {
    const container = document.getElementById(id);
    container.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={mobileRef}
      className="text-white secondHeaderContainer d-flex justify-content-start align-items-center flex-column"
    >
      <img src={"/test3.png"} height={"100%"} className="myImage" />
      <div className=" w100 d-flex align-items-center pt-3">
        <div className="z2 f30 bold ms-5">Sami.GH</div>
        <div className="d-lg-flex justify-content-end flex-1 gap-5 z2 me-5 hideMobile">
          {/* <div className="medium f20 pointer headerLink">home</div> */}
          <div
            className="medium f20 pointer headerLink hover"
            onClick={() => scrollToElement("aboutTag")}
          >
            About
          </div>
          <div
            className="medium f20 pointer headerLink hover"
            onClick={() => scrollToElement("projectsTag")}
          >
            Projects
          </div>
          <div
            className="medium f20 pointer headerLink hover"
            onClick={() => scrollToElement("skillsTag")}
          >
            Skills
          </div>
        </div>
      </div>

      <div className="secondHeaderInline d-flex w100 h100">
        <div className="w20  d-lg-flex justify-content-center align-items-center flex-column hideMobile">
          <div className="reseauLine"></div>
          <div className="my-4 d-flex flex-column gap-2">
            <a
              className="pointer t02 socialMediaIcon"
              href="https://www.linkedin.com/in/samighdevweb/"
              target="_blank"
            >
              <Image src="/socialMedia/linkedin.png" width={30} height={30} />
            </a>
            <a
              className="pointer t02 socialMediaIcon"
              href="https://github.com/samyboffa"
              target="_blank"
            >
              {" "}
              <Image src="/socialMedia/github.png" width={30} height={30} />
            </a>
            <a
              className="pointer t02 socialMediaIcon"
              href="https://www.facebook.com/samy.boffa"
              target="_blank"
            >
              {" "}
              <Image src="/socialMedia/facebook.png" width={30} height={30} />
            </a>
          </div>
          <div className="reseauLine"></div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h2 className="inlineTitle">Sami Gharsallah</h2>
          <h3 className="inlineSubtitle">Senior Web Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
