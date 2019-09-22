import React from "react";
import "./Mypage.scss";


class CreateList extends React.Component {
    render () {
        return (
            <div className="createList">
                <a href="/">
                    <div className="addBoardList">보드 만들기</div></a>
                <a href="/">    
                    <div className="addPinList">핀 만들기</div></a>
            </div>
        )
    }
};

export default CreateList;

                       