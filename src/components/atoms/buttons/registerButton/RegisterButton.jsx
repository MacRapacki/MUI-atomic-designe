import React from "react";

import useStyles from "./useStyles";

import { Button, Typography } from "@material-ui/core";

const RegisterButton = () => {
  const classes = useStyles();
  return (
    <Button className={classes.registerButton}>
      <Typography variant="subtitle1" className={classes.button}>
        REGISTER NOW
      </Typography>
    </Button>
  );
};

export default RegisterButton;
