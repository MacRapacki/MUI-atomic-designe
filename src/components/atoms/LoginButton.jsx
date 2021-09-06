import React from "react";

import { styled } from "@material-ui/styles";

import LockIcon from "@material-ui/icons/Lock";
import { Button, Typography } from "@material-ui/core";

const MyLoginButton = styled(Button)({
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
});

const LoginIcon = styled(LockIcon)({
  height: "16px",
  backgroundColor: "transparent",
});

const LoginButton = () => {
  return (
    <MyLoginButton>
      <LoginIcon color="primary" />
      <Typography color="primary" variant="button">
        Login
      </Typography>
    </MyLoginButton>
  );
};

export default LoginButton;
