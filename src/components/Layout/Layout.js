import React from 'react';
import Auxil from '../../hoc/Auxil';
import './Layout.css';

function Layout(props) {
    return (
        <Auxil>
            <div>
            {/* Toolbar, SideDrawer, Backdrop */}
        </div>
        <main className="Content">
            {props.children}
        </main>
        </Auxil>
    )
}

export default Layout;
