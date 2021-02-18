import React from 'react';
import './BuildControl.css';

const controls = [
    {label: "Salad" , type: "salad"},
    {label: "Cheese" , type: "cheese"},
    {label: "Bacon" , type: "bacon"},
    {label: "Meat" , type: "meat"},
];

const BuildControl = (props) => {
    return (
        <div className = "BuildControl">
            <div className = "Label">{props.label}</div>
            <button className = "Less">Less</button>
            <button className = "More">More</button>
        </div>
    )
};

export default BuildControl;
