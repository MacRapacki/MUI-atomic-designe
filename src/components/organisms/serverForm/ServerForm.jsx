import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../../../utilis/theme";

import CustomInput from "../../atoms/inputs/CustomInput";

const useStyles = makeStyles({
  container: {
    maxWidth: " 520px",
    backgroundColor: "rgba(251, 251, 251, 0.55)",
    padding: "25px",
    border: " 1px solid rgba(0, 0, 0, 0.07)",
  },
});

const ServerForm = () => {
  const classes = useStyles(theme);
  return (
    <Box display="flex" justifyContent="center" className={classes.container}>
      <form>
        <Typography variant="h1" paragraph>
          GET YOUR{" "}
          <Typography variant="span" color="primary">
            FREE{" "}
          </Typography>
          RADIO SERVER
        </Typography>
        <Typography variant="subtitle1">
          {" "}
          No Card - 100% Free. Start Your Online Radio Station Today!
        </Typography>

        <CustomInput
          className={classes.textInput}
          labelName="Username"
          inputId="username"
          type="text"
        />
        <CustomInput
          className={classes.textInput}
          labelName="Email"
          inputId="email"
          type="text"
        />
        <CustomInput
          className={classes.textInput}
          labelName="Password"
          inputId="password"
          type="password"
        />
        <CustomInput
          className={classes.textInput}
          labelName="Confirm Password"
          inputId="confPassword"
          type="password"
        />
      </form>
    </Box>
  );
};

export default ServerForm;
