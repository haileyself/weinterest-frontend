import React from "react";
import "./Mypage.scss";


class Fourpics extends React.Component {
    render () {
        return (
            <div className="view_fourpics_outerwrapper">
                <div className="view_fourpics_wrapper">
                    <div className="view_fourpics_first"></div>
                    <div className="view_fourpics_second"></div>
                    <div className="view_fourpics_third"></div>
                    <div className="view_fourpics_forth"></div>
                </div>
                <div className="view_fourpics_info_wrapper">
                    <div className="view_fourpics_info_container">
                        <div className="view_fourpics_boradname ">패션</div>
                        <div className="view_fourpics_countPin ">핀 6개</div>
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
