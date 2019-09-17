import React from "react";
import "./Detail.scss";

class Deail extends React.Component {
  render() {
    return (
      <div className="detail_body">
        <div className="detail_wrap">
          <div className="detail_back_button">
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
                  <div className="detail_main_page_top_send_wrap">
                    <div className="detail_main_page_top_send_img_wrap">
                      <i className="fad fa-arrow-from-bottom"> </i>
                    </div>
                    <div className="detail_main_page_top_send_text">보내기</div>
                  </div>
                </div>
                <div className="detail_main_page_top_save">
                  <div className="detail_main_page_top_save_1">
                    <div className="detail_main_page_top_save_1_text">
                      아이폰 배경
                    </div>
                    <div className="detail_main_page_top_save_1_img">
                      <i className="far fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="detail_main_page_top_save_2">저장</div>
                </div>
              </div>
            </div>
            <div className="detail_main_page_box_wrap">
              <div className="detail_mail_page_box_img">
                <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
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
                <div className="detail_main_page_moveButton"></div>
                <div className="detail_main_page_box_text_top2">
                  <div className="detail_main_page_box_text_top2_title">
                    사진 및 댓글
                  </div>
                  <div className="detail_main_page_box_text_top2_title_button_wrap">
                    <div className="detail_main_page_box_text_top2_title_button1">
                      사진 1개
                    </div>
                    <div className="detail_main_page_box_text_top2_title_button2">
                      댓글 1개
                    </div>
                  </div>
                  <div className="detail_main_page_box_text_top2_title_imgBox">
                    <div></div>
                  </div>
                  <div>댓글</div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_wrap_exit ">
            <i className="fas fa-times img"></i>
          </div>
        </div>
        <div className="detail_similar_box">유사한 핀 더보기</div>
        <div>이미지들어오는곳</div>
      </div>
    );
  }
}

export default Deail;
