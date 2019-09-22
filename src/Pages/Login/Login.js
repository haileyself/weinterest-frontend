import React from "react";
import logo from "../../Images/Logo.png";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { valueId: "", valuePW: "" };
  }

  inputValueId = e => {
    // debugger;
    this.setState({ valueId: e.target.value });
  };
  inputValuePW = e => {
    // debugger;
    this.setState({ valuePW: e.target.value });
  };

  signupMove = () => {
    this.props.history.push("signup");
  };
  // componentDidMount() {
  // window.Kakao.init("501b12a114e66a388faa69d1b9120796");
  // }

  onClickLogin = () => {
    // debugger;
    fetch("http://10.58.6.27:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.valueId,
        password: this.state.valuePW
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log("확인", response);
        if (response.access_token) {
          localStorage.setItem("이건정하자", response.access_token);
          this.props.history.push("/");
        }
      });
    if (this.state.valueId === "") {
      this.setState({ valueId: "change" });
    } else if (this.state.valuePW === "") {
      this.setState({ valuePW: "change2" });
    }
  };
  render() {
    // console.log("확인", response);
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
              {/* <div className="red_border"></div> */}
              <input
                onChange={this.inputValuePW}
                className={`Login_input2 ${
                  this.state.valuePW === "change2" ? "input_change" : ""
                }`}
                placeholder="비밀번호"
              ></input>
              {/*  ========================================== */}
              {this.state.valuePW === "change2" && (
                <div className="different">
                  올바르지 않은 비밀번호를 입력했습니다. 다시 시도하거나
                  비밀번호 재설정하세요
                </div>
              )}
              {/* <div className="red_border"></div> */}
              {/*  ========================================== */}
              <div className="login_forget">비밀번호를 잊으셨나요?</div>
              <div onClick={this.onClickLogin} className="login_button">
                로그인
              </div>
              <div className="login_or">또는</div>
              <div className="login_Ka">Kakao Talk으로 계속하기</div>
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
