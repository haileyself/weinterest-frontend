import React from "react";
import { API_IP } from "Common";
import "./Mypage.scss";
import "./CreateBoard.scss";

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.token = localStorage.getItem("login_token");
  }

  getValue = e => {
    this.setState({
      text: e.target.value
    });
  };

  makeNewBoard = () => {
    // debugger;
    fetch(`${API_IP}/boards/new_board`, {
      method: "POST",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.text
      })
    })
      .then(response => response.json())
      .then(response => {
        this.props.onComplete();
      });
  };

  render() {
    // console.log('안녕',this.props);
    //console.log(this.state.text);
    return (
      <div className="MyModal">
        <div className="PopupCreateBoard">
          <div className="subjectContainer">
            <div className="Popupheader">
              <h1>보드 만들기</h1>
              <div className="xBtnBox">
                <button onClick={this.props.onClose}>
                  <i class="fas fa-times boardClose"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="listContainer">
            <div className="nameList">
              <div className="boardName">이름</div>
              <div className="boardInputBox">
                <span className="textBox">
                  <input
                    onChange={this.getValue}
                    value={this.state.text}
                    className="text"
                    type="text"
                    placeholder="예: '가고싶은 곳' 또는 '조리법'"
                  ></input>
                </span>
              </div>
            </div>
            <div className="viewList">
              <div className="viewType">가시성</div>
              <div className="viewContainer">
                <div className="chkBoxContainer">
                  <input type="checkbox"></input>
                </div>
                <div className="labelbox">
                  <div className="keepSecret">비밀 보드로유지</div>
                  <a>
                    <div className="seeDetail">자세히 알아보기</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="listFooter">
              <div className="listFooterBtnBox">
                <div className="cancelBtnBox">
                  <button onClick={this.props.onClose} className="cancelBtn">
                    취소
                  </button>
                  <div className="btnBackground" />
                </div>
                <div
                  className={
                    this.state.text ? "activeCreateBtnBox" : "createBtnBox"
                  }
                >
                  <button
                    onClick={this.makeNewBoard}
                    className={
                      this.state.text ? "activeCreateBtn" : "createBtn"
                    }
                  >
                    만들기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBoard;
