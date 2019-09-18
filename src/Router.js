import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "Pages/DetailPage";
import Main from "Pages/Main";
import Header from "Components/Header";
import Login from "Pages/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/detailPage" component={Detail} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
