import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PhotoBox.scss";

const PhotoBox = props => {
  //const { pin__link } = info;

  return (
    <div className="photoCompo">
      <Link to={`/detailPage/${props.info.pin__id}`}>
        <figure>
          <div className="xoxoxo">
            <div className="pinButton">
              <i className="fas fa-thumbtack x"></i>
              <span>저장</span>
            </div>
            <img src={props.info.pin__link} />
            <div className="xoxo" />
          </div>
          <div className="imageBelow">
            <p>추천 핀</p>
            <i className="fas fa-ellipsis-h dotdotdot"></i>
          </div>{" "}
        </figure>
      </Link>
    </div>
  );
};

export default PhotoBox;
