import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <div style={{width:'100%', margin:'auto'}}>
                <Burger ingredient={props.ingredients}/>
                
            </div>
                <Button 
                btnType='Danger'
                clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button btnType='Success'
                clicked={props.checkoutContinued}>CONTINUE</Button>
                
            
        </div>
    )
}


export default CheckoutSummary;

