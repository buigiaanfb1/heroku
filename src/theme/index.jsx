import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(217, 26, 33, 0.8)",
    },
    secondary: {
      main: "#ffDD00",
    },
    green: {
      main: "#00FF00",
    },
    text: {
      primary: "#000000",
      secondary: "#045e15",
      green: "#00ff00",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
});

export default theme;
