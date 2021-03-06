import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "18%",
    padding: "1.5rem 1rem",
  },
  logoPlace: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoType: {
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
    marginRight: "0.8rem",
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
    fontSize: "1rem",
    color: "black",
  },
  tagItemParent: {
    marginBottom: "0.1rem",
    padding: "0.15rem !important",
    width: "100%",
    marginRight: "0.2rem",
    color: theme.palette.primary.main,
    borderBottomLeftRadius: "2rem",
    borderTopLeftRadius: "2rem",
  },
  tagImg: {
    width: "1.8rem",
    height: "1.8rem",
  },
}));

export default useStyles;
