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

    const [price, setPrice] = useState(0);

    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    });

    const [purchaseable, setPurchaseable] = useState(false);

    const updatePurchaseable = (ingredient) => {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        setPurchaseable(sum > 0);
    };

    const addIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        ingredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        setPrice(price + addedPrice);
        setIngredients ({...ingredients});
        updatePurchaseable(ingredients);
    };

    const removedIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        ingredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        setPrice(price - addedPrice);
        setIngredients ({...ingredients});
        updatePurchaseable(ingredients);
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
            pdisabled = {purchaseable}
            /> 
        </Auxil>
    );
};

export default BurgerBuilder;
