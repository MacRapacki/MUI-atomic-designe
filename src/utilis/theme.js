import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: "#4772d9" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: {
      fontSize: "64px",
    },
    h3: {
      fontSize: "20px",
    },
    subtitle1: { fontSize: "16px" },
  },
});

export default theme;
