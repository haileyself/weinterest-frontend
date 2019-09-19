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
                        <div className="subheader">
                            <div className="btn_wrapper">
                                <button className="subhed_btn">
                                    <i class="fas fa-plus sub_btn"></i>
                                </button>
                                <button className="subhed_btn">
                                    <i class="fas fa-pen sub_btn"></i>
                                </button>
                                <button className="subhed_btn">
                                    <i className="fas fa-upload sub_btn"></i>
                                </button>
                            </div>
                    </div>
                </div>
                <div className="content_wrapper">
                    <div className="user_info_container">
                        <div className="user_profile_wrapper">
                            <div className="user_profile">
                                <div className="user_name_box">
                                    <h4 className="user_name">hyemin Jeong</h4>
                                </div>
                                <div>
                                    <span className="follow_info">
                                        <a className="follow_info_link" href=".com">팔로워 0명</a>
                                    </span>
                                    <span className="follow_info_link follow_info_dot">
                                    ·
                                    </span>
                                    <span className="follow_info">
                                        <a className="follow_info_link" href=".com">팔로잉 0명 </a>
                                    </span>
                                </div>                        
                            </div> 
                            <div className="user_pic_container">
                                <div className="user_pic_wrapper">
                                    <img className="user_picture" src="https://s.pinimg.com/images/user/default_280.png" alt="user_pic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my_content_wrapper">
                        <div className="content_list_wrapper">
                            <div className="content_list">
                                <div className="ct_choice_li">
                                    <div className="choice_list ">
                                        <button className="choice_item choice_item_board">보드</button>
                                    </div>
                                    <div className="choice_list">
                                        <button className="choice_item">핀</button>
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
                                        <button className="viewpoint_button view_btn_simple">
                                            <div className="viewpoint_btn_box">
                                                <i class="fas fa-th-large viewbox_btn"></i>
                                            </div>
                                        </button>
                                        <button className="viewpoint_button">
                                            <div className="viewpoint_btn_box">
                                                <i class="fas fa-th viewbox_btn"></i>
                                            </div>
                                        </button>
                                        <button className="viewpoint_button">
                                            <div className="viewpoint_btn_box">
                                                <i class="fas fa-bars viewbox_btn"></i>
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
                            <div className="picture_frame_wrapper">
                            <div className="picture_frame">
                                    <div className="picture_outerframe">
                                        <div className="picture_innerframe">
                                            <div className="pic_item pic_first" > 
                                            </div> 
                                            <div className="pic_item pic_second">
                                            </div>   
                                            <div className="pic_item pic_third">
                                            </div>
                                            <div className="pic_item pic_forth">
                                            </div>
                                            <div className="pic_item pic_fifth">
                                            </div>
                                            <div className="pic_item pic_sixth">
                                            </div>
                                        </div>
                                        <div className="pic_info_wrapper">
                                           <div className="pic_info_container">
                                                <div className="pic_boradname ">패션</div>
                                                <div className="count_pin ">핀 6개</div>
                                            </div>
                                            <div className="editBox">
                                                <div className="editBox_inner">
                                                    <i class="fas fa-pen editBtn"></i>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="picture_frame">
                                    <div className="picture_outerframe">
                                        <div className="picture_innerframe">
                                            <div className="pic_item pic_first" > 
                                            </div> 
                                            <div className="pic_item pic_second">
                                            </div>   
                                            <div className="pic_item pic_third">
                                            </div>
                                            <div className="pic_item pic_forth">
                                            </div>
                                            <div className="pic_item pic_fifth">
                                            </div>
                                            <div className="pic_item pic_sixth">
                                            </div>
                                        </div>
                                        <div className="pic_info_wrapper">
                                           <div className="pic_info_container">
                                                <div className="pic_boradname ">패션</div>
                                                <div className="count_pin ">핀 6개</div>
                                            </div>
                                            <div className="editBox">
                                                <div className="editBox_inner">
                                                    <i class="fas fa-pen editBtn"></i>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="picture_frame">
                                    <div className="picture_outerframe">
                                        <div className="picture_innerframe">
                                            <div className="pic_item pic_first" > 
                                            </div> 
                                            <div className="pic_item pic_second">
                                            </div>   
                                            <div className="pic_item pic_third">
                                            </div>
                                            <div className="pic_item pic_forth">
                                            </div>
                                            <div className="pic_item pic_fifth">
                                            </div>
                                            <div className="pic_item pic_sixth">
                                            </div>
                                        </div>
                                        <div className="pic_info_wrapper">
                                           <div className="pic_info_container">
                                                <div className="pic_boradname ">패션</div>
                                                <div className="count_pin ">핀 6개</div>
                                            </div>
                                            <div className="editBox">
                                                <div className="editBox_inner">
                                                    <i class="fas fa-pen editBtn"></i>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mypage_footer_wrapper">
                    <div className="mypage_footerbtn_wrapper">
                            <button className="footerBtnBox">
                                <i class="fas fa-plus footer_btn"></i>
                            </button >
                            <button className="footerBtnBox">
                                <i class="fas fa-question footer_btn"></i>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Mypage;
