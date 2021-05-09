import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";

const hashtags = [
  "هشتگ_جدید",
  "کرونا",
  "corona_virus",
  "کریپتو",
  "Specex",
  "Tesla",
  "DogeCoin",
];

const RightSidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={"/"}>
        <Grid
          container
          className={classes.logoPlace}
          direction={"row"}
          alignItems={"center"}
        >
          <Grid item>
            <img alt={""} src={"/images/logo.png"} />
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>توییتر فارسی</Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hashtagTitle}>داغ ترین هشتگ ها</Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {hashtags.map((item) => {
          return (
            <ButtonBase className={classes.tagItemParent}>
              <Link to={"/hashtag/" + item} style={{ width: "100%" }}>
                <Grid item container direction={"row"} alignItems={"center"}>
                  <img
                    className={classes.tagImg}
                    alt={""}
                    src={"/images/hashtag.png"}
                  />
                  <Typography className={classes.tagItem}>{item}</Typography>
                </Grid>
              </Link>
            </ButtonBase>
          );
        })}
      </Grid>
    </div>
  );
};

export default RightSidebar;
