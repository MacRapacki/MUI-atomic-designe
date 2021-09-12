import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    width: "100%",
    maxWidth: "370px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: " space-around",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.075)",
    borderRadius: "3px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
    margin: "10px 0 24px 0",
    padding: "20px",
    textAlign: "center",
  },

  cardLink: {
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
});

export default useStyles;
