import React from "react";
import Mypicframe from "./Mypicframe";
import Fourpics from "./Fourpics";
import Boadrlist from "./Boardlist";
import Pinlist from "./Pinlist";
import CreateList from "./CreateList";
import CreateBoard from "./CreateBoard";
// import './Mypage.scss';
import "Components/PhotoBox/PhotoBox.scss";
import { API_IP } from "Common";

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "boardTab",
      active: false,
      items: null,
      profile: null
    };

    this.token = localStorage.getItem("login_token")
      ? localStorage.getItem("login_token")
      : this.props.history.push("/login");
  }

  componentDidMount() {
    // 예외처리
    if (this.token === null) return;

    fetch(`${API_IP}/users/profile`, {
      method: "GET",
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          profile: response
        });
      });

    fetch(`${API_IP}/boards`, {
      method: "GET",
      headers: {
        Authorization: this.token
      }
    })
      .then(response => response.json())
      .then(response => {
        //console.log(response.pins);
        this.setState({
          items: response.boards
        });
      });
  }

  pickTab = tab => {
    this.setState({ activeTab: tab });
  };

  toggleClass = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    //console.log(this.state.items, "나와제발...");
    return (
      <div className="mypage">
        <div className="mypage_wrapper">
          <div className="header_wrapper">
            <div className="subheader">
              <div className="btn_wrapper">
                <button
                  onClick={this.toggleClass}
                  className={`subhed_btn  ${
                    this.state.active ? "active_tab_addbtn" : ""
                  }`}
                >
                  <i className="fas fa-plus sub_btn"></i>
                </button>
                <button className="subhed_btn">
                  <i className="fas fa-pen sub_btn"></i>
                </button>
                <button className="subhed_btn">
                  <i className="fas fa-upload sub_btn"></i>
                </button>
                {this.state.active && (
                  <CreateList handleClick={this.toggleClass} />
                )}
              </div>
            </div>
          </div>
          <div className="content_wrapper">
            <div className="user_info_container">
              <div className="user_profile_wrapper">
                <div className="user_profile">
                  <div className="user_name_box">
                    <h4 className="user_name">
                      {this.state.profile && this.state.profile.user.nickname}
                    </h4>
                  </div>
                  <div>
                    <span className="follow_info">
                      <a className="follow_info_link" href=".com">
                        팔로워 0명
                      </a>
                    </span>
                    <span className="follow_info_link follow_info_dot">·</span>
                    <span className="follow_info">
                      <a className="follow_info_link" href=".com">
                        팔로잉 0명
                      </a>
                    </span>
                  </div>
                </div>
                <div className="user_pic_container">
                  <div className="user_pic_wrapper">
                    <img
                      className="user_picture"
                      src="https://s.pinimg.com/images/user/default_280.png"
                      alt="user_pic"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="my_content_wrapper">
              <div className="content_list_wrapper">
                <div className="content_list">
                  <div className="ct_choice_li">
                    <div className="choice_list ">
                      <button
                        onClick={() => {
                          this.pickTab("boardTab");
                        }}
                        className={`choice_item  ${
                          this.state.activeTab === "boardTab"
                            ? "active_tab_btn"
                            : ""
                        }`}
                      >
                        보드
                      </button>
                    </div>
                    <div className="choice_list">
                      <button
                        onClick={() => {
                          this.pickTab("pinTab");
                        }}
                        className={`choice_item  ${
                          this.state.activeTab === "pinTab"
                            ? "active_tab_btn"
                            : ""
                        }`}
                      >
                        핀
                      </button>
                    </div>
                    <div className="choice_list">
                      <button className="choice_item">시도</button>
                    </div>
                    <div className="choice_list">
                      <button className="choice_item">주제</button>
                    </div>
                  </div>
                  <div className="ct_choice_bar">
                    <div className="ct_choice_view">
                      <button
                        onClick={() => {
                          this.pickTab("sixPicsTab");
                        }}
                        className={`viewpoint_button ${
                          this.state.activeTab === "sixPicsTab"
                            ? "view_active_tab_btn"
                            : ""
                        }`}
                      >
                        <div className="viewpoint_btn_box">
                          <i className="fas fa-th-large viewbox_btn"></i>
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          this.pickTab("fourPicsTab");
                        }}
                        className={`viewpoint_button ${
                          this.state.activeTab === "fourPicsTab"
                            ? "view_active_tab_btn"
                            : ""
                        }`}
                      >
                        <div className="viewpoint_btn_box">
                          <i className="fas fa-th viewbox_btn"></i>
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          this.pickTab("boardListTab");
                        }}
                        className={`viewpoint_button ${
                          this.state.activeTab === "boardListTab"
                            ? "view_active_tab_btn"
                            : ""
                        }`}
                      >
                        <div className="viewpoint_btn_box">
                          <i className="fas fa-bars viewbox_btn"></i>
                        </div>
                      </button>
                    </div>
                    <div className="ct_choice_order">
                      <select className="choice_order">
                        <option>마지막 저장일순</option>
                        <option>알파벳순</option>
                        <option>최신 항목 순</option>
                        <option>오래된 항목 순</option>
                        <option>드래그해서 놓기</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content_pic_container">
                {this.state.activeTab === "boardTab" &&
                  (this.state.items &&
                    this.state.items.map((el, i) => {
                      // debugger;
                      return <Mypicframe info={el} key={i} />;
                    }))}
              </div>
              <div className="pinContainer">
                {this.state.activeTab === "pinTab" && (
                  <Pinlist boardList={this.state.items} />
                )}
              </div>
              <div className="content_pic_container">
                {this.state.activeTab === "sixPicsTab" &&
                  this.state.items.map((el, i) => (
                    <Mypicframe info={el} key={i} />
                  ))}
              </div>

              <div className="fourpicCntr">
                {this.state.activeTab === "fourPicsTab" &&
                  this.state.items.map((el, i) => (
                    <Fourpics info={el} key={i} />
                  ))}
              </div>
              <div className="boardListCntr">
                {this.state.activeTab === "boardListTab" && <Boadrlist />}
              </div>
            </div>
          </div>
          <div className="mypage_footer_wrapper">
            <div className="mypage_footerbtn_wrapper">
              <button className="footerBtnBox">
                <i class="fas fa-plus footer_btn"></i>
              </button>
              <button className="footerBtnBox">
                <i class="fas fa-question footer_btn"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;
