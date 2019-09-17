import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Mypage from "./Pages/MyPage";

import Main from "Pages/Main";
import Header from "Components/Header";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>

          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
