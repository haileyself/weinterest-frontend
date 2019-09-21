import React, { Component } from "react";
import PhotoBox from "Components/PhotoBox";
import data from "Components/PhotoBox/data";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="columns">
          {/* <PhotoBox /> */}
          {data.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
