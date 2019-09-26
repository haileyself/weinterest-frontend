import React, { Component } from "react";
import PhotoBox from "Components/PhotoBox";
import data from "Components/PhotoBox/data";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (!window.localStorage.login_token) {
      this.props.history.push("/login");
    }
  }
  //   fetch(``, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       AUTHORIZATION: this.token
  //     }
  //   }).then(response => {
  //     console.log(response);
  //   });
  // }
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error('로그인이 필요합니다!');
  //     }
  //   })
  //   .then(response => response.DATA)
  //   .then(response => {
  //     this.setState({
  //       title: response.TITLE,
  //       category: response.CATEGORY,
  //       content: response.CONTENT,
  //     });
  //   })
  //   .catch(error => {
  //     alert('로그인을 해야만 볼 수 있습니다!');
  //     this.props.history.push('/login');
  //   });
  // }
  render() {
    return (
      <div className="mainContainer">
        <div className="columns">
          {/* <PhotoBox /> */}
          {data.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
