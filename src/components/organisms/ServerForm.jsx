import React from "react";

import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import CustomInput from "../atoms/CustomInput";

const Container = styled(Box)({
  maxWidth: " 520px",
  backgroundColor: "rgba(251, 251, 251, 0.55)",
  padding: "25px",
  border: " 1px solid rgba(0, 0, 0, 0.07)",
});

const ServerForm = () => {
  return (
    <Container display="flex" justifyContent="center">
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

        <CustomInput labelName="Name" inputId="username" type="text" />
      </form>
    </Container>
  );
};

export default ServerForm;
