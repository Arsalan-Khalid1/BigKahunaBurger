import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxil from '../../../hoc/Auxil';

const SideDrawer = (props) => {
    let attatchedClasses = "SideDrawer Close";
    if(props.open) {
        attatchedClasses = "SideDrawer Open";
    }
    return (
        <Auxil>
        <BackDrop show={props.open} cancel={props.closed}/>
        <div className={attatchedClasses}>
           
                <Logo height="11%" margin="0 0 32px 0"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Auxil>
    );
    };

export default SideDrawer;
