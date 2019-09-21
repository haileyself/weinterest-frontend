import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mypage from "Pages/Mypage";
import Main from "Pages/Main";
import Header from "Components/Header/Header";
import Detail from "Pages/DetailPage";
import Login from "Pages/Login";
import Signup from "Pages/Signup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/detailpage" component={Detail} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/detailPage" component={Detail} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
