import React from "react";
import logo from "../../Images/Logo.png";
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";
import "./Login.scss";
// import { resolve } from "url";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { valueId: "", valuePW: "" };
  }

  inputValueId = e => {
    this.setState({ valueId: e.target.value });
  };
  inputValuePW = e => {
    this.setState({ valuePW: e.target.value });
  };
  signupMove = () => {
    this.props.history.push("signup");
  };

  onClickLogin = () => {
    fetch("http://10.58.6.27:8000/users/login", {
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
        console.log("나다",response)
        if (response.access_token) {
          localStorage.setItem("login_token", response.access_token);
          this.props.history.push("/");
          window.location.reload(true)
        }else{alert("일치하지않습니다")}
      });
    if (this.state.valueId === "") {
      this.setState({ valueId: "change" });
    } else if (this.state.valuePW === "") {
      this.setState({ valuePW: "change2" });
    }
  };

  responseGoogle = response => {
    fetch("http://10.58.6.27:8000/users/google-login", {
      method: "POST",
      headers: {
        Authorization: response.tokenId
      }
    })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("login_token", response.access_token);
      this.props.history.push("/");
      window.location.reload(false)
      });
  };

  responseKakao = response => {
    console.log("카톡",response);
    fetch("http://10.58.6.27:8000/users/kakao-login", {
      method: "POST",
      headers: {
        Authorization: response.response.access_token
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("반응",response)
        console.log(this.props)
        localStorage.setItem("login_token", response.access_token);
        this.props.history.push("/");
        //  window.location.reload(false)
      });
  };

  responseFail = err => {
    console.log(err);
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
              <input
                onChange={this.inputValuePW}
                className={`Login_input2 ${
                  this.state.valuePW === "change2" ? "input_change" : ""
                }`}
                placeholder="비밀번호"
                type="password"
              ></input>
              {this.state.valuePW === "change2" && (
                <div className="different">
                  올바르지 않은 비밀번호를 입력했습니다. 다시 시도하거나
                  비밀번호 재설정하세요
                </div>
              )}
              <div className="login_forget">비밀번호를 잊으셨나요?</div>
              <div onClick={this.onClickLogin} className="login_button">
                로그인
              </div>
              <div className="login_or">또는</div>
              <div className="login_Ka">
                <i className="fas fa-comment"></i>
                <KakaoLogin
                  className="img"
                  jsKey="3f402ec1b9ece3da90b2784584423d3b"
                  buttonText="카카오톡으로 로그인 "
                  onSuccess={this.responseKakao}
                  onFailure={this.responseFail}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div className="login_GG">
                <GoogleLogin
                  className="img"
                  clientId="551403957497-g3nav47au0hei2r7cj9pl9vhgq2hshhj.apps.googleusercontent.com"
                  buttonText="구글계정으로 로그인 "
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseFail}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
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
