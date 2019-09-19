import React from "react";
import "./Login.scss";
import logo from "../../Images/Logo.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { valueId: "" };
  }
  inputValueId = e => {
    this.setState({ valueId: e.target.value });
  };
  move = () => {
    this.props.history.push("sigup");
  };
  render() {
    return (
      <div>
        <div className="login_wrap">
          <div onClick={this.move} className="login_button">
            회원가입
          </div>
          <div className="login_box_wrap">
            <div className="login_box">
              <div className="login_box_img">
                <div className="img">
                  <img src={logo} alt={logo}></img>
                </div>
              </div>
              <div className="Login_title">Welcome to pinterest</div>
              <input
                onChang={this.inputValueId}
                className="Login_input"
                placeholder="이메일"
              ></input>
              <input className="Login_input2" placeholder="비밀번호"></input>
              <div className="login_forget">비밀번호를 잃잊으셨나요?</div>
              <div className="login_button">로그인</div>
              <div className="login_or">또는</div>
              <div className="login_fB"></div>
              <div className="login_Gg"></div>
              <div className="login_contract">
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

export default Login;
