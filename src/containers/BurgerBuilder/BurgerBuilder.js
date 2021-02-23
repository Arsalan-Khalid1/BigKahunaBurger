import React, {useState} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

function BurgerBuilder(props) {

    const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.8,
        bacon: 0.7,
        meat: 1.5
    };

    let [price, setPrice] = useState(0);

    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    });

    const addIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        ingredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        price = price + addedPrice;
        setPrice(price);
        setIngredients ({...ingredients});
    };

    const removedIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        ingredients[type] = updatedCount;
        const reducedPrice = INGREDIENT_PRICES[type];
        price = price - reducedPrice;
        setPrice(price);
        setIngredients ({...ingredients});
    };

    
    const disabledInfo = {...ingredients};
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0;
    };

    return (
        <Auxil>
            <Burger ingredients = {ingredients}/>
            <BuildControls 
            ingredientAdded = {addIngredientsHandler}
            ingredientRemoved = {removedIngredientsHandler}
            price = {price}
            disabled = {disabledInfo}
            /> 
        </Auxil>
    );
};

export default BurgerBuilder;
