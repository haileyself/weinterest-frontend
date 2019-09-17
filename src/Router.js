import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Mypage from "./Pages/MyPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
