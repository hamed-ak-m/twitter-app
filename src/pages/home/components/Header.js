import React from "react";
import HomeIcone from "@material-ui/icons/Home";
import { Typography } from "@material-ui/core";
import useStyles from "../styles";
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <HomeIcone />
      <Typography className={classes.headerTitle}>خانه</Typography>
    </div>
  );
};

export default Header;
