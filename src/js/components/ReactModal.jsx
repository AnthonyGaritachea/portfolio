import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

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
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                </Modal>
            </div>
        )
    }
};

export default ReactModal;