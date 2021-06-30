import React, { useState, useEffect } from "react";
import "./NavStyle.css";
import logo from "../../ife.png";

function NavigationBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Netflix Logo" />
      {/* <img className="nav_avatar" src={logo} alt="Netflix Logo" /> */}
    </div>
  );
}

export default NavigationBar;
