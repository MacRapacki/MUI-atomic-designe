import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import LoginButton from "../atoms/buttons/LoginButton";
import NavLogo from "../atoms/NavLogo";
import { styled } from "@material-ui/styles";

const StyledToolbar = styled(Toolbar)({
  height: "60px",
  backgroundColor: "rgba(255, 255, 255, 1)",
  padding: "0 30px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const NavBar = () => {
  return (
    <AppBar position="relative">
      <StyledToolbar>
        <NavLogo />
        <LoginButton />
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
