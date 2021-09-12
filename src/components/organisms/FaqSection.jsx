import React, { useState } from "react";

import { makeStyles, Typography } from "@material-ui/core";

import { Box } from "@material-ui/core";
import FaqButton from "../atoms/buttons/faqButton/FaqButton";
import CustomAccordion from "../atoms/accordion/CustomAccordion";

const useStyles = makeStyles({
  section: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    paddingBottom: "30px",
  },
  buttonsWrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: " space-around",
    flexWrap: "wrap",
    marginBottom: "50px",
    padding: " 40px 20px 25px 20px",
  },

  accordionWrapper: {
    width: "100%",
    marginBottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const buttonsAndContent = [
  { name: "FreeSHOUTcast" },
  { name: "AutoDJ" },
  { name: "Live Stream" },
  { name: "Limits" },
];

const FaqSection = () => {
  const classes = useStyles();

  const [activeButton, setActiveButton] = useState(0);

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
        <Typography variant="h4">Frequently Asked Questions:</Typography>
        <Box className={classes.buttonsWrapper}>
          {buttonsAndContent.map((item, index) => {
            return (
              <FaqButton
                key={index}
                name={item.name}
                index={index}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            );
          })}
        </Box>
        <Box className={classes.accordionWrapper}>
          <CustomAccordion />
          <CustomAccordion />
        </Box>
      </Box>
    </section>
  );
};

export default FaqSection;
