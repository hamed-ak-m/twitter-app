import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";

const RightSidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction={"row"} alignItems={"center"}>
        <grid item>
          <img alt={""} src={"images/logo.png"} />
        </grid>
        <grid item>
          <Typography className={classes.logoType}>توییتر فارسی</Typography>
        </grid>
      </Grid>
      <Typography className={classes.hashtagTitle}>داغ ترین هشتگ ها</Typography>
      <Grid container direction={"column"}>
        <Grid item container direction={"row"} alignItems={"center"}>
          <Grid item>
            <img alt={""} src={"images/hashtag.png"} />
          </Grid>
          <Grid item>
            <Typography className={classes.tagItem}>هشتگ_جدید</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightSidebar;
