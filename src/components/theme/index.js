import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "arial !important",
        fontSize: "2rem !important",
      },
    },
  },
});

export default theme;
