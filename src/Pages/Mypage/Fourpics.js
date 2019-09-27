import React from "react";
import "./Mypage.scss";


class Fourpics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render () {
        return (
            <div className="view_fourpics_outerwrapper">
                <div className="view_fourpics_wrapper">
                    {this.props.info && this.props.info[0] && (<div className="view_fourpics_first" style={{ backgroundImage: `url(${this.props.info[0].pin__link})`}}></div>)}
                    {this.props.info && this.props.info[1] && (<div className="view_fourpics_second" style={{ backgroundImage: `url(${this.props.info[1].pin__link})`}}></div>)}
                    {this.props.info && this.props.info[2] && (<div className="view_fourpics_third" style={{ backgroundImage: `url(${this.props.info[2].pin__link})`}}></div>)}
                    {this.props.info && this.props.info[3] && (<div className="view_fourpics_forth" style={{ backgroundImage: `url(${this.props.info[3].pin__link})`}}></div>)}
                </div>
                <div className="view_fourpics_info_wrapper">
                    <div className="view_fourpics_info_container">
                        <div className="view_fourpics_boradname ">{this.props.info && this.props.info[0].pin__title}</div>
                        <div className="view_fourpics_countPin ">핀 {this.props.info && this.props.info.length} 개</div>
                    </div>
                    <div className="view_editBox">
                        <div className="view_editBox_inner">
                            <i className="fas fa-pen view_editBtn"></i>
                        </div>   
                    </div>
                </div> 
            </div>    
        )
    }
}

export default Fourpics;
