import React, {useState} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

function BurgerBuilder(props) {

    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    })

    const addIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        ingredients[type] = updatedCount;
        setIngredients ({...ingredients});
    }

    return (
        <Auxil>
            <Burger ingredients = {ingredients}/>
            <BuildControls ingredientAdded = {addIngredientsHandler}/> 
        </Auxil>
    )
};

export default BurgerBuilder;
