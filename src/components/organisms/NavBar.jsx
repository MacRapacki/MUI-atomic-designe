import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import LoginButton from "../atoms/LoginButton";
import NavLogo from "../atoms/NavLogo";

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar
        style={{
          height: "60px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          padding: "0 30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <NavLogo />
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
