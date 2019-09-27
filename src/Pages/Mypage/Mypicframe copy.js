// import React from "react";
// import "./Mypage.scss";
// import "./Mypicframe.scss"
// import data from "./data";
// import Picitem from "./Picitem";

// class Mypicframe extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             first: [],
//         }
//     }
    
//     render(){
//         console.log(this.props);
//        return (
//             <div className="picture_frame">
//                 <div className="picture_outerframe">
//                     <div className="picture_innerframe">
//                         {/* <div className="pic_item pic_first" > 
//                         </div> 
//                         <div className="pic_item pic_second">
//                         </div>   
//                         <div className="pic_item pic_third">
//                         </div>
//                         <div className="pic_item pic_forth">
//                         </div>
//                         <div className="pic_item pic_fifth">
//                         </div>
//                         <div className="pic_item pic_sixth">
//                         </div>
//                     </div> */}
//                     {/* 맵돌리기 테스트 시작  */}
//                     {/* {data.map((e) =>
            
//                     (
//                     <div> */}

//                         {/* <div className="pic_item pic_first" style={{ backgroundImage: `url(${e.imageSrc_first})`}}>
//                         </div>
//                         <div className="pic_item pic_second" style={{ backgroundImage: `url(${e.imageSrc_second})`}}>
//                         </div>
//                         <div className="pic_item pic_third" style={{ backgroundImage: `url(${e.imageSrc_third})`}}>
//                         </div>
//                         <div className="pic_item pic_forth" style={{ backgroundImage: `url(${e.imageSrc_forth})`}}>
//                         </div>
//                         <div className="pic_item pic_fifth" style={{ backgroundImage: `url(${e.imageSrc_fifth})`}}>
//                         </div>
//                         <div className="pic_item pic_sixth" style={{ backgroundImage: `url(${e.imageSrc_sixth})`}}>
//                         </div> */}
                        
//                         {/* <div className="pic_item pic_first" style={{ backgroundImage: `url(${this.props.info.pin__link})`}}>
//                         </div>
//                         <div className="pic_item pic_first" style={{ backgroundImage: `url(${this.props.info2.pin__link})`}}>
//                         </div> */}
//                         <div className="pic_item pic_third" style={{ backgroundImage: `url(${this.props.imageList[2]})`}}>
//                         </div>
//                         <div className="pic_item pic_forth" style={{ backgroundImage: `url(${this.props.imageList[3]})`}}>
//                         </div>
//                         <div className="pic_item pic_fifth" style={{ backgroundImage: `url(${this.props.imageList[4]})`}}>
//                         </div>
//                         <div className="pic_item pic_sixth" style={{ backgroundImage: `url(${this.props.imageList[5]})`}}>
//                         </div> 

//                     {/* </div>
//                     ))} */}
//                     </div> 
//                     {/* 테스트종료 */}
//                     <div className="pic_info_wrapper">
//                         <div className="pic_info_container">
//                             <div className="pic_boradname ">{this.props.cate}</div>
//                             <div className="count_pin ">핀 6개</div>
//                         </div>
//                         <div className="editBox">
//                             <div className="editBox_inner">
//                                 <i className="fas fa-pen editBtn"></i>
//                             </div>   
//                         </div>
//                     </div>
//                 </div>
//            </div>
//         )
//     }
// }

// export default Mypicframe;