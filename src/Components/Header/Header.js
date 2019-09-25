import React, { Component } from "react";
import HeaderCompo from "./HeaderCompo";
import Logo from "Images/Logo.png";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      tagList: [],
      headerToggle: false
    };
  }
  onModal = e => {
    this.setState({ headerToggle: !this.state.headerToggle });
  };
  inputTag = e => {
    // console.log(e.target.value);
    // const newTagsList = [...this.state.tagList, e.target.value];
    this.setState({
      text: e.target.value
    });
    console.log(this.state.text);
  };

  onKeyDownFunc = e => {
    // let val = e.target.value;
    if (e.key === "Enter") {
      this.setState(prev => ({ tagList: [...prev.tagList, this.state.text] }));
      e.target.value = "";
      console.log("enter");
    }
  };

  render() {
    //console.log(<headerToggle />);
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
              <i className="fas fa-comment-dots msg home"></i>
              <i className="fas fa-bell msg"></i>
              <i className="fas fa-ellipsis-h msg"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
