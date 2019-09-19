import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./PhotoBox.scss";

class PhotoBox extends Component {
  render() {
    return (
      <div className="photoCompo">
        <figure>
          <div className="xoxoxo">
            <div className="pinButton">
              <i class="fas fa-thumbtack x"></i>
              <span>저장</span>
            </div>
            <a href="/">
              <img src="https://i.pinimg.com/564x/d7/68/6b/d7686bcbf91f7fd4eaa96c35b47fd10f.jpg" />
              <div className="xoxo" />
            </a>
          </div>
          <p>추천 핀</p>
          {/* <i class="fas fa-ellipsis-h dotdotdot"></i> */}
        </figure>
      </div>
    );
  }
}

export default PhotoBox;
