import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    maxWidth: "450px",
    display: "grid",
    placeItems: "center",
    borderLeft: "1px solid #ddd",
    borderRight: "1px solid #ddd",

    "&:nth-last-child(n+2)": {
      borderBottom: "1px dotted #ddd",
    },

    "&:nth-child(1)": {
      borderTop: "1px solid #ddd",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },

    "&:nth-last-child(1)": {
      borderBottom: "1px solid #ddd",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
  },

  customAccordion: {
    width: "100%",
    maxWidth: "450px",
    padding: "15px 15px 15px 36px",
    backgroundColor: "transparent",
    boxShadow: "none",

    "&.Mui-expanded": {
      margin: "0",
    },
  },
  summary: {
    // borderBottom: "1px dotted black",
  },
  questionTitle: {
    fontWeight: "bold",
    cursor: "pointer",
    color: "#444",
  },
});

export default useStyles;
