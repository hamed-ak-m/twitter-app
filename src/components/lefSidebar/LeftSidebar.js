import React from "react";
import { ButtonBase, Divider, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const Twitters = ({ name, username, img }) => {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.Button}>
      <Grid container direction={"row"} className={classes.twitterItem}>
        <img alt={""} src={img} style={{ width: "3rem", height: "3rem" }} />

        <Grid
          item
          container
          direction={"column"}
          className={classes.twitterNameParent}
        >
          <Typography className={classes.twitterName}>{name}</Typography>
          <Typography className={classes.twitterUsername}>
            {username}
          </Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

const twitter = [
  // {
  //   name: "Xiaomi",
  //   username: "@xiaomi",
  //   img: "/images/xiaomi.png",
  // },
  // {
  //   name: "Samsung",
  //   username: "@samsung",
  //   img: "/images/samsung.png",
  // },
  // {
  //   name: "بیل گیتس",
  //   username: "@billgates",
  //   img: "/images/bil.png",
  // },
  // {
  //   name: "مایک بای",
  //   username: "@mike_IMC",
  //   img: "/images/mike.png",
  // },
  // {
  //   name: "شرلی ونگ",
  //   username: "@sherlyweng",
  //   img: "/images/shily.png",
  // },
];

const LeftSidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction={"row-reverse"}>
        <img
          alt={""}
          src={"/images/elemental2.png"}
          style={{ width: "3rem", height: "3rem" }}
        />

        <Grid item container direction={"column"} className={classes.profText}>
          <Typography className={classes.profName}>Elemental</Typography>
          <Typography className={classes.profUsername}>Elemental01</Typography>
        </Grid>
      </Grid>
      <Grid container direction={"column"} className={classes.twittersroot}>
        <Typography className={classes.twittersListTitle}>
          بهترین خبرنگاران
        </Typography>
        <Divider style={{ marginLeft: -20, marginRight: -20 }} />
        {twitter.map((item, index) => {
          return (
            <Link to={"/users/" + item.name}>
              <Twitters
                name={item.name}
                username={item.username}
                img={item.img}
              />
              {index !== twitter.length - 1 && (
                <Divider style={{ marginLeft: -20, marginRight: -20 }} />
              )}
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default LeftSidebar;
