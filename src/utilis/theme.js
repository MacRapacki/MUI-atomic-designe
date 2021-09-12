import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: "#4772d9" },
    grey: { label: "#555555" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "22px",
    },
    h2: {
      fontSize: "64px",
    },
    h3: {
      fontSize: "20px",
    },
    h4: { fontSize: "24px" },
    h5: { fontSize: "14px" },
    subtitle1: { fontSize: "16px" },
    subtitle2: { fontSize: "13px" },
  },
});

export default theme;
