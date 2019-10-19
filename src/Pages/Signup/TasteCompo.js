import React, { Component } from "react";
import images from "Images/images.png";
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

    this.state = {
      selected: 0
    };
  }

  onClickHandler = e => {
    // debugger;
    this.setState({
      selected: !this.state.selected
    });

    this.props.onClinkHandle(e, this.props.order);
  };

  render() {
    // console.log("배고파", this.props.info);
    //console.log("뭐라도써야겠어", this.props.handleClick);
    return (
      <>
        <figure>
          <div className="tasteContainer">
            {this.state.selected ? (
              <div className="wrapper" onClick={this.onClickHandler}>
                <div className="imageHover">
                  <img src={images} alt="check" />
                </div>
              </div>
            ) : (
              ""
            )}

            {/* 
            {this.state.selected === 1 && (
              <div className="imageHover">
                <img src={CheckImage} alt="check" />
              </div>
            )} */}

            <img src={this.props.info.img_url} onClick={this.onClickHandler} />
            <p>{this.props.info.title}</p>

            {/* <img src={this.props.info.img_url} onClick={this.onClickHandler} />
            <p>{this.props.info.title}</p> */}
          </div>
        </figure>
      </>
    );
  }
}

export default TasteCompo;
