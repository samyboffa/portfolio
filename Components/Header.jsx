import React from "react";

const Header = () => {
  return (
    <div className="headerContainer px-4">
      <div className="bold f26 pointer">Sami.GH</div>
      <a
        className="bold f18 pointer alignC gap-1 text-decoration-none hover"
        href="https://calendly.com/samigharsallah/30min"
        target="_blank"
      >
        <img src="/icons/meet.png" alt="" width={20} />
        Book Meeting
      </a>
    </div>
  );
};

export default Header;
