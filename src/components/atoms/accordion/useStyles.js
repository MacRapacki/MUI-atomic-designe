import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  customAccordion: {
    width: "100%",
    maxWidth: "450px",
    border: "1px solid #ddd",
    borderBottom: "1px dotted #ddd",
    padding: "15px 15px 15px 36px",

    "&.Mui-expanded": {
      margin: "0",
      borderBottom: "1px dotted #ddd",
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
