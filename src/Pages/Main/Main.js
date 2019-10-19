import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PhotoBox from "Components/PhotoBox";
import { API_IP } from "Common";
import "./Main.scss";

class Main extends Component {
  total_key = 0;

  constructor(props) {
    super(props);
    this.state = {
      mainBox: null
    };

    this.token = localStorage.getItem("login_token")
      ? localStorage.getItem("login_token")
      : props.history.push("/login");
  }

  componentDidMount() {
    fetch(`${API_IP}/pins?offset=0&limit=50`, {
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
          {this.state.mainBox &&
            this.state.mainBox.map((el, index) => {
              return el.pins.map((pin, pinIndex) => {
                //console.log("엘이닷", el);
                //console.log("핀이닷", pin);

                return (
                  // <Link to={`/detailPage/${pin.pin__id}`}>
                  <PhotoBox
                    info={pin}
                    key={this.total_key + pinIndex}
                    // name={`/detailPage/${pin.pin__id}`}
                  />
                  // </Link>
                );
              });

              this.total_key += el.pins.length;
            })}
        </div>
      </div>
    );
  }
}

export default Main;
