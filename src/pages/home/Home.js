import React from "react";
import useStyles from "./styles";
import Header from "../../components/Header/Header";
import { Divider } from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import HomeIcon from "@material-ui/icons/Home";
const tweets = [
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "/images/samsung.png",
    },
    text: "توییت فارسی دارای #هشتگ برای تست سایت #react و پروژه آموزشی",
    likes: 9,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "/images/koooh_user.png",
    },
    text:
      "#Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 19,
  },
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "/images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 999,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "/images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 119,
  },
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "/images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 29,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "/images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 19,
  },
  {
    sender: {
      name: "Samsung",
      username: "@samsung",
      img: "/images/samsung.png",
    },
    text:
      "Nam condimentum vehicula velit a sodales. Quisque vel lacus eu elit cursus volutpat sit amet in nibh.",
    likes: 9,
  },
  {
    sender: {
      name: "آدم شماره 2",
      username: "@adam_or_person1",
      img: "/images/koooh_user.png",
    },
    text:
      "Sed lacus mauris, blandit ut mi id, ornare cursus erat. Nunc vitae felis non metus varius dapibus.",
    likes: 90,
  },
];

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={"خانه"} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTweet />
      <TweetList data={tweets} />
    </div>
  );
};

export default Home;
