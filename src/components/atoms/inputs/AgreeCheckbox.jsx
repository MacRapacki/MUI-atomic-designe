import React from "react";

import { makeStyles } from "@material-ui/styles";
import theme from "../../../utilis/theme";

import { FormControl, Typography, Link } from "@material-ui/core";

const useStyle = makeStyles({
  formTerms: {
    width: "100%",
    maxWidth: "300px",
    height: "19px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "35px",
  },

  box: {
    width: "13px",
    height: "13px",
    margin: "0 3px 0 0",
  },

  labelName: {
    letterSpacing: "1px",
    margin: 0,
    fontWeight: 600,
    color: theme.palette.grey.label,
  },

  labelLink: {
    textDecoration: "none",
    cursor: "pointer",
  },
});

const AgreeCheckbox = () => {
  const classes = useStyle(theme);
  return (
    <FormControl className={classes.formTerms}>
      <input type="checkbox" id="checkobox" className={classes.box} />
      <label ftmlFor="checkobox">
        <Typography variant="subtitle2" className={classes.labelName}>
          I Agree To{" "}
          <Link href="https://freeshoutcast.com/tos">The Terms Of Service</Link>
        </Typography>
      </label>
    </FormControl>
  );
};

export default AgreeCheckbox;
