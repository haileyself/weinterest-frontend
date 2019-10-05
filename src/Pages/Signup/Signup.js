import React from "react";
import logo from "../../Images/Logo.png";
import Signup_First from "./SignupFirst";
import "./Signup.scss";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      emailVal: "",
      passwordVal: "",
      nicknameVal: ""
    };
  }

  changeEmailValue = e => {
    this.setState({
      emailVal: e.target.value
    });
    //console.log(this.state.emailVal);
  };

  changePwValue = e => {
    this.setState({
      passwordVal: e.target.value
    });
    //console.log(this.state.passwordVal);
  };
  changeNicknameValue = e => {
    this.setState({
      nicknameVal: e.target.value
    });
    //console.log(this.state.nicknameVal);
  };

  moveToNext = () => {
    const { emailVal, passwordVal, nicknameVal } = this.state;

    // console.log("값이저장인가", this.state);

    if (emailVal.length && passwordVal.length && nicknameVal.length) {
      this.props.history.push({
        pathname: "/signupfirst",
        state: {
          emailVal: this.state.emailVal,
          passwordVal: this.state.passwordVal,
          nicknameVal: this.state.nicknameVal
        }
      });
    } else {
      alert("전부 기입 해 주세요^^");
    }
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
            <div className="signup_title">Welcome to pinterest</div>
            <div className="boxWrap">
              <input
                className="signup_Email"
                placeholder="이메일"
                onChange={this.changeEmailValue}
              ></input>
              <input
              type ="password"
                className="signup_PW"
                placeholder="비밀번호"
                onChange={this.changePwValue}
              ></input>
              <input
                className="signup_NickName"
                placeholder="닉네임"
                onChange={this.changeNicknameValue}
              ></input>
              <div className="signup_button" onClick={this.moveToNext}>
                계정 만들기
              </div>
              <a href="/">
                <div className="signup_make">로그인</div>
              </a>
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

export default Signup;
