import React, { Component } from "react";
import Logo from "../assets/logo/Logo-brainflix.svg";
import NavImg from "../assets/images/Mohan-muruge.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="nav-bar">
        <div className="nav-bar__input-box">
          <img className="nav-bar__logo" src={Logo} alt="img" />
        </div>
        <div className="nav-bar__box">
          <input
            className="nav-bar__input"
            type=""
            name=""
            placeholder="Search"
          ></input>
          <div className="nav-bar__button-and-image">
            <button className="nav-bar__button" type="">
              UPLOAD
            </button>
            <img className="nav-bar__image" src={NavImg} alt="img" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
