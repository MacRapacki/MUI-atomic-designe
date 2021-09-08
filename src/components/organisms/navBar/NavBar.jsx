import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import LoginButton from "../../atoms/buttons/LoginButton";
import NavLogo from "../../atoms/NavLogo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  toolbar: {
    height: "60px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: "0 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <NavLogo />
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
