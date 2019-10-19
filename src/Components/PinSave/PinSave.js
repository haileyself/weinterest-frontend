import React, { Component } from "react";
import "./PinSave.scss";

class PinSave extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="grayout">
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
                <img src="https://i.pinimg.com/236x/1f/17/46/1f174648a03728c0f443f3b3ffbd16c9.jpg"></img>
              </div>
            </div>
            <div className="rightPortion">
              <div>
                <div className="boardExist">
                  <div>
                    <img src="https://i.pinimg.com/236x/1f/17/46/1f174648a03728c0f443f3b3ffbd16c9.jpg"></img>
                  </div>
                  <p>인테리어</p>
                  <div className="pinButton">
                    <i className="fas fa-thumbtack x"></i>
                    <span>저장</span>
                  </div>
                </div>
              </div>
              <div className="makeBoard">
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
