import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

function Burger() {
    return (
        <div className = "Burger">
            <BurgerIngredients type = "bread-top"/>
            <BurgerIngredients type = "cheese"/>
            <BurgerIngredients type = "meat"/>
            <BurgerIngredients type = "salad"/>
            <BurgerIngredients type = "bread-bottom"/>
        </div>
    )
};

export default Burger;
