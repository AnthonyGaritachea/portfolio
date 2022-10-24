import React from 'react';
import Modal from 'react-modal';

import { GiExpand } from 'react-icons/gi';
import { IconContext } from "react-icons";
import { FaRegWindowClose } from 'react-icons/fa'

Modal.setAppElement('#root');

class ReactModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal(){
        this.setState({
            modalIsOpen: true
        })
    };
    
    closeModal(){
        this.setState({
            modalIsOpen: false
        })
    };

    render(){
        return (
            <div>
                <IconContext.Provider value={{className: "icons" }}><GiExpand onClick={this.openModal}/></IconContext.Provider>
                <Modal
                    className='react-modal'
                    overlayClassName='overlay'
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    closeTimeoutMS={700}
                >
                    <div>
                        <button className='modal-button'>
                            <IconContext.Provider value={{ className: "icons" }}>
                                <FaRegWindowClose onClick={this.closeModal} />
                            </IconContext.Provider>
                        </button>
                        {this.props.ProjectImage && <img src={require(`../../../public/images/${this.props.ProjectImage}`)} />}
                        <p>Tech Stack: {this.props.ProjectTechStack}</p>
                    </div>  
                </Modal>
            </div>
        )
    }
};

export default ReactModal;