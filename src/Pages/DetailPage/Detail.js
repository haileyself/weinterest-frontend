import React from "react";
import "./Detail.scss";
import DetailImg from "./DetailImg";
import DetailComment from "./DetailComment";
class Detail extends React.Component {
  constructor() {
    super();
    this.state = { commnet: true };
  }
  onchangeFuc = () => {
    this.setState({ commnet: false });
  };
  onchangeFuc2 = () => {
    this.setState({ commnet: true });
  };
  pageBack = () => {
    this.props.history.push("/");
  };
  render() {
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
                  <div className="detail_main_page_top_bar">
                    <i className="fas fa-ellipsis-h dotdot"></i>
                  </div>
                </div>
                <div className="detail_main_page_top_send">
                  <div className="hover"></div>
                  <div className="detail_main_page_top_send_wrap">
                    <div className="detail_main_page_top_send_img_wrap">
                      <i className="fas fa-upload"></i>
                    </div>
                    <div className="detail_main_page_top_send_text">보내기</div>
                  </div>
                </div>
                <div className="detail_main_page_top_save">
                  <div className="detail_main_page_top_save_1">
                    <div className="hover"></div>
                    <div className="detail_main_page_top_save_1_text">
                      아이폰 배경
                    </div>
                    <div className="detail_main_page_top_save_1_img">
                      <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="detail_main_page_top_save_2">
                    <div className="hover">저장</div>저장
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_main_page_box_wrap">
              <div className="detail_main_page_box_img">
                <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
                <div className="img_text_wrap">
                  <div className="img_box">
                    <i class="fas fa-location-arrow"></i>

                    <div className="text">hififunk.tumblr.com</div>
                  </div>
                </div>
              </div>
              <div className="detail_main_page_box_text">
                <div className="detail_main_page_box_text_top1">
                  <div className="detail_main_page_box_text_top1_img">
                    <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
                  </div>
                  <div className="detail_main_page_box_text_top1_text">
                    <div className="detail_main_page_box_text_top1_text1">
                      <a>회원님</a> 님이 <a>아이폰배경</a>에 저장함
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
                      9,820
                    </div>
                  </div>
                </div>
                <div className="detail_main_page_moveButton">
                  <div className="hover"></div>
                  <div className="link_box">
                    <div className="moveButton_img">
                      <i class="fas fa-location-arrow"></i>
                    </div>
                    <div className="moveButton_text">hififunk.tumblr.com</div>
                  </div>
                </div>
                <div className="detail_main_page_box_text_top2">
                  <div className="detail_main_page_box_text_top2_title">
                    사진 및 댓글
                  </div>
                  <div className="detail_main_page_box_text_top2_title_button_wrap">
                    <div
                      onClick={this.onchangeFuc2}
                      className="detail_main_page_box_text_top2_title_button1"
                    >
                      사진
                    </div>
                    <div
                      onClick={this.onchangeFuc}
                      className="detail_main_page_box_text_top2_title_button2"
                    >
                      댓글
                    </div>
                  </div>
                  <div>
                    {this.state.commnet === true ? (
                      <DetailImg />
                    ) : (
                      <DetailComment />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={this.pageBack} className="detail_wrap_exit ">
            <i className="fas fa-times img"></i>
          </div>
        </div>
        <div className="detail_similar_box">유사한 핀 더보기</div>
        <div>이미지들어오는곳</div>
      </div>
    );
  }
}

export default Detail;
