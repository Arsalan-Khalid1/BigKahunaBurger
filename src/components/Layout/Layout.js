import React from 'react';
import Auxil from '../../hoc/Auxil';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    return (
        <Auxil>
            <Toolbar/>
            <SideDrawer/>
        <main className="Content">
            {props.children}
        </main>
        </Auxil>
    )
}

export default Layout;
