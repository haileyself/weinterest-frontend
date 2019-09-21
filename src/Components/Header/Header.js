import React, { Component } from "react";
import HeaderCompo from "./HeaderCompo";
import Logo from "Images/Logo.png";
import "./Header.scss";

class Header extends Component {
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
          <div className="headerSearch">
            <input type="email" className="searchsearch" placeholder="검색" />
            <i className="fas fa-search small_search_Icon search_icon" />
            <HeaderCompo />
            <div className="compoBg"></div>
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
