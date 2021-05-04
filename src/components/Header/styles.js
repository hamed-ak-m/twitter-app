import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e6e6e6",
  },
  header: {
    padding: "1.1rem",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "bold !important",
    marginRight: "0.5rem",
  },
}));

export default useStyles;
