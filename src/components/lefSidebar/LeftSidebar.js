import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const LeftSidebar = () => {
  const classes = useStyles();

  return <div className={classes.root}> left side bar</div>;
};

export default LeftSidebar;
