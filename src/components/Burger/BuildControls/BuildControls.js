import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import './OrderButton.css';

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Meat' , type: 'meat'},
];

const BuildControls = (props) => {
    return (
        <div className = "BuildControls">
        <h3>Current Price: <strong>{props.price.toFixed(2)}</strong></h3>
            {controls.map (ctrl => {
               return <BuildControl key = {ctrl.label} 
               label = {ctrl.label}
               added = {() => props.ingredientAdded (ctrl.type)}
               removed = {() => props.ingredientRemoved (ctrl.type)}
               disabled= {props.disabled[ctrl.type]}
               />;
            })} 
            <button className="OrderButton" disabled={!props.pdisabled}>Order Now</button>
        </div>
    )
};

export default BuildControls;
