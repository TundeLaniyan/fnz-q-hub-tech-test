import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ page, setPage }) => {
  const section = ["Students", "Pets", "Computers"];

  return (
    <div className="navigation">
      <div className="logo">LOGO</div>
      {section.map((cur) => (
        <Link
          key={cur}
          className={`section ${page.includes(cur) && "section--active"}`}
          onClick={() => setPage(cur)}
          to={`../${cur.toLowerCase()}`}
        >
          {cur}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
