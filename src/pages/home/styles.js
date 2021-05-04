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
  divider: {
    backgroundColor: "#7EBAFF",
    filter: "Opacity(0.4)",
  },
  newTweet: {
    padding: "1.1rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tweetItem: {
    padding: "1.1rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "0.5rem",
  },
  tweetItemName: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginRight: "0.5rem",
  },
  tweetItemUsename: {
    fontSize: "0.8rem",
    color: theme.palette.text.hint,
    marginRight: "0.5rem",
    direction: "ltr",
    paddingTop: "0.3rem",
  },
  tweetText: {
    marginRight: "0.5rem",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
  likeCount: {
    fontSize: "0.9rem",
    color: theme.palette.text.hint,
    marginLeft: "0.5rem",
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: "0.4rem",
    borderRadius: "0.5rem",
    fontSize: "0.9rem",
    marginRight: "1rem",
    border: "none",
    flex: 1,
    "&:focus": {
      outline: "unset",
    },
    height: "5rem",
  },
  newTweetbtn: {
    fontSize: "1rem !important",
    color: "white !important",
    borderRadius: "1.5rem !important",
    minHeight: "2.5rem !important",
    height: "2.5rem !important",
    fontFamily: "shabnam !important",
    lineHeight: "1.5rem !important",
    minWidth: "5.5rem !important",
  },
  newTweetImg: {
    padding: "0.2rem !important",
  },

  newTweetImgBtn: {
    border: "0.5px solid #3334 !important",
    borderRadius: "50% !important",
    padding: "unset",
    marginLeft: "0.5rem !important",
  },
}));

export default useStyles;
