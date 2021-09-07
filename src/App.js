import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./utilis/theme";

import NavBar from "./components/organisms/NavBar";
import CardInfo from "./components/molecules/CardInfo";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <CardInfo />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
