import React from "react";

class DetailImg extends React.Component {
  render() {
    return (
      <div>
        <div className="detail_main_page_box_text_top2_title_imgBox">
          <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
          <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
          <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
          <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
        </div>
        <div className="detail_main_page_img">
          <div className="img_text_img">
            <div className="img_img">이 핀을 시도해보셨나요?</div>
            <div className="img_text">사진을 추가하여 경험을 공유해주세요</div>
          </div>
          <button className="img_text_button">
            <div
              className="hover
    "
            ></div>
            사진 추가
          </button>
        </div>
      </div>
    );
  }
}

export default DetailImg;
