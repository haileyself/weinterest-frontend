import React from "react";
import "./Mypage.scss";
import data from "./data";

class Picitem extends React.Component {
    render(){
        return (
            <div className="picture_innerframe">
            {data.map((e)=>
             (
          <div>
              <div className="pic_item pic_first" style={{ backgroundImage: `url(${e.imageSrc})`}}>
              </div>
              <div className="pic_item pic_second" style={{ backgroundImage: `url(${e.imageSrc})`}}>
              </div>
              <div className="pic_item pic_third" style={{ backgroundImage: `url(${e.imageSrc})`}}>
              </div>
              <div className="pic_item pic_forth" style={{ backgroundImage: `url(${e.imageSrc})`}}>
              </div>
              <div className="pic_item pic_fifth" style={{ backgroundImage: `url(${e.imageSrc})`}}>
              </div>
              <div className="pic_item pic_sixth" style={{ backgroundImage: `url(${e.imageSrc})`}}>
              </div>
          </div>
          ))}
          </div>
        )
    }
}

export default Picitem;