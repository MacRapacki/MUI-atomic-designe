import { createTheme } from "@material-ui/core";

export const useTheme = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#4772d9" },
    },
  });

  return theme;
};
