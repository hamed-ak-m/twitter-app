import React from "react";
import useStyles from "./styles";
import RightSidebar from "../rightSidebar/RightSidebar";
import { Divider } from "@material-ui/core";
import LeftSidebar from "../lefSidebar/LeftSidebar";
import Home from "../../pages/home/Home";
import TweetsByHashTag from "../../pages/tweetsByHashTag/TweetsByHashTag";
import TweetsByTweeter from "../../pages/tweetsByTweeter/TweetsByTweeter";

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RightSidebar />
      <Divider orientation={"vertical"} className={classes.divider} />
      <div className={classes.container}>
        <TweetsByTweeter />
      </div>
      <Divider orientation={"vertical"} className={classes.divider} />
      <LeftSidebar />
    </div>
  );
};

export default Layout;
