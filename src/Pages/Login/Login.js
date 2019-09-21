import React from "react";
import logo from "../../Images/Logo.png";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { valueId: "", valuePw: "" };
  }
  valueCheck = () => {
    if (this.state.valueId === "") {
      this.setState({ valueId: "change" });
    }
  };
  inputValueId = e => {
    this.setState({ valueId: e.target.value });
  };
  signupMove = () => {
    this.props.history.push("signup");
  };
  onClickLogin = () => {
    // fetch("http://localhost:8000/users/login", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     body: JSON.stringfy({
    //       email: this.state.valueId,
    //       password: this.state.valuePw
    //     })
    //   }
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.access_token) {
    //       localStorage.setItem("이건정하자", response.access_token);
    //       this.props.history.push("/");
    //     }
    //   });
    if (this.state.valueId === "") {
      this.setState({ valueId: "change" });
    }
  };
  render() {
    return (
      <div>
        <div className="login_wrap">
          <div onClick={this.signupMove} className="login_button">
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
                onChange={this.inputValueId}
                className={`Login_input ${
                  this.state.valueId === "change" ? "input_change" : ""
                }`}
                placeholder="이메일"
              ></input>
              {this.state.valueId === "change" && (
                <div className="different">
                  놓친 부분이 있네요! 이메일을 추가하세요
                </div>
              )}
              <div className="red_border"></div>
              <input className="Login_input2" placeholder="비밀번호"></input>
              <div className="login_forget">비밀번호를 잃으셨나요?</div>
              <div onClick={this.onClickLogin} className="login_button">
                로그인
              </div>
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
