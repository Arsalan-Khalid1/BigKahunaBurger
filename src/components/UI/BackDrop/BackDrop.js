import React from 'react';
import './BackDrop.css'

const BackDrop = (porps) => {
    return (
        porps.show ? <div className = "BackDrop" onClick={porps.cancel}></div> : null
    );
};

export default BackDrop;
