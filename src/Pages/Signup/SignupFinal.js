import React, { Component } from "react";
import TasteCompo from "./TasteCompo";
import data from "./data";
import "./Signup.scss";

class SignupFinal extends Component {
  constructor() {
    super();
    this.state = {
      selectedPins: [],
      choiceTaste: ""
    };
  }
  componentDidMount() {
    // console.log("마지막페이지", this.props);
    // fetch("http://10.58.6.27:8000/countries", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     // debugger;
    //     this.setState({
    //       countryList: response.countries
    //     });
    //   });
    // fetch('http://10.58.6.27:8080/users/sign-up', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //    emailVal: this.props.location.state.emailVal,
    //passwordVal: this.props.location.state.passwordVal,
    //nicknameVal: this.props.location.state.nicknameVal,
    //countryList: this.props.location.state.countryList,
    //languageList: this.props.location.state.languageList,
    //genderList: this.props.location.state.choiceGender,
    //selectedPins :this.state.selectedPins.concat(response.data)
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.message === 'SIGN_UP_SUCCESS') {
    //       this.props.history.push('/');
    //     } else  (response.message === 'USER_EXIST') {
    //       //alert(response.message);
    //     }
    //   });
  }
  selectMyTaste = (e, id) => {
    //debugger;
    this.setState({
      choiceTaste: e.target.value
    });
    // console.log(e.target.value);
  };

  finalButton = () => {
    fetch("http://10.58.6.27:8000/users/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "1234@gmail.com",
        password: "1234",
        nickname: "HAN",
        gender: "남자",
        country: "미국",
        language: "영어"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);

        if (response.message === "sign_up_success") {
          this.props.history.push("/login");
        }
      });
  };

  render() {
    //let A = [<div>첫번째</div>, <div>두번째</div>, <div>세번째</div>];
    // let B = [<tasteCompo />, <tasteCompo />, <tasteCompo />];
    // let Data = ["첫번째", "두번째", "세번째"];

    // let showCompo = data[3].categories.map((el, i) => (
    //   <tasteCompo key={i} info={el} />
    // ));

    return (
      <div className="signup_wrap">
        <div className="finalContainer">
          <div className="finalWrap">
            <div className="finalPage">
              <div className="selectTaste">
                회원님에게 가장 잘 맞는 주제를 선택 하세요
              </div>
              <div>
                <div className="imageSelect">
                  {/* <figure onClick={this.selectMyTaste}>
                <img src="https://i.pinimg.com/564x/90/48/10/9048106e0993f73a963540b240091a8d.jpg" />
                <p>포토포토</p>
              </figure>  */}

                  {/* {Data.map((element, inde) => {
              return <div>{element}</div>;
            })} */}

                  {data[3].categories.map((el, index) => {
                    return (
                      <TasteCompo
                        key={index}
                        info={el}
                        order={el.id}
                        onClinkHandle={this.selectMyTaste}
                      />
                    );
                  })}
                </div>
                <div className="boxWrap">
                  {/* <a href="/"> */}
                  <div className="finishStage" onClick={this.finalButton}>
                    완료
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupFinal;
