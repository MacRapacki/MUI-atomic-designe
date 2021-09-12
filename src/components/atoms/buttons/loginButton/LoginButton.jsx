import React from "react";

import useStyles from "./useStyles";

import LockIcon from "@material-ui/icons/Lock";
import { Button, Typography } from "@material-ui/core";

const LoginButton = () => {
  const classes = useStyles();
  return (
    <Button className={classes.loginButton}>
      <LockIcon color="primary" className={classes.loginIcon} />
      <Typography color="primary" variant="button">
        Login
      </Typography>
    </Button>
  );
};

export default LoginButton;
