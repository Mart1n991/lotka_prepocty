import React from "react";
import logo from "../assets/logo.png";
import classes from "./header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt="Logo sladkosti od Lotty" className={classes.logo} />
    </div>
  );
}
