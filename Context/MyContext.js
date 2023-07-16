import { createContext, useEffect, useState } from "react";

const styleContext = createContext();

export const Layout = ({ children }) => {
  const [selected, setselected] = useState(0);
  const [bgColor, setbgColor] = useState("red");
  const [mobileDepassed, setmobileDepassed] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    // Update the isMobile state whenever the window is resized
    const handleResize = () => {
      setisMobile(window.innerWidth <= 920);
    };

    // Check if window object is available (client-side)
    if (typeof window !== "undefined") {
      setisMobile(window.innerWidth <= 920);
      window.addEventListener("resize", handleResize);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <styleContext.Provider
      value={{
        selected,
        setselected,
        bgColor,
        setbgColor,
        mobileDepassed,
        setmobileDepassed,
        isMobile,
      }}
    >
      {children}
    </styleContext.Provider>
  );
};

export default styleContext;
