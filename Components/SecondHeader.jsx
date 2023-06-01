import Image from "next/image";
import React from "react";

const SecondHeader = () => {
  return (
    <div className="text-white secondHeaderContainer d-flex justify-content-start align-items-center flex-column">
      <img src={"/test.png"} height={"100%"} className="myImage" />
      <div className=" w100 d-flex align-items-center pt-3">
        <div className="z2 f30 bold ms-5">Sami.GH</div>
        <div className="d-lg-flex justify-content-end flex-1  z2 me-5 hideMobile">
          <div className="medium f20 pointer headerLink">home</div>
          <div className="medium f20 pointer headerLink">About</div>
          <div className="medium f20 pointer headerLink">Portfolio</div>
          <div className="medium f20 pointer headerLink">Contact</div>
        </div>
      </div>

      <div className="secondHeaderInline  d-flex w100 h100">
        <div className="w20  d-lg-flex justify-content-center align-items-center flex-column hideMobile">
          <div className="reseauLine"></div>
          <div className="my-4">
            <div>
              <Image src="/socialMedia/linkedin.png" width={30} height={30} />
            </div>
            <div>fb</div>
            <div>fb</div>
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
