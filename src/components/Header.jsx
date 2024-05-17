import React from "react";
import logo from "../assets/react.svg";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__menu">
            <a href="/">{title}</a>
            <a href="/">catalog</a>
            <a href="/">about</a>
            <a href="/">services</a>
            <a href="/">blog</a>
            <a href="/">contacts</a>
          </div>
          <div className="header__right">
            <span>Eng</span>
            <img src="" alt="birnarsa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
