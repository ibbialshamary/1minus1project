import React from "react";
import classes from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div className={classes["nav__items"]}>
          <div className={classes["nav__items__logo"]}>
            <img src={logo} alt="" />
          </div>
          <div className={classes["nav__items__anchors"]}>
            <a href="https://www.google.com/">About</a>
            <a href="https://www.google.com/">Our Games</a>
            <a href="https://www.google.com/">Careers</a>
            <a href="https://www.google.com/">News</a>
            <a href="https://www.google.com/">Ventures</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
