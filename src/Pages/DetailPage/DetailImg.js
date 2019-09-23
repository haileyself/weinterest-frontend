import React from "react";

class DetailImg extends React.Component {
  render() {
    return (
      <div>
        <div className="detail_main_page_box_text_top2_title_imgBox">
          <img src="https://images.velog.io/post-images/jingyong91/e98b65f0-d8e8-11e9-8420-5f04f6cc6a81/da342466ced6534b71fe1a0d7dd19e25.jpg"></img>
          <img src="https://images.velog.io/post-images/jingyong91/ad161f20-dc85-11e9-9d0c-9f336e059e9d/f4233ebdaf0cf6e607d177a9e1e90841.jpg"></img>
          <img src="https://images.velog.io/post-images/jingyong91/8cd1a820-dd60-11e9-be84-2502539078d7/ba11ab9e-8dca-4ca9-80a2-b24eaf9be956.jpeg"></img>
          <img src="https://images.velog.io/post-images/jingyong91/a516bb00-dd60-11e9-be84-2502539078d7/-.jpeg"></img>
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
