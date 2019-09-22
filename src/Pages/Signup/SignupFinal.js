import React, { Component } from "react";
import TasteCompo from "./TasteCompo";
import data from "./data";
import "./Signup.scss";

class SignupFinal extends Component {
  constructor() {
    super();
    this.state = {
      // selectedPins: {},
      choiceTaste: ""
    };
  }

  selectMyTaste = (e, id) => {
    debugger;
    this.setState({
      choiceTaste: e.target.value
    });
    console.log(e.target.value);
  };
  moveToNext = () => {
    this.props.history.push("/");
  };

  // fetch('http://10.58.6.27:8080/users/sign-up', {
  //   method: 'POST',

  //   headers: {
  //     'Content-Type': 'application/json',
  //   },

  //   body: JSON.stringify({
  //     email: this.state.email,
  //     password: this.state.password,
  //     nickname: this.state.nickname,

  // })
  //   .then(response => response.json())
  //   .then(response => {
  //     if (response.message === 'SIGN_UP_SUCCESS') {

  //       this.props.history.push('/login');
  //     } else  (response.message === 'USER_EXIST') {
  //       //alert(response.message);
  //     }
  //   });

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
            <div className="selectTaste">
              회원님에게 가장 잘 맞는 주제를 선택 하세요
            </div>
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
              <div className="finishStage">완료</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupFinal;
