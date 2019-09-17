import React from 'react';
import './MyPage.scss';

class Mypage extends React.Component {
    constructor() {
        super();
    }


    render () {
    return (
        <div className="mypage">
            <div className="mypage_wrapper">
                <div className="header_wrapper">
                    <div className="header_container">
                        <div className="header">헤더</div>
                    </div>
                    <div className="subheader_container">
                        <div className="subheader">서브헤더</div>
                    </div>
                </div>
                <div className="content_wrapper">
                    <div className="user_info_container">
                        <div className="user_profile_wrapper">
                            <div className="user_profile">
                                <div>내 이름</div>
                                <div>
                                    <span>팔로워 수</span>
                                    <span>팔로잉 수 </span>
                                </div>                        
                            </div>
                            <div className="user_pic_container">
                                <img className="user_picture" alt="user_pic"></img>
                            </div>
                        </div>
                    </div>
                    <div className="my_content_wrapper">
                        <div className="content_list">
                            <div className="ct_choice_li">
                                <a className="choice_list">
                                    <div className="board_item">보드</div>
                                </a>
                                <a className="choice_list">
                                    <div className="pin_item">핀</div>
                                </a>
                                <a className="choice_list">
                                    <div className="pin_item">시도</div>
                                </a>
                                <a className="choice_list">
                                    <div className="pin_item">주제</div>
                                </a>
                            </div>
                            <div className="ct_choice_view">
                                <button className="viewpoint_button">
                                    <div>뒤죽박죽</div>
                                </button>
                                <button className="viewpoint_button">
                                    <div>4개씩보기</div>
                                </button>
                                <button className="viewpoint_button">
                                    <div>목록형</div>
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
                        <div className="content_pic_container">
                            <div className="picture_frame_wrapper">
                                <div className="picture_frame">
                                    <div className="pic_item_first"> 백그라운드이미지주기
                                    </div> 
                                    <div className="pic_item_second">
                                    </div>   
                                    <div className="pic_item_third">
                                    </div>
                                    <div className="pic_item_forth">
                                    </div>
                                    <div className="pic_item_fifth">
                                    </div>
                                    <div className="pic_item_sixth">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mypage_footer_wrapper">
                    <div className="mypage_footerbtn_wrapper">
                        <div className="footerbtn">
                            <button>
                                <div>핀추가</div>
                            </button>
                        </div>
                        <div className="footerbtn">
                            <button>
                                <div>물음표</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Mypage;
