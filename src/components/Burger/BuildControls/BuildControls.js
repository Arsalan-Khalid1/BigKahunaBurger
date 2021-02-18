import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Meat' , type: 'meat'},
];

const BuildControls = (props) => {
    return (
        <div className = "BuildControls">
            {controls.map (ctrl => {
               return <BuildControl key = {ctrl.label} label = {ctrl.label}/>;
            })} 
        </div>
    )
};

export default BuildControls;
