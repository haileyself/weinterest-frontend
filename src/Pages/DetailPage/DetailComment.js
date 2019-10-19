import React from "react";
import CommentRI from "./CommentRI";
import "./Detail.scss";

class DetailComment extends React.Component {
  constructor() {
    super();
    this.state = { 
                  valueComment: "",
                  commentData:[],
                  context: "" 
                };

    this.token = localStorage.getItem("login_token")
                  ? localStorage.getItem("login_token")
                  : this.props.history.push("/login");
  }

  componentDidMount() {
    // debugger;
    fetch(`http://10.58.0.251:8000/comments/${this.props.pin_id}`, {
      method: "GET",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        // debugger;
        this.setState({ commentData: response.comments });
      });
  }
  
  isComment=(e)=>{
    // debugger;
    this.setState({
      context: e.target.value,
    });
  };

  saveContext = (e) => {
    // debugger;
    fetch(`http://10.58.6.208:8000/comments/${this.props.pin_id}`, {
      method: "POST",
      headers: {
        "Authorization": this.token,
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        context: this.state.context,
        date: "2019-09-26 00:18:41",
        good: 10,
        bad: 2
      })
    })
    .then(response =>  response.json())
       // debugger;
       fetch(`http://10.58.6.208:8000/comments/${this.props.pin_id}`, {
        method: "GET",
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {console.log("나는 누구인가",response)
          // debugger;
          this.setState({ commentData: response.comments });
        });
  };

  render() {
    return (
      <div>
        <div className="commnet_text">질문을 하거나 칭찬을 남겨주세요</div>
        <div>
          {
            (this.state.commentData.length !== 0)?
            (this.state.commentData.map(el=>{
              return <CommentRI item={el}/>
            })) : ""
          } 
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
            onClick={this.saveContext}
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
