import React from "react";

import { makeStyles } from "@material-ui/styles";
import theme from "../../../utilis/theme";

import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  registerButton: {
    width: "180px",
    height: "46px",
    borderRadius: "24px",
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
    letterSpacing: "1px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "25px",

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },

  button: {
    fontWeight: "bold",
  },
});

const RegisterButton = () => {
  const classes = useStyles(theme);
  return (
    <Button className={classes.registerButton}>
      <Typography variant="subtitle1" className={classes.button}>
        REGISTER NOW
      </Typography>
    </Button>
  );
};

export default RegisterButton;
