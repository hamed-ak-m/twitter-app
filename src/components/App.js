import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

import Page404 from "../pages/404/404";
import Home from "../pages/home/Home";
import TweetsByHashTag from "../pages/tweetsByHashTag/TweetsByHashTag";
import TweetsByTweeter from "../pages/tweetsByTweeter/TweetsByTweeter";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path={"/"}
        render={() => {
          return (
            <Layout>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route
                  exact
                  path={"/hashtag/:hashtag"}
                  component={TweetsByHashTag}
                />
                <Route
                  exact
                  path={"/users/:user"}
                  component={TweetsByTweeter}
                />
                <Route exact component={Page404} />
              </Switch>
            </Layout>
          );
        }}
      ></Route>
    </BrowserRouter>
  );
};

export default App;
