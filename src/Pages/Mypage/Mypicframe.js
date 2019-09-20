import React from "react";
import "./Mypage.scss";

class Mypicframe extends React.Component {
    render(){
        return (
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
        )
    }
}

export default Mypicframe;