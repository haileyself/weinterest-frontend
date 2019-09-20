import React from 'react';
import Mypicframe from './Mypicframe';
import Fourpics from './Fourpics';
import PhotoBox from "Components/PhotoBox";
import './Mypage.scss';
import 'Components/PhotoBox/PhotoBox.scss';
import Boadrlist from './Boardlist';

class Mypage extends React.Component {
    constructor() {
        super();
        this.state = {activeTab : 'boardTab'};
    }

    pickTab = (tab) => {
        this.setState({ activeTab : tab });
    }
    
    render () {
    // console.log(this.state.activeTab);
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
                                        <button onClick={()=>{this.pickTab('boardTab')}}
                                        className={`choice_item  ${this.state.activeTab === 'boardTab' ? 'active_tab_btn' : ''}`}>보드</button>
                                    </div>
                                    <div className="choice_list">
                                        <button onClick={()=>{this.pickTab('pinTab')}}
                                        className={`choice_item  ${this.state.activeTab === 'pinTab' ? 'active_tab_btn' : ''}`}>핀</button>
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
                                        <button onClick={()=>{this.pickTab('sixPicsTab')}}
                                        className={`viewpoint_button ${this.state.activeTab === 'sixPicsTab' ? 'view_active_tab_btn' : ''}`}>
                                            <div className="viewpoint_btn_box">
                                                <i class="fas fa-th-large viewbox_btn"></i>
                                            </div>
                                        </button>
                                        <button onClick={()=>{this.pickTab('fourPicsTab')}}
                                        className={`viewpoint_button ${this.state.activeTab === 'fourPicsTab' ? 'view_active_tab_btn' : ''}`}>
                                            <div className ="viewpoint_btn_box">
                                                <i class="fas fa-th viewbox_btn"></i>
                                            </div>
                                        </button>
                                        <button onClick={()=>{this.pickTab('boardListTab')}}
                                        className={`viewpoint_button ${this.state.activeTab === 'boardListTab' ? 'view_active_tab_btn' : ''}`}>
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
                            {this.state.activeTab === 'boardTab' && <Mypicframe /> }
                            {this.state.activeTab === 'boardTab' && <Mypicframe /> }
                            {this.state.activeTab === 'boardTab' && <Mypicframe /> }
                            {this.state.activeTab === 'pinTab' && <PhotoBox />}
                            {this.state.activeTab === 'pinTab' && <PhotoBox />}
                            {this.state.activeTab === 'pinTab' && <PhotoBox />} 
                            {this.state.activeTab === 'sixPicsTab' && <Mypicframe />}
                            {this.state.activeTab === 'sixPicsTab' && <Mypicframe />}
                            {this.state.activeTab === 'sixPicsTab' && <Mypicframe />}
                            {this.state.activeTab === 'fourPicsTab' && <Fourpics /> }
                            {this.state.activeTab === 'fourPicsTab' && <Fourpics /> }
                            {this.state.activeTab === 'fourPicsTab' && <Fourpics /> }
                            {this.state.activeTab === 'fourPicsTab' && <Fourpics /> }
                            {this.state.activeTab === 'fourPicsTab' && <Fourpics /> }
                            {this.state.activeTab === 'fourPicsTab' && <Fourpics /> } 
                            {this.state.activeTab === 'boardListTab' && <Boadrlist /> } 
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
