import React, { useContext } from "react";
import styleContext from "../Context/MyContext";

const Header = () => {
  const { selected } = useContext(styleContext);
  return (
    <div className="headerContainer">
      <div className="h100vh">
        <div className="bold f18 pointer">Sami GHARSALLAH</div>
        <div className="bold f18 pointer">About</div>
      </div>
    </div>
  );
};

export default Header;
