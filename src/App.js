import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./utilis/theme";
import { makeStyles } from "@material-ui/core";

import NavBar from "./components/organisms/navBar/NavBar";
import ServerSection from "./components/organisms/ServerSection";

import BgImage from "./images-svg/bg-white.png";

const useStyles = makeStyles({
  main: {
    width: "100%",
    minHeight: "100vh",
    background: `linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url(${BgImage})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "15px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <main className={classes.main}>
          <ServerSection />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
