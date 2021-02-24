import React from 'react';
import BurgerLogo from '../../Assets/Images/burger-logo.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height, margin:props.margin}}>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    );
};

export default Logo;
