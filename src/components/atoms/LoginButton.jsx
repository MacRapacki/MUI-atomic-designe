import React from "react";

import LockIcon from "@material-ui/icons/Lock";
import { Button, Typography } from "@material-ui/core";

const LoginButton = () => {
  return (
    <Button>
      <LockIcon color="primary" />{" "}
      <Typography color="primary" variant="button">
        Login
      </Typography>
    </Button>
  );
};

export default LoginButton;
