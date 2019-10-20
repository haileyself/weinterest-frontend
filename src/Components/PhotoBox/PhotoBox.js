// import React, { Component } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PinSave from "Components/PinSave";
import "./PhotoBox.scss";

const PhotoBox = props => {
  const [board, setBoard] = useState(false);

  const showBoard = () => {
    setBoard(!board);
  };

  //console.log(Boolean(board), "ssss");
  //console.log("wwww", props.name);
  return (
    <>
      {board ? <PinSave handleClick={showBoard} /> : null}

      <div className="photoCompo">
        <figure>
          <div className="xoxoxo">
            <div className="pinButton" onClick={showBoard}>
              <i className="fas fa-thumbtack x"></i>
              <span>저장</span>
            </div>
            <img src={props.info.pin__link} />
            <Link to={props.name}>
              <div className="xoxo" />
            </Link>
          </div>
          <div className="imageBelow">
            <p>추천 핀</p>
            <i className="fas fa-ellipsis-h dotdotdot"></i>
          </div>{" "}
        </figure>
      </div>
    </>
  );
};

export default PhotoBox;
