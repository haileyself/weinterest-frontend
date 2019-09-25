import React from "react";
import CreateBoard from '././CreateBoard';
import "./Mypage.scss";


class CreateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    handleOpenModal = () => {
        // console.log(this.props.handleClick);
        this.setState({
            modal: true
        },
        );
    };

    handleCloseModal = () => {
        this.setState({
            modal : false
        });
    };

    render () {
        console.log(this.state.modal,'props');
        return (
            <div className="createList">
                <div onClick= {this.handleOpenModal}
                
                // this.props.handleClick}}
                    className="addBoardList">보드 만들기 </div>
                    {this.state.modal && <CreateBoard 
                    onClose={this.handleCloseModal}/>}
                <a href="/"> 
                    <div className="addPinList">핀 만들기
                    </div>
                </a>
            </div>
        )
    }
};

export default CreateList;

                       