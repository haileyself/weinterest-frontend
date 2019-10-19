import React from "react";
import CreateBoard from "././CreateBoard";
import { API_IP } from "Common";
import "./Mypage.scss";

class CreateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  handleOpenModal = () => {
    // console.log(this.props.handleClick);
    this.setState({
      modal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };

  callMyBoard() {
    fetch(`${API_IP}/boards`, {
      method: "GET",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          myBoards: response.boards
        });
      });
  }

  /*
      setBoardFlag = () => {
        // 단순히 x눌렀을 떄 없어지는 거라면 true 로 하면되지만 그러면 그냥 true아니면 falsefh 끝나버림. !this.state.showBoard함에따라 해당 상태를 계속 반전시켰을 때도
        this.setState({
          showBoard: !this.state.showBoard
        });
      };
      */

  onComplete = () => {
    // debugger
    this.callMyBoard();
    this.handleCloseModal();
    // this.setBoardFlag();
  };

  render() {
    console.log(this.state.modal, "props");
    return (
      <div className="createList">
        <div
          onClick={this.handleOpenModal}
          // this.props.handleClick}}
          className="addBoardList"
        >
          보드 만들기{" "}
        </div>
        {this.state.modal && (
          <CreateBoard
            onClose={this.handleCloseModal}
            onComplete={this.onComplete}
          />
        )}
        <a href="/">
          <div className="addPinList">핀 만들기</div>
        </a>
      </div>
    );
  }
}

export default CreateList;
