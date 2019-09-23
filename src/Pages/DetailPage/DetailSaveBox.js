import React from "react";

class DetailSaceBox extends React.Component {
  render() {
    return (
      <div className="changeImg_box1">
        <div className="hover">
          <div className="send_text">저장</div>
        </div>
        <div className="changeImg_box1_img_wrap">
          <img src={this.props.img}></img>
        </div>
        <div className="changeImg_box1_text">{this.props.text}</div>
      </div>
    );
  }
}

export default DetailSaceBox;
