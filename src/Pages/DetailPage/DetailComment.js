import React from "react";
import CommentRI from "./CommentRI";
import "./Detail.scss";

class DetailComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                  valueComment: "",
                  commentData:[],
                  context: "" 
                  ,props_id:this.props.pin_id
                };

    this.token = localStorage.getItem("login_token")
                  ? localStorage.getItem("login_token")
                  : this.props.history.push("/login");
  }

  componentDidMount() {
    
    // debugger;
    fetch(`http://10.58.7.49:8000/comments/${this.props.pin_id}`, {
      method: "GET",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("뿌려지는걱",response)
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
    fetch(`http://10.58.7.49:8000/comments/${this.props.pin_id}`, {
      method: "POST",
      headers: {
        "Authorization": this.token,
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        context: this.state.context,
        date: new Date(),
        good: 10,
        bad: 2
      })
    })
    .then(response =>  response.json())
       // debugger;
      //  fetch(`http://10.58.7.49:8000/comments/${this.props.pin_id}`, {
      //   method: "GET",
      //   headers: {
      //     Authorization: this.token,
      //     "Content-Type": "application/json"
      //   }
      // })
        .then(response => 
          {
        fetch(`http://10.58.7.49:8000/comments/${this.props.pin_id}`, {
          method: "GET",
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
           .then(response => {
          this.setState({ commentData: response.comments ,context:""});
        })
 
      });
  };
  delete=(id)=>{ 
    fetch(`http://10.58.7.49:8000/comments/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("login_token"),
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {
      // if(response.status === 200){
        fetch(`http://10.58.7.49:8000/comments/${this.state.props_id}`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("login_token"),
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
         .then(response => {
        this.setState({ commentData: response.comments });
      })
 
    });
  }

  render() {console.log(this.state.props_id)
    return (
      <div>
        <div className="commnet_text">질문을 하거나 칭찬을 남겨주세요</div>
        <div>
          {
            (this.state.commentData.length !== 0)?
            (this.state.commentData.map(el=>{
              console.log(el.comment_id)
              return <CommentRI id={el.comment_id}item={el} data={this.state.props_id} delete={this.delete}/>
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
            value={this.state.context}
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
