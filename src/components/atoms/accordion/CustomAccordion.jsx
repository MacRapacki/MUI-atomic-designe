import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";

import useStyles from "./useStyles";

const CustomAccordion = () => {
  const classes = useStyles();

  return (
    <Accordion className={classes.customAccordion}>
      <AccordionSummary className={classes.summary}>
        <Typography variant="h5" className={classes.questionTitle}>
          a
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1">aaa</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
