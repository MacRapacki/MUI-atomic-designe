import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";

import useStyles from "./useStyles";

const CustomAccordion = () => {
  const classes = useStyles();

  const [idExpanded, setIdExpanded] = useState(1);

  const handleExpand = () => {};

  return (
    <div className={classes.wrapper}>
      <Accordion
        className={classes.customAccordion}
        expanded={true}
        onClick={handleExpand}
      >
        <AccordionSummary className={classes.summary}>
          <Typography variant="h5" className={classes.questionTitle}>
            a
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">aaa</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
