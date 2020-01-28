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
        const video = this.props.video;
        const link = this.props.link;
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
                    {video ? <iframe className='video-peek' src={video} style={{display: 'block'}}></iframe> : ''}
                    <h1 className='modal-header'>Challenges</h1>
                    <p className='modal-details'>{this.props.challenges}</p>
                    <br/>
                    <h1 className='modal-header'>Outcome</h1>
                    <p className='modal-details'>{this.props.outcome}</p>
                    {link ? <a href={link} className='modal-link'>Read Article</a> : ''}
                </Modal>
            </div>
        )
    }
};

export default ReactModal;