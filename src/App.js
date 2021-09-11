import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./utilis/theme";

import NavBar from "./components/organisms/navBar/NavBar";
import ServerPage from "./pages/ServerPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <ServerPage />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
