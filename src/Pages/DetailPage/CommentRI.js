import React from "react";
import "./Detail.scss";

class CommentRI extends React.Component {
  constructor(props){
    super(props)
    this.state={
      toggle:true,
      id:this.props.id
   }
  }
  reviseDelete=()=>{
    this.setState({toggle:!this.state.toggle})
    console.log(this.state.toggle)
    
  }

  delete=()=>{ 
    fetch(`http://10.58.7.49:8000/comments?comment_id=${63}`, {
    method: "Delete",
    headers: {
      Authorization: this.token,
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {console.log("저는요",response)
      this.setState({ commentData: response.comments });
      // window.location.reload();
    });
  }
  revise=()=>{ 
    fetch(`http://10.58.7.49:8000/comments/${this.state.id}`, {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("login_token"),
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {console.log("나sss는 누구인가",response.comments)
      this.setState({ commentData: response.comments });
    });

  }



  
  
  render() {  console.log( "넘버가 궁금합니다",this.state.id)
    return (
      <div>
        <div className="comment_img_wrap">
          <div className="comment_user_img">
            <div className="user_img">
              {/* <img src="https://images.velog.io/post-images/jingyong91/ad161f20-dc85-11e9-9d0c-9f336e059e9d/f4233ebdaf0cf6e607d177a9e1e90841.jpg" /> */}
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div className="commet_input_wrap">
            <div className="comment_user_name_wrap">
              <div className="comment_user_name">{this.props.item.nickname}</div>
              <div className="comment_history">{this.props.item.date.substring(0, 10)}</div>
            </div>
            <div className="user_comment">{this.props.item.context}</div>
          </div>
        </div>
        <div className="comment_icon_wrap">
          <div className="icon1">
            <i class="fas fa-heart"></i>
          </div>
          <div className="icon2">
            <i class="fas fa-comment"></i>
          </div>
          <div onClick={this.reviseDelete} className="icon3">
           {this.state.toggle === false ?<div className="revise_delete">
              <div onClick={this.revise} className="item first">수정</div>
              <div onClick={this.delete} className="item">삭제</div>
            </div>:""} 
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="like">좋아요1개</div>
        </div>
      </div>
    );
  }
}

export default CommentRI;
