import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
const NewTweet = () => {
  const classes = useStyles();

  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img
          alt={""}
          src={"images/elemental2.png"}
          style={{ width: "3.5rem", height: "3.5rem" }}
        />
        <textarea placeholder={"توییت کن..."} className={classes.input} />
      </Grid>
      <Grid
        container
        direction={"row-reverse"}
        style={{ marginTop: "1rem", alignItems: "center" }}
      >
        <Button
          variant={"contained"}
          className={classes.newTweetbtn}
          color={"primary"}
        >
          توییت
        </Button>
        <IconButton
          style={{ color: "#5ea9dd" }}
          className={classes.newTweetImgBtn}
        >
          <img
            alt={""}
            src={"images/tweetpic.png"}
            className={classes.newTweetImg}
          />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTweet;
