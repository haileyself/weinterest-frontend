import React from "react";
import DetailImg from "./DetailImg";
import DetailComment from "./DetailComment";
import PhotoBox from "Components/PhotoBox";
import Data from "./DetailData";
import data from "Components/PhotoBox/data";
import DetailSaveBox from "./DetailSaveBox";
import miniData from "./DatailDb";
import "./Detail.scss";

class Detail extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      activeTap: "imgBox",
      changeSend: "",
      download: "",
      isDetailPage: {},
      mainBox: [
        { pins: [] },
        { pins: [] },
        { pins: [] },
        { pins: [] },
        { pins: [] }
      ]
    };
    // console.log(props)
    this.token = localStorage.getItem("login_token")
      ? localStorage.getItem("login_token")
      : props.history.push("/login");
  }

  checkCategoryId = (pin_id) => {
    let defaultId = 0;
    // debugger;
    for (let index=0; index<this.state.mainBox.length; index++){
      for(let i=0; i<this.state.mainBox[index].pins.length; i++){
        if(pin_id === this.state.mainBox[index].pins[i].pin__id){
          // debugger;

          return index;
        }
      }
    }

    return defaultId;
  };

  showTap = e => {
    this.setState({ activeTap: e });
  };

  handleClick = () => {
    this.setState(item => ({
      changeSend: !item.changeSend
    }));
  };
  handleClick2 = () => {
    this.setState(item => ({
      download: !item.download
    }));
  };

  pageBack = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // console.log(this.props)
    fetch(`http://10.58.6.208:8000/pins/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("login_token")
      }
    })
      .then(Response => Response.json())
      .then(Response => {
        //console.log("반응",Response)
        // debugger;
        this.setState({isDetailPage:Response});
      });
      
      fetch("http://10.58.6.208:8000/pins?offset=0&limit=50", {
        method: "GET",
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          // debugger;
          this.setState({ mainBox: response.pins });
        });
  }
  render() {
    // console.log("이거이거", this.state.isDetailPage.pin_info && this.state.isDetailPage.pin_info[0].pin_url)
    let pin_id = -1;
    if('pin_info' in this.state.isDetailPage){
      pin_id = this.state.isDetailPage.pin_info[0].pin_id;
    }
    
    let categoryID = this.checkCategoryId(pin_id);
    return (
      <div className="detail_body">
        <div className="detail_wrap">
          <div onClick={this.pageBack} className="detail_back_button">
            <i className="fas fa-arrow-left back"></i>
          </div>
          <div className="detail_main_page">
            <div className="detail_main_page_top">
              <div className="detail_main_page_top_detail_wrap">
                <div className="detail_main_page_top_bar_wrap">
                  {this.state.download ? (
                    <div className="downImg">
                      <div className="downImg_text1">이미지 다운로드</div>
                      <div className="downImg_text2">핀 신고</div>
                      <div className="downImg_text3">삽입</div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    onClick={this.handleClick2}
                    className="detail_main_page_top_bar"
                  >
                    <i className="fas fa-ellipsis-h dotdot"></i>
                  </div>
                </div>
                <div className="detail_main_page_top_send">
                  <div className="detail_main_page_top_send_wrap">
                    <div className="detail_main_page_top_send_img_wrap">
                      <i className="fas fa-upload"></i>
                    </div>
                    <div className="detail_main_page_top_send_text">보내기</div>
                  </div>
                </div>
                <div
                  onClick={this.handleClick}
                  className={`detail_main_page_top_save_wrap`}
                >
                  {this.state.changeSend ? (
                    <div className="changeImg">
                      <div className="changeBox">
                        <div className="serch_wrap">
                          <div className="serch_box">
                            <i class="fas fa-search"></i>
                          </div>
                          <input placeholder="검색" className="serch_input" />
                        </div>
                        <div className="changeImg_title">최고 보드 제안</div>
                        {miniData.map((el, i) => (
                          <DetailSaveBox img={el}key={i} />
                        ))}
                      </div>
                      <div className="changeImg_1">
                        <div className="changeImg_1_1">아이폰 배경</div>
                        <div className="detail_main_page_top_save_1_img">
                          <i class="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="detail_main_page_top_save_1">
                    <div className="detail_main_page_top_save_1_text">
                      아이폰 배경
                    </div>
                    <div className="detail_main_page_top_save_1_img">
                      <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="detail_main_page_top_save_2">
                    <div className="hover"></div>저장
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_main_page_box_wrap">
              <a href={Data.link}>
                <div className="detail_main_page_box_img">
                  {/* <img src={Data.img}/> */}
                  <img src={this.state.isDetailPage.pin_info && this.state.isDetailPage.pin_info[0].pin_url}></img>
                  <div className="img_text_wrap">
                    <div className="img_box">
                      <i class="fas fa-location-arrow"></i>
                      {<div className="text">{Data.url}</div>}
                    </div>
                  </div>
                </div>
              </a>
              <div className="detail_main_page_box_text">
                <div className="detail_main_page_box_text_top1">
                  <div className="detail_main_page_box_text_top1_img">
                    {/* <img src={Data.idImg}></img> */}
                    <i class="fas fa-user"></i>
                  </div>
                  <div className="detail_main_page_box_text_top1_text">
                    <div className="detail_main_page_box_text_top1_text1">
                      <a>{Data.id}</a> 님이 <a>아이폰배경</a>에 저장함
                    </div>
                    <div className="detail_main_page_box_text_top1_text2">
                      여자 앉는 자세
                    </div>
                  </div>
                  <div className="detail_main_page_box_text_top1_pin">
                    <div className="detail_main_page_box_text_top1_pin_img">
                      <i className="fas fa-thumbtack img"></i>
                    </div>
                    <div className="detail_main_page_box_text_top1_pin_nember">
                      820
                    </div>
                  </div>
                </div>
                <a href={Data.link}>
                  <div className="detail_main_page_moveButton">
                    <div className="link_box">
                      <div className="moveButton_img">
                        <i class="fas fa-location-arrow"></i>
                      </div>
                      <div className="moveButton_text">{Data.url}</div>
                    </div>
                  </div>
                </a>
                <div className="detail_main_page_box_text_top2">
                  <div className="detail_main_page_box_text_top2_title">
                    사진 및 댓글
                  </div>
                  <div className="detail_main_page_box_text_top2_title_button_wrap">
                    <div
                      onClick={() => this.showTap("imgBox")}
                      className={`detail_main_page_box_text_top2_title_button1 ${
                        this.state.activeTap === "imgBox"
                          ? "active_tab_button"
                          : ""
                      }`}
                    >
                      사진
                    </div>
                    <div
                      onClick={() => this.showTap("commentTap")}
                      className={`detail_main_page_box_text_top2_title_button1 ${
                        this.state.activeTap === "commentTap"
                          ? "active_tab_button"
                          : ""
                      }`}
                    >
                      댓글
                    </div>
                  </div>
                  <div>
                    {this.state.activeTap === "imgBox" && <DetailImg />}
                    {this.state.activeTap === "commentTap" && <DetailComment pin_id={this.props.match.params.id} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={this.pageBack} className="detail_wrap_exit ">
            <i className="fas fa-times img"></i>
          </div>
        </div>
        <div className="detail_similar_title">유사한 핀 더보기</div>
        <div className="detail_similar_img_box">
          <div className="detail_similar_img">
          {this.state.mainBox[categoryID].pins.map((el, i) => (
            <PhotoBox info={el} key={i} />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
