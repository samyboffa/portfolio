import { createContext, useState } from "react";

const styleContext = createContext();

export const Layout = ({ children }) => {
  const [selected, setselected] = useState(0);
  const [bgColor, setbgColor] = useState("red");
  const [mobileDepassed, setmobileDepassed] = useState(false);

  return (
    <styleContext.Provider
      value={{
        selected,
        setselected,
        bgColor,
        setbgColor,
        mobileDepassed,
        setmobileDepassed,
      }}
    >
      {children}
    </styleContext.Provider>
  );
};

export default styleContext;
