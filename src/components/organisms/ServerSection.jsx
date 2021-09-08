import React from "react";

import { makeStyles } from "@material-ui/styles";

import { Box } from "@material-ui/core";
import CardInfo from "../molecules/CardInfo";
import ServerForm from "../molecules/serverForm/ServerForm";

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
});

const ServerSection = () => {
  return (
    <section>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="1200px"
      >
        <CardInfo />
        <ServerForm />
      </Box>
    </section>
  );
};

export default ServerSection;
