import React from "react";

import { FormControl, InputLabel, Input } from "@material-ui/core";

const InputCheckbox = ({ labelName }) => {
  return (
    <FormControl>
      <Input type="checkbox" id="checkobox" />
      <InputLabel ftmlFor="checkobox">{labelName}</InputLabel>
    </FormControl>
  );
};

export default InputCheckbox;
