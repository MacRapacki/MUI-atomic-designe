import React from "react";

import theme from "../../../../utilis/theme";

import useStyles from "./useStyles";

const FaqButton = ({ name, index, setActiveButton, activeButton }) => {
  const handleButton = (index) => {
    setActiveButton(index);
  };

  const classes = useStyles(theme);

  return (
    <button
      className={`${classes.faqButton} ${
        index === activeButton ? "active" : ""
      }`}
      onClick={() => handleButton(index)}
    >
      {name}
    </button>
  );
};

export default FaqButton;
