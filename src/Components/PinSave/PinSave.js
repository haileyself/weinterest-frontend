import React, { Component } from "react";
import CreateBoard from "Pages/Mypage/CreateBoard";
import { API_IP } from "Common";
import Arrow from "Images/arrow.png";
import "./PinSave.scss";

const style = {
  backgroundImage: `url(${Arrow})`,
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat"
};

class PinSave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBoards: null,
      choiceBoard: "",
      showBoard: false
    };
    this.token = localStorage.getItem("login_token");
  }

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

  componentDidMount() {
    // debugger;
    this.callMyBoard();
  }

  setBoardFlag = () => {
    // 단순히 x눌렀을 떄 없어지는 거라면 true 로 하면되지만 그러면 그냥 true아니면 falsefh 끝나버림. !this.state.showBoard함에따라 해당 상태를 계속 반전시켰을 때도
    this.setState({
      showBoard: !this.state.showBoard
    });
  };

  onComplete = () => {
    // debugger
    this.callMyBoard();
    this.setBoardFlag();
  };

  onChangeHandler = e => {
    this.setState({
      choiceBoard: e.target.value
    });
  };

  onClickSave = () => {
    // 배열안에 객체 특정 값의 index찾을 때 사용하는 메서드 (자체내 콜백함수 탑재)
    let selectedIndex = this.state.myBoards.findIndex(
      element => element.board_name === this.state.choiceBoard
    );
    //제이슨보드네임이랑 셀렉트태그에서 value랑 같은 것을 찾으려고

    // 예외처리; 그 배열의 인덱스를 못찾아서 -1로 해야함. 0이면 [0]번째 찾아짐.
    if (selectedIndex !== -1) {
      fetch(`${API_IP}/boards/save_pin`, {
        method: "POST",
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          board_id: this.state.myBoards[selectedIndex].board_id,
          pin_id: this.props.pin.pin__id
        })
      })
        .then(response => response.json())
        .then(response => {
          this.props.handleClick();
          //어쨌든 찾아지든 아니든 모달창은 꺼지게 하려고 핸들클릭 소환
        });
    } else {
      this.props.handleClick();
    }
  };

  render() {
    // debugger;
    return (
      <div className="grayout">
        {this.state.showBoard && (
          <CreateBoard
            onClose={this.setBoardFlag}
            onComplete={this.onComplete}
          />
        )}
        <div className="boardWrap">
          <div className="boardContain">
            <p>보드 선택 </p>
            <div onClick={this.props.handleClick}>
              <i className="fas fa-times closedIcon"></i>
            </div>
          </div>

          <div className="boardBelow">
            <div className="leftPortion">
              <div className="picFollow">
                <img src={this.props.pin.pin__link}></img>
              </div>
            </div>
            <div className="rightPortion">
              <div>
                <div className="boardExist">
                  <div className="ct_choice_order">
                    <select
                      className="choice_order"
                      style={style}
                      onChange={this.onChangeHandler}
                    >
                      <option>--지정할 보드 선택--</option>
                      {this.state.myBoards &&
                        this.state.myBoards.map((el, index) => (
                          <option key={index}>{el.board_name}</option>
                        ))}
                    </select>
                  </div>
                  <div className="pinButton" onClick={this.onClickSave}>
                    <i className="fas fa-thumbtack x icon" d></i>
                    <span className="saveBtn">저장</span>
                  </div>
                </div>
              </div>
              <div className="makeBoard" onClick={this.setBoardFlag}>
                <div>
                  <i className="fas fa-plus-circle plusIcon"></i>
                </div>
                <p>보드 만들기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinSave;
