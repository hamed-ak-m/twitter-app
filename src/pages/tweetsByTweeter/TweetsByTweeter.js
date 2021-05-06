import React from "react";
import useStyles from "../home/styles";
import Header from "../../components/Header/Header";
import { Divider } from "@material-ui/core";
import TweetList from "../home/components/TweetList";
import PersonIcon from "@material-ui/icons/Person";

const tweets = [
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 9,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 19,
  },
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 999,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 119,
  },
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 29,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 19,
  },
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 9,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 90,
  },
];

const TweetsByTweeter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={"user's name"} icon={<PersonIcon />} />
      <Divider className={classes.divider} />
      <TweetList data={tweets} />
    </div>
  );
};

export default TweetsByTweeter;
