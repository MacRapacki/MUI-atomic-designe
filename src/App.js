import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { useTheme } from "./utilis/useTheme";

import LoginButton from "./components/atoms/LoginButton";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LoginButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
