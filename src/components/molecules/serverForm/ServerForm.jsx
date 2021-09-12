import React from "react";

import { makeStyles } from "@material-ui/styles";
import theme from "../../../utilis/theme";

import { Box, Link, Typography } from "@material-ui/core";
import CustomInput from "../../atoms/inputs/CustomInput";
import AgreeCheckbox from "../../atoms/inputs/AgreeCheckbox";
import RegisterButton from "../../atoms/buttons/registerButton/RegisterButton";

const useStyles = makeStyles({
  container: {
    width: "100%",
    minWidth: "300px",
    maxWidth: "520px",
    backgroundColor: "rgba(251, 251, 251, 0.55)",
    padding: "25px",
    border: "1px solid rgba(0, 0, 0, 0.07)",
  },

  title: {
    letterSpacing: "1px",
    fontWeight: 700,
    margin: 0,
  },

  subtitle: {
    marginBottom: "35px",
    color: theme.palette.grey.label,
    letterSpacing: "1px",
  },

  bottomItalicText: {
    fontSize: "12px",
    color: theme.palette.grey.label,
    fontStyle: "italic",
    opacity: "0.8",
  },

  bottomItalicTextLink: {
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
});

const ServerForm = () => {
  const classes = useStyles(theme);
  return (
    <Box display="flex" justifyContent="center" className={classes.container}>
      <form>
        <Typography variant="h1" paragraph className={classes.title}>
          GET YOUR{" "}
          <Typography variant="span" color="primary">
            FREE{" "}
          </Typography>
          RADIO SERVER
        </Typography>

        <Typography variant="subtitle1" className={classes.subtitle}>
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
        <AgreeCheckbox />
        <RegisterButton />
        <Typography className={classes.bottomItalicText}>
          Free Service Provided by{" "}
          <Link
            href="https://fastcast4u.com/"
            className={classes.bottomItalicTextLink}
          >
            Fastcast4u.com
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default ServerForm;
