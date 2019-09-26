import React, { Component } from "react";
import CheckImage from "Images/CheckImage.png";
import "./Signup.scss";

// const TasteCompo = ({ info = {} }) => {
//   const { thumbnail, title, onClinkHandle } = info;
//   return (
//     <div className="imageSelect" onClick={onClinkHandle}>
//       <figure onClick={onClinkHandle}>
//         <img src={thumbnail} onClick={onClinkHandle} />
//         <p onClick={onClinkHandle}>{title}</p>
//       </figure>
//     </div>
//   );
// };

class TasteCompo extends Component {
  // onClickEvent = e => {
  //   this.props.onClinkHandle(e, this.props.order);
  //   //console.log(this.props.order);
  // };
  constructor(props) {
    super(props);
  }
  render() {
    // console.log("배고파", this.props.info);
    //console.log("뭐라도써야겠어", this.props.handleClick);
    return (
      <>
        <figure>
          <div className="tasteContainer">
            <div className="imageHover">
              <img src={CheckImage} alt="check" />
            </div>
            <img
              src={this.props.info.img_url}
              onClick={this.props.handleClick}
            />
            <p>{this.props.info.title}</p>
            {/* <div className="toImageHover"></div> */}
          </div>
        </figure>
      </>
    );
  }
}

export default TasteCompo;
