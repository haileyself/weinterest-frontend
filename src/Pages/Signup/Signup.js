import React from "react";
import "./Signup.scss";
import logo from "../../Images/Logo.png";

class Signup extends React.Component {
  render() {
    return (
      <div className="signup_wrap">
        <div className="signup_box_wrap">
          <div className="signup_box">
            <div className="signup_box_img">
              <div className="img">
                <img src={logo} alt={logo}></img>
              </div>
            </div>
            <div className="signup_title">Welcome to pinterest</div>
            <input className="signup_name" placeholder="이름"></input>
            <input className="signup_email" placeholder="이메일"></input>
            <input className="signup_PW" placeholder="비밀번호"></input>
            <input className="signup_PW" placeholder="비밀번호 확인"></input>
            <div className="signup_button">계정 만들기</div>
            <div className="signup_make">로그인</div>
            <div className="signup_contract">
              계속하면 Pinterest <a>서비스 약관 </a>및<a> 개인정보 보호정책</a>
              에 동의하는 것으로 간주됩니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
