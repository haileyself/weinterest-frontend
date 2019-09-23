import React from "react";
import './Mypage.scss';
import PhotoBox from "Components/PhotoBox";
import data from "Components/PhotoBox/data";

class Pinlist extends React.Component {
    render() {
        return (
            <div className="pinlist_wrapper">
                <a href='/'>
                <div className="pinlist_innerWrapper">
                    <div className="createPin">
                        <div className="picAdd_wrapper">
                            <div className="pinAddBtn_box">
                                <i className="fas fa-plus pinAddBtn"></i>
                            </div>
                        </div>
                        <div className="makePin">핀 만들기</div>
                    </div>
                    {data.map((el, i) => (
                    <PhotoBox info={el} key={i} />
                     ))}
                </div>
                </a>
            </div>
        )
    }
}

export default Pinlist;
