import React from 'react';
import './Modal.css';
import Auxil from '../../../hoc/Auxil';
import BackDrop from '../BackDrop/BackDrop';

const Modal= (props) => {

    return (
        <Auxil>
            <BackDrop show={props.show} cancel={props.modalClosed}/>
            <div className="Modal"
                 style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'}}
        >
            {props.children}
        </div>
        </Auxil>
    )
}

export default Modal;
