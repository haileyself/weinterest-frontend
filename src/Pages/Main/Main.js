import React, { Component } from "react";
import PhotoBox from "Components/PhotoBox";
import data from "Components/PhotoBox/data";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      mainBox: [
        { pins: [] },
        { pins: [] },
        { pins: [] },
        { pins: [] },
        { pins: [] }
      ]
    };

    this.token = localStorage.getItem("signup_token")
      ? localStorage.getItem("signup_token")
      : this.props.history.push("/login");
  }

  componentDidMount() {
    fetch("http://10.58.0.251:8000/pins?offset=0&limit=5", {
      method: "GET",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ mainBox: response.pins });
      });
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="columns">
          {/* <PhotoBox /> */}
          {this.state.mainBox[0].pins.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
          {this.state.mainBox[1].pins.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
          {this.state.mainBox[2].pins.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
          {this.state.mainBox[3].pins.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
          {this.state.mainBox[4].pins.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
