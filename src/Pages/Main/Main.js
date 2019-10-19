import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoBox from "Components/PhotoBox";
import data from "Components/PhotoBox/data";
import "./Main.scss";

class Main extends Component {
  total_key = 0;

  constructor(props) {
    super(props);
    this.state = {
      mainBox: []
    };
    //console.log("main");
    this.token = localStorage.getItem("login_token")
      ? localStorage.getItem("login_token")
      : props.history.push("/login");
  }

  componentDidMount() {
    // debugger;
    fetch("http://10.58.7.49:8000/pins?offset=0&limit=50", {
      method: "GET",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        // debugger;
        this.setState({ mainBox: response.pins });
      });
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="columns">
            {this.state.mainBox &&
              this.state.mainBox.map((el, index) => {
                // debugger;
                return el.pins.map((pin, pinIndex) => {
                  return (
                    <Link to={`/detailPage/${pin.pin__id}`}>
                      <PhotoBox info={pin} key={this.total_key + pinIndex} />
                    </Link>
                  );
                });

                this.total_key += el.pins.length;
              })
            }
        </div>
      </div>
    );
  }
}

export default Main;
