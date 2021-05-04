import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    overflowY: "auto",
  },

  divider: {
    height: "100%",
    width: 1,
    backgroundColor: "#7EBAFF !important",
    filter: "opacity(0.5)",
  },
});

export default useStyles;
