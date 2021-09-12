import { makeStyles } from "@material-ui/styles";
import theme from "../../../../utilis/theme";

const useStyles = makeStyles({
  faqButton: {
    height: "40px",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    cursor: "pointer",
    textAlign: "center",

    "&.active": {
      color: theme.palette.primary.main,

      "&:focus": {
        border: ` 1px solid ${theme.palette.primary.main}`,
      },
    },
  },
});

export default useStyles;
