import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import LoginButton from "../atoms/LoginButton";
import NavLogo from "../atoms/NavLogo";

const NavBar = () => {
  return (
    <AppBar
      style={{
        height: " 60px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: "15px 30px",
      }}
    >
      <Toolbar>
        <NavLogo />
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
