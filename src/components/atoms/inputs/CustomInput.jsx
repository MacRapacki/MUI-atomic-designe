import React from "react";

import { FormControl, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../../../utilis/theme";

const useStyles = makeStyles({
  textInput: {
    width: "100%",
    maxWidth: "300px",
    height: "38px",
    padding: "6px 12px",
    borderRadius: "3px",
    border: "1px solid #ced4da",
    fontSize: "16px",
    marginBottom: "30px",

    "&:focus": {
      outline: "none",
      border: " 1px solid blue",
    },
  },

  labelName: {
    fontSize: "13px",
    fontWeight: 600,
    color: theme.palette.grey.label,
    marginBottom: " 10px",
    letterSpacing: "1px",
  },
});

const CustomInput = ({ labelName, type, inputId }) => {
  const classes = useStyles(theme);

  return (
    <FormControl style={{ width: "100%" }}>
      <label ftmlFor={inputId}>
        <Typography variant="subtitle2" className={classes.labelName}>
          {labelName}{" "}
        </Typography>
      </label>
      <input type={type} id={inputId} className={classes.textInput} />
    </FormControl>
  );
};

export default CustomInput;
