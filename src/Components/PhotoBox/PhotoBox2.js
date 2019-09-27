import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PhotoBox.scss";

const PhotoBox2 = props => {
  console.log(props,'확인')

  return (
    <div className="photoCompo">
        <figure>
          <div className="xoxoxo">
            <div className="pinButton">
              <i className="fas fa-thumbtack x"></i>
              <span>저장</span>
            </div>
            <img src={props.info} />
            <div className="xoxo" />
          </div>
          <div className="imageBelow">
            <p>추천 핀</p>
            <i className="fas fa-ellipsis-h dotdotdot"></i>
          </div>{" "}
        </figure>
    </div>
  );
};

export default PhotoBox2;
