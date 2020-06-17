import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: 'salad'},
    { label: "Meat", type: 'meat'},
    { label: "Cheese", type: 'cheese'}
    ]


const BuildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>
            Price: <strong>{props.price.toFixed(2)}</strong>
        </p>
        {controls.map(ctrl=>(
        <BuildControl
         key={ctrl.label}
         label={ctrl.label} 
         added = {()=>props.ingredientsAdded(ctrl.type)}
         removed ={()=>props.ingredientsRemoved(ctrl.type)}
         disabled1 ={props.disable2[ctrl.type]}/>
         
        
        ))}

        <button className ={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>

        
        
    </div>

)


export default BuildControls;