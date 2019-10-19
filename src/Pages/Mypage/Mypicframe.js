import React from "react";
import "./Mypage.scss";
import "./Mypicframe.scss";

class Mypicframe extends React.Component {
  classNameList = [
    "pic_item pic_first",
    "pic_item pic_second",
    "pic_item pic_third",
    "pic_item pic_forth",
    "pic_item pic_fifth",
    "pic_item pic_sixth"
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props, "얍");
    // debugger;
    return (
      <div className="picture_frame">
        <div className="picture_outerframe">
          <div className="picture_innerframe">
            {this.classNameList.map((el, index) => {
              if (this.props.info.pins.length < index + 1) {
                return <div className={this.classNameList[index]}></div>;
              } else {
                return (
                  <div
                    className={this.classNameList[index]}
                    style={{
                      backgroundImage: `url(${this.props.info.pins[index].pin__link})`
                    }}
                  ></div>
                );
              }
            })}
          </div>
          <div className="pic_info_wrapper">
            <div className="pic_info_container">
              <div className="pic_boradname ">{this.props.info.board_name}</div>
              <div className="count_pin ">
                핀 {this.props.info.pins.length} 개
              </div>
            </div>
            <div className="editBox">
              <div className="editBox_inner">
                <i className="fas fa-pen editBtn"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypicframe;
