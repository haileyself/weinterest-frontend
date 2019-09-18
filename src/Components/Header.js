import React, { Component } from "react";
import Logo from "../Images/Logo.png";
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
            <input type="email" className="headerSearch" placeholder="검색" />
            <div> 홈</div>
            <div>팔로잉</div>
            <div>마이페이지</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
