import theme from "../../theme";

const style = {
  img: {
    height: 240,
    [theme.breakpoints.down("sm")]: {
      height: 500,
    },
  },
  header: {},
  footer: {},

  btnAction: {
    display: "flex",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: theme.palette.green.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
};

export default style;
