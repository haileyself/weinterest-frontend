import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import PhotoBox from "Components/PhotoBox";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div id="columns">
          <PhotoBox />
        </div>
      </div>
    );
  }
}

export default Main;
