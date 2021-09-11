import React from "react";

import { makeStyles } from "@material-ui/styles";

import BgImage from "../../images-svg/bg-white.png";

import { Box } from "@material-ui/core";
import CardInfo from "../molecules/CardInfo";
import ServerForm from "../molecules/serverForm/ServerForm";

const useStyle = makeStyles({
  section: {
    width: "100%",
    padding: "15px",
    background: `linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url(${BgImage})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});

const ServerSection = () => {
  const classes = useStyle();
  return (
    <section className={classes.section}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        maxWidth="1200px"
        width="100%"
        margin="0 auto"
      >
        <CardInfo />
        <ServerForm />
      </Box>
    </section>
  );
};

export default ServerSection;
