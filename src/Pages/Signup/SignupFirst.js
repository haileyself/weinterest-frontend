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
      countryList: [],
      languageList: [],
      choiceCountry: "--country--",
      choiceLanguage: "--language--"
    };
  }
  componentDidMount() {
    //console.log("여기에!", this.props);
    fetch("http://10.58.6.208:8001/countries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        // debugger;
        this.setState({
          countryList: response.countries
        });
      });

    fetch("http://10.58.6.208:8001/languages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        // debugger;
        this.setState({
          languageList: response.languages
        });
      });
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
    // console.log("1", "안나와안나와");
    // console.log(
    //   "2",
    //   choiceCountry !== "--country--" && choiceLanguage !== "--language--"
    // );
    // console.log("3", this.state);
    //this.state로 관리되는 애들 목록이 나옴
    if (choiceCountry !== "--country--" && choiceLanguage !== "--language--") {
      //console.log("얍");
      this.props.history.push({
        //이전 페이지에서 그 다음페이지로 데이터를 가지고 넘어가게 하기 위해
        pathname: "/signupsecond",
        //pathname에는 꼭 /붙여주고 넘거야함
        state: {
          emailVal: this.props.location.state.emailVal,
          passwordVal: this.props.location.state.passwordVal,
          nicknameVal: this.props.location.state.nicknameVal,
          countryList: this.state.choiceCountry,
          languageList: this.state.choiceLanguage
          //스테이트에서 관리되는 애들을 푸쉬할때 같이 props.history.push로 보내주어야함
          //처음에는 패치 받아서 맵돌린것처럼 받았는 데 선택한 value를 받아야하기때문에 이벤트함수 적용시 걸리는 스테이트에서 걸었던 키값으로 받아주어야함
        }
      });
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
    // debugger;
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
                // placeholder="rrnr"
                className="selectCountry"
                style={style}
                onChange={this.choiceYourCountry}
              >
                <option>--country--</option>

                {this.state.countryList.map((el, idx) => {
                  // debugger;
                  return <option key={idx}>{el.nationality}</option>;
                })}
              </select>
              <select
                className="selectLanguage"
                style={style}
                onChange={this.choiceYourLanguage}
              >
                <option>--language--</option>

                {this.state.languageList.map((el, idx) => (
                  <option key={idx}>{el.name}</option>
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
