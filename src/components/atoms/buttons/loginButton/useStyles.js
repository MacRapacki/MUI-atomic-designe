import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  loginButton: {
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  loginIcon: {
    height: "16px",
    backgroundColor: "transparent",
  },
});

export default useStyles;
