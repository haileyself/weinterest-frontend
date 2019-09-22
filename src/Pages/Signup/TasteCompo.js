import React, { Component } from "react";
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
  onClickEvent = e => {
    this.props.onClinkHandle(e, this.props.order);
  };

  render() {
    return (
      <>
        {/* <div className="imageSelect"> */}
        <figure>
          <img src={this.props.info.thumbnail} onClick={this.onClickEvent} />
          <p>{this.props.info.title}</p>
        </figure>
        {/* </div> */}
      </>
    );
  }
}

export default TasteCompo;
