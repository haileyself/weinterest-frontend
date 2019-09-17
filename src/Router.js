import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/DetailPage";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/detailPage" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
