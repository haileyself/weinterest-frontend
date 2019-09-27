import React from "react";
import "./Mypage.scss";
import "./Mypicframe.scss"
import data from "./data";
import Picitem from "./Picitem";

class Mypicframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render(){
        console.log(this.props,'얍');
        return (
            <div className="picture_frame">
                <div className="picture_outerframe">
                    <div className="picture_innerframe">
                        {this.props.info && this.props.info[0] && (<div className="pic_item pic_first" style={{ backgroundImage: `url(${this.props.info[0].pin__link})`}}></div>)}
                        {this.props.info && this.props.info[1] && (<div className="pic_item pic_second" style={{ backgroundImage: `url(${this.props.info[1].pin__link})`}}></div>)}
                        {this.props.info && this.props.info[2] && (<div className="pic_item pic_third" style={{ backgroundImage: `url(${this.props.info[2].pin__link})`}}></div>)}
                        {this.props.info && this.props.info[3] && (<div className="pic_item pic_forth" style={{ backgroundImage: `url(${this.props.info[3].pin__link})`}}></div>)}
                        {this.props.info && this.props.info[4] && (<div className="pic_item pic_fifth" style={{ backgroundImage: `url(${this.props.info[4].pin__link})`}}></div>)}
                        {this.props.info && this.props.info[5] && (<div className="pic_item pic_sixth" style={{ backgroundImage: `url(${this.props.info[5].pin__link})`}}></div>)}
                    </div>
                    <div className="pic_info_wrapper">
                        <div className="pic_info_container">
                            <div className="pic_boradname ">{this.props.info && this.props.info[0].pin__title}</div>
                            <div className="count_pin ">핀 {this.props.info && this.props.info.length} 개</div>
                        </div>
                        <div className="editBox">
                            <div className="editBox_inner">
                                <i className="fas fa-pen editBtn"></i>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default Mypicframe;