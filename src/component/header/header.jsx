import React from "react";
import "./header.css";

const Header = ({ page }) => {
  return (
    <div className="header">
      <div className="header__navigator">
        <div className="header__primary">Home</div>
        {page.split("/").map((cur) => (
          <span key={cur}>
            <div className="header__spliter">{" > "}</div>
            <div className="header__secondary">{cur}</div>
          </span>
        ))}
        <div className="header__login">Logged in as Mohammed Laniyan</div>
      </div>
      <div className="header__title">{page}</div>
    </div>
  );
};

export default Header;
