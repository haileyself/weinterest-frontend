import React, { Component } from "react";
import Logo from "Images/Logo.png";
import "./Header.scss";
import HeaderCompo from "./HeaderCompo";

class Header extends Component {
  constructor() {
    super();

    this.state = { searchEngine: "unclick" };
  }

  showMeList = e => {
    this.setState({ searchEngine: "click" });
  };

  render() {
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
          <div
            className={`headerSearch ${
              this.state.searchEngine === "click"
                ? "listToSearch "
                : "headerSearch"
            }`}
          >
            <i className="fas fa-search small_search_Icon" />
            <input
              type="email"
              className="searchsearch"
              placeholder="검색"
              onClick={this.showMeList}
            />
            <HeaderCompo />
          </div>
          <div className="theOthers">
            <a href="/">
              <div className="home_1">홈</div>
            </a>
            <div className="home_2">팔로잉</div>
            <div className="home_3">alice</div>
          </div>
          <div className="theRestOf">
            <div className="box"></div>
            <div className="restWrap">
              <i className="fas fa-comment-dots msg"></i>
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
