import React, { Component } from "react";
import "./PhotoBox.scss";

const PhotoBox = ({ info = {} }) => {
  const { thumbnail } = info;
  return (
    <div className="photoCompo">
      <figure>
        <div className="xoxoxo">
          <div className="pinButton">
            <i class="fas fa-thumbtack x"></i>
            <span>저장</span>
          </div>
          <a href="/">
            <img src={thumbnail} />
            <div className="xoxo" />
          </a>
        </div>
        <div className="imageBelow">
          <p>추천 핀</p>
          <i class="fas fa-ellipsis-h dotdotdot"></i>
        </div>{" "}
      </figure>
    </div>
  );
};

export default PhotoBox;
