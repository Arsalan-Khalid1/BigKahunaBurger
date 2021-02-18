import React, {useState} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

function BurgerBuilder(props) {

    const [ingredients, setIngredients] = useState({
        salad: 1,
        cheese: 1,
        bacon: 1,
        meat: 1
    })

    return (
        <Auxil>
            <Burger ingredients = {ingredients}/>
            <BuildControls/> 
        </Auxil>
    )
};

export default BurgerBuilder;
