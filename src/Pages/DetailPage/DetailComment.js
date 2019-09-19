import React from "react";
import "./Detail.scss";

class DetailComment extends React.Component {
  render() {
    return (
      <div>
        <div className="commnet_text">
          피드백을 공유하거나 질문을 하거나 칭찬을 남겨주세요
        </div>
        <div>코맨트 나오는곳</div>
        <div className="comment_box">
          <div className="commen_box_img">
            <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
          </div>
          <input placeholder="댓글 추가" className="comment_box_input"></input>
        </div>
      </div>
    );
  }
}

export default DetailComment;