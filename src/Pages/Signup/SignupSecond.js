import React, { Component } from "react";
import logo from "../../Images/Logo.png";
import Arrow from "Images/arrow.png";
import data from "./data";
import "./Signup.scss";

const style = {
  backgroundImage: `url(${Arrow})`,
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat"
};

class SignupSecond extends Component {
  constructor() {
    super();
    this.state = {
      choiceGender: "--gender--"
    };
  }

  choiceYourGender = e => {
    this.setState({
      choiceGender: e.target.value
    });
    //console.log(e.target.value);
  };

  moveToNext = () => {
    const { choiceGender } = this.state;

    if (choiceGender !== "--gender--") {
      this.props.history.push("signupfinal");
    } else if (choiceGender == "--gender--") {
      alert("선택 부탁 드립니다>_<");
    }
    //console.log("1");
  };

  render() {
    return (
      <div className="signup_wrap">
        <div className="signup_box_wrap">
          <div className="signup_box">
            <div className="signup_box_img">
              <div className="logoImage">
                <img src={logo} alt={logo}></img>
              </div>
            </div>
            <div className="signup_title">성별이 어떻게 되세요?</div>
            <div className="boxWrap">
              <select
                className="selectCountry selectGender"
                style={style}
                onChange={this.choiceYourGender}
              >
                <option>--gender--</option>

                {data[2].gender.map((el, idx) => (
                  <option key={idx}>{el}</option>
                ))}
              </select>

              <div className="signup_button" onClick={this.moveToNext}>
                다음
              </div>

              <div className="signup_contract">
                계속하면 Pinterest <a>서비스 약관 </a>및
                <a> 개인정보 보호정책</a>에 동의하는 것으로 간주됩니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupSecond;
