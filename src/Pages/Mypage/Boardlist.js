import React from "react";
import "./Mypage.scss";

class Boadrlist extends React.Component {
    render(){
        return (
            <div className="boardlist_container">
                                    <div className="boardlist_index_wrapper">
                                            <div className="boardlist_index_name">이름</div>
                                            <div className="boardlist_index_date">만든날짜:</div>
                                    </div>
                                    <div className="boardlist_content_wrapper">
                                        <div className="boardlist_content_border">
                                            <div className="boardlist_item_container">
                                                <div className="boardlist_item">
                                                    <div className="boardlist_img"></div>
                                                    <div className="boardlist_name">홈페이지</div>
                                                    <div className="boardlist_countpin">핀 1개</div>
                                                </div>
                                                <div className="boardlist_detail">     
                                                    <div className="boardlist_createdAt">2019년 9월 20일</div>
                                                    <div className="board_editBox">
                                                        <div className="board_editBox_inner">
                                                            <i class="fas fa-pen board_editBtn"></i>
                                                        </div> 
                                                    </div>       
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boardlist_content_wrapper">
                                        <div className="boardlist_content_border">
                                            <div className="boardlist_item_container">
                                                <div className="boardlist_item">
                                                    <div className="boardlist_img"></div>
                                                    <div className="boardlist_name">홈페이지</div>
                                                    <div className="boardlist_countpin">핀 1개</div>
                                                </div>
                                                <div className="boardlist_detail">     
                                                    <div className="boardlist_createdAt">2019년 9월 20일</div>
                                                    <div className="board_editBox">
                                                        <div className="board_editBox_inner">
                                                            <i class="fas fa-pen board_editBtn"></i>
                                                        </div> 
                                                    </div>       
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        )
        
        }
    }

    export default Boadrlist;