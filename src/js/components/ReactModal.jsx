import React from 'react';
import Modal from 'react-modal';

import { GiExpand } from 'react-icons/gi';
import { IconContext } from "react-icons";

import momentSvg from '../../../public/images/momentjs.svg';

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
                    <iframe width='400px' height='400px' src={this.props.content}></iframe>
                    <h1 className='modal-header'>Challenges</h1>
                    <p className='modal-details'>{this.props.challenges}</p>
                    <br/>
                    <h1 className='modal-header'>Outcome</h1>
                    <p className='modal-details'>{this.props.outcome}</p>
                </Modal>
            </div>
        )
    }
};

export default ReactModal;