import React, { Component } from "react";
import logo from "../../Images/Logo.png";
import Arrow from "Images/arrow.png";
import { API_IP } from "Common";
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
      genderList: [],
      choiceGender: "--gender--"
    };
  }

  componentDidMount() {
    // console.log("두번째페이지", this.props);
    //앞페이지에서 보낸 props가 들어왔는 지 콘솔찍어봄

    fetch("http://10.58.6.208:8001/genders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        //debugger;
        this.setState({
          genderList: response.genders
        });
      });
  }
  choiceYourGender = e => {
    this.setState({
      choiceGender: e.target.value
    });
    //console.log(e.target.value);
  };

  moveToNext = () => {
    const { choiceGender } = this.state;
    if (choiceGender === "--gender--") {
      alert("선택 부탁 드립니다>_<");
    }
    //console.log("호잇", this.props);
    fetch("http://10.58.6.208:8001/users/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email: this.props.location.state.emailVal,
        password: this.props.location.state.passwordVal,
        nickname: this.props.location.state.nicknameVal,
        country: this.props.location.state.countryList,
        language: this.props.location.state.languageList,
        gender: this.state.choiceGender
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          //debugger;
          localStorage.setItem("login_token", response.access_token);
          this.props.history.push("/signupfinal");
        }
      });
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

                {this.state.genderList.map((el, idx) => (
                  <option key={idx}>{el.sex}</option>
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
