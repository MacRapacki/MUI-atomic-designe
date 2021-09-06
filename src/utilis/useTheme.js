import { createTheme } from "@material-ui/core";

export const useTheme = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#4772d9" },
    },
    typography:{
      h2: { 
        fontSize: "64px", },
      h3: { 
        fontSize: "20px", },
    }
  });

  return theme;
};
