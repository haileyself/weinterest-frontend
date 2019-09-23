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

class SignupFirst extends Component {
  constructor() {
    super();
    this.state = {
      choiceCountry: "--country--",
      choiceLanguage: "--language--"
    };
  }

  choiceYourCountry = e => {
    this.setState({
      choiceCountry: e.target.value
    });
    //console.log(e.target.value);
  };
  choiceYourLanguage = e => {
    this.setState({
      choiceLanguage: e.target.value
    });
  };

  moveToNext = () => {
    const { choiceCountry, choiceLanguage } = this.state;

    if (choiceCountry !== "--country--" && choiceLanguage !== "--language--") {
      this.props.history.push("signupsecond");
    } else if (
      choiceCountry === "--country--" &&
      choiceLanguage === "--language--"
    ) {
      //console.log("1");
      alert("전부 선택 해 주세요^^");
    } else if (
      choiceCountry === "--country--" ||
      choiceLanguage === "--language--"
    ) {
      //console.log("2");
      alert("전부 선택 해 주세요^^");
    }
  };

  render() {
    //console.log(data[0]);
    return (
      <div className="signup_wrap">
        <div className="signup_box_wrap">
          <div className="signup_box">
            <div className="signup_box_img">
              <div className="logoImage">
                <img src={logo} alt={logo}></img>
              </div>
            </div>
            <div className="signup_title">국가 또는 언어를 선택 해 주세요</div>
            <div className="boxWrap">
              <select
                className="selectCountry"
                style={style}
                onChange={this.choiceYourCountry}
              >
                <option>--country--</option>

                {data[0].countries.map((el, idx) => (
                  <option key={idx}>{el}</option>
                ))}
              </select>
              <select
                className="selectLanguage"
                style={style}
                onChange={this.choiceYourLanguage}
              >
                <option>--language--</option>

                {data[1].language.map((el, idx) => (
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

export default SignupFirst;
