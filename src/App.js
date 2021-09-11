import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./utilis/theme";
import { makeStyles } from "@material-ui/core";

import NavBar from "./components/organisms/navBar/NavBar";
import ServerPage from "./pages/ServerPage";

import BgImage from "./images-svg/bg-white.png";

const useStyles = makeStyles({
  main: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // flexWrap: "wrap",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <main className={classes.main}>
          <ServerPage />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
