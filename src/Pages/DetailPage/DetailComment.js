import React from "react";
import CommentRI from "./CommentRI";
import "./Detail.scss";

class DetailComment extends React.Component {
  constructor() {
    super();
    this.state = { valueComment: "",commentData:[] };
  }
  isComment=(e)=>{
    fetch("http://10.58.6.27:8000/comments/1", {
      method: "GET",
      headers: {
        "Authorization": "response.access_token"
      }
    })
      .then(response => response.json())
      .then(response => { console.log(response)
        fetch("http://10.58.6.27:8000/comments/1", {
        method: "POST",
        headers: {
          "Authorization": "response.access_token"
        }
      })
        .then(response => response.json())
        .then(response =>{console.log(response)
          this.setState({
            commentData: response.date
            
          })
        })
      })
      this.setState({ valueComment: e.target.value 
      })
    };
  render() {
    return (
      <div>
        <div className="commnet_text">질문을 하거나 칭찬을 남겨주세요</div>
        <div>
          {/* {this.state.commentData.comments && this.state.commentData.comments.map(el=>{return <CommentRI item={el}/>})}  */}
        </div>
        <div className="comment_box">
          <div className="commen_box_img">
          <i class="fas fa-user"></i>
            {/* <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img> */}
          </div>
          <input
            onChange={this.isComment}
            placeholder="댓글 추가"
            className="comment_box_input"
          ></input>
        </div>
        <div className="comment_button_wrap">
          <div
            onClick={this.isComment}
            className={`comment_button ${
              this.state.valueComment ? "comment_button2" : ""
            }`}
          >
            완료
          </div>
        </div>
      </div> 
    );
  }
}

export default DetailComment;
