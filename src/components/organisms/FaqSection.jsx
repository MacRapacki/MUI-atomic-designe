import React from "react";

import { makeStyles } from "@material-ui/core";

import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
});

const FaqSection = () => {
  const classes = useStyles();

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
      ></Box>
    </section>
  );
};

export default FaqSection;
