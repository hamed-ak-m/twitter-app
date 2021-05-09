import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton, Typography } from "@material-ui/core";

const Tweet = ({ data }) => {
  const classes = useStyles();

  const renderTweet = (text) => {
    return {
      __html: text.replace(
        /#\S+/g,
        "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>"
      ),
    };
  };

  return (
    <div>
      <div className={classes.tweetItem}>
        <Grid container style={{ flexWrap: "nowrap" }}>
          <img
            alt={""}
            src={data.sender.img}
            style={{ width: "3.5rem", height: "3.5rem" }}
          />
          <Grid item container direction={"column"}>
            <Grid item container>
              <Typography className={classes.tweetItemName}>
                {data.sender.name}
              </Typography>
              <Typography className={classes.tweetItemUsename}>
                {data.sender.username}
              </Typography>
            </Grid>
            <Typography
              dangerouslySetInnerHTML={renderTweet(data.text)}
              className={classes.tweetText}
              component={"p"}
            ></Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row-reverse"}
          style={{ marginTop: "1rem", alignItems: "center" }}
        >
          <IconButton
            style={{ color: "#5ea9dd" }}
            className={classes.newTweetImgBtn}
          >
            <img
              alt={""}
              src={"/images/retweet.png"}
              className={classes.newTweetImg}
            />
          </IconButton>
          <IconButton
            style={{ color: "#5ea9dd" }}
            className={classes.newTweetImgBtn}
          >
            <FavoriteIcon style={{ color: "red", padding: "0.2rem" }} />
          </IconButton>
          <Typography className={classes.likeCount}>{data.likes}</Typography>
        </Grid>
      </div>
    </div>
  );
};

export default Tweet;
