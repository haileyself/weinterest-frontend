import React from "react";
import "./DetailSaveBox.scss";

class DetailSaveBox extends React.Component {
  render() {
    return (
      <div className="changeImg_box1">
        <div className="hover">
          <div className="send_text">저장</div>
        </div>
        <div className="changeImg_box1_img_wrap">
          <img src={this.props.img.img}></img>
        </div>
        <div className="changeImg_box1_text">{this.props.img.text}</div>
      </div>
    );
  }
}

export default DetailSaveBox;
