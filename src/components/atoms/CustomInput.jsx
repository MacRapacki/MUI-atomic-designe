import React from "react";

import { FormControl, InputLabel, Input } from "@material-ui/core";

const CustomInput = ({ labelName, type, inputId }) => {
  return (
    <FormControl>
      <InputLabel ftmlFor={inputId}>{labelName}</InputLabel>
      <Input type={type} id={inputId} />
    </FormControl>
  );
};

export default CustomInput;
