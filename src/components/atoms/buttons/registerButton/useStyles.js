import { makeStyles } from "@material-ui/styles";
import theme from "../../../../utilis/theme";

const useStyles = makeStyles({
  registerButton: {
    width: "180px",
    height: "46px",
    borderRadius: "24px",
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
    letterSpacing: "1px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "25px",

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },

  buttonText: {
    fontWeight: "bold",
  },
});

export default useStyles;
