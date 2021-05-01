import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "20%",
    padding: "1.5rem 2rem",
  },
  twitterNameParent: {
    width: "max-content",
    direction: "rtl",
    justifyContent: "center",
    marginRight: "0.5rem",
  },
  twitterItem: {
    margin: "0.6rem 0.5rem",
    backgroundColor: "#f5f8fa",
    width: "100%",
  },
  Button: {
    borderTopRightRadius: "2rem",
    borderBottomRightRadius: "2rem",
    color: theme.palette.primary.main,
  },
  twitterName: {
    fontSize: "0.9rem !important",
    fontWeight: 550,
    direction: "ltr !important",
    color: "black",
  },
  twitterUsername: {
    color: theme.palette.text.hint,
    fontSize: "0.65rem",
  },
  profText: {
    marginLeft: "0.5rem",
    width: "max-content",
    justifyContent: "center",
    direction: "ltr !important",
  },
  profName: {
    fontSize: "0.9rem",
    fontWeight: 550,
    direction: "ltr !important",
  },
  profUsername: {
    color: theme.palette.text.hint,
    fontSize: "0.75rem",
  },
  twittersroot: {
    backgroundColor: "#f5f8fa",
    marginTop: "2rem !important",
    borderRadius: "1.5rem",
    padding: "0.7rem 1.2rem",
  },
  twittersListTitle: {
    fontWeight: "600 ",
    fontSize: "1rem ",
    padding: "0.6rem 0.1rem",
  },
}));

export default useStyles;
