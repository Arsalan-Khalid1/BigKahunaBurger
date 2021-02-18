import React from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';

function BurgerBuilder(props) {
    return (
        <Auxil>
            <Burger/>
            <div>Build Controls</div>
        </Auxil>
    )
};

export default BurgerBuilder;
