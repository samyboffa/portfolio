import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AnimatedText = ({ text = "SAMI", delay = 0, flexWitdth, odEven }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timer;

    const startTypingAnimation = () => {
      let currentIndex = 0;
      timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, 150); // Adjust the speed as desired
    };

    const delayTimer = setTimeout(() => {
      startTypingAnimation();
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`d-flex justify-content-${flexWitdth}`}>
      <h1 className={`${odEven} titleSize bolder HeroTitle`}>{displayText}</h1>
    </div>
  );
};

export default AnimatedText;
