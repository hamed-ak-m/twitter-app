import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "18%",
    padding: "1.5rem 1rem",
  },
  logoType: {
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
    marginRight: "1.2rem",
    color: theme.palette.primary.main,
  },
  hashtagTitle: {
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    marginTop: "2.25rem",
    marginBottom: "1.1rem",
  },
  tagItem: {
    marginRight: "0.25rem",
    fontSize: "0.8rem",
  },
  tagItemParent: {
    marginBottom: "0.1rem",
    padding: "0.15rem !important",
    width: "100%",
    marginRight: "0.2rem",
  },
  tagImg: {
    width: "1.5rem",
    height: "1.5rem",
  },
}));

export default useStyles;
