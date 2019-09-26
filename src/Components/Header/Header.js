import React, { Component } from "react";
import HeaderCompo from "./HeaderCompo";
import Logo from "Images/Logo.png";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      tagList: [],
      headerToggle: false
    };

    this.getToken = localStorage.getItem("login_token");
  }

  onModal = e => {
    this.setState({ headerToggle: !this.state.headerToggle });
  };

  inputTag = e => {
    this.setState({
      text: e.target.value
    });
    //console.log(this.state.text);
  };

  onKeyDownFunc = e => {
    // let val = e.target.value;
    if (e.key === "Enter") {
      this.setState(prev => ({ tagList: [...prev.tagList, this.state.text] }));
      e.target.value = "";
      //console.log("enter");
    }
  };
  moveHome = () => {
    this.props.history.push("/login");
  };

  logout = () => {
    localStorage.clear();
    window.location.reload(true);
    //   this.setState({headerToggle:!this.state.headerToggle})
  };

  render() {
    console.log(this.state.tagList, "태그리스트");

    return (
      <div className="headerContainer">
        <div className="headerWrap">
          <div className="pinterestLogo">
            <a href="/">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
            </a>
          </div>
          <div className="headerSearch">
            <input
              type="text"
              className="searchsearch"
              placeholder="검색"
              onChange={this.inputTag}
              onClick={this.onModal}
              onKeyPress={this.onKeyDownFunc}
              // ref={c => {
              //   this.tagInPut = c;
              // }}
            />
            <i className="fas fa-search small_search_Icon search_icon" />

            {this.state.headerToggle && <HeaderCompo />}

            <div className="compoBg"></div>
          </div>
          <div className="theOthers">
            <a href="/">
              <div className="home_1">홈</div>
            </a>
            <div className="home_2">팔로잉</div>
            <a href="/mypage">
              <div className="home_3">hyemin</div>
            </a>
          </div>
          <div className="theRestOf">
            <div className="box"></div>
            <div className="restWrap">
              <i className="fas fa-comment-dots msgIcon"></i>
              <i className="fas fa-bell alertIcon"></i>
              {this.getToken ? (
                <Link to="/">
                  <div onClick={this.logout} className="loginIcon">
                    Logout
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <div className="loginIcon">Login</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
