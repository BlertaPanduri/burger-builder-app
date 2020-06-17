import React from 'react';
import BurgerLogo from '../../Assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) =>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={BurgerLogo} alt="Burger"/>
    </div>

)

export default Logo;
