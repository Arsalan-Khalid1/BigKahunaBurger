import React, {useState} from 'react';
import Auxil from '../../hoc/Auxil';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {

    const [drawer, setDrawer] = useState(true);

    const closeDrawerHandler = () => {
        setDrawer(false);
    };

    const sideDrawerToggleHandler = () => {
        setDrawer(!drawer);
    };

    return (
        <Auxil>
            <Toolbar 
            drawerToggleClicked = {sideDrawerToggleHandler}/>
            <SideDrawer 
            closed={closeDrawerHandler}
            open={drawer}
            />
        <main className="Content">
            {props.children}
        </main>
        </Auxil>
    )
}

export default Layout;
