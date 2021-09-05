import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { useTheme } from "./utilis/useTheme";

import NavBar from "./components/organisms/NavBar";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
