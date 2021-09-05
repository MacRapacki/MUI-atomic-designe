import React from "react";

import Logo from "../../images-svg/logo.png";

import { Link } from "@material-ui/core";

const NavLogo = () => {
  return (
    <Link href="#">
      <img src={Logo} alt="logo" style={{ height: "100%" }} />
    </Link>
  );
};

export default NavLogo;
