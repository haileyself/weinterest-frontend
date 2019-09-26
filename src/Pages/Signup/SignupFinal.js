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
    //debugger;
    this.token = localStorage.getItem("login_token")
      ? localStorage.getItem("login_token")
      : "";
  }

  componentDidMount() {
    //console.log("마지막페이지", this.state.selectedPins);
    fetch("http://10.58.0.251:8000/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        //console.log("대꾸?", response);
        this.setState({
          selectedPins: response.categories
        });
      });
  }

  selectMyTaste = e => {
    this.setState({
      choiceTaste: e.target.value
    });
    // console.log("값", e.target.value);
  };

  handleClick = (e, data) => {
    //console.log("나와라데이터", data);
  };

  finalButton = () => {
    //debugger;
    fetch(
      "http://10.58.0.251:8000/category/user-category",

      {
        method: "POST",

        headers: {
          Authorization: this.token,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          user_categories: [
            {
              category_id: 3
            },
            {
              category_id: 1
            },
            {
              category_id: 2
            },
            {
              category_id: 4
            },
            {
              category_id: 5
            }
          ]
        })
      }
    )
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        //debugger;
        if (response.message === "USER_CAGEGORY_UPDATE") {
          this.props.history.push("/");
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
    //console.log(this.selectedPins);
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

                  {this.state.selectedPins.map((el, index) => {
                    return (
                      <TasteCompo
                        key={index}
                        info={el}
                        //order={el.category_id}
                        onClinkHandle={this.handleClick}
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
