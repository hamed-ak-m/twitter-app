import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  rightSidebar: {
    backgroundColor: "blue",
    width: "18%",
  },
  leftSidebar: {
    backgroundColor: "blue",
    width: "25%",
  },
  mainPart: {
    flex: 1,
    backgroundColor: "#BDC3C7",
  },
});

export default useStyles;
