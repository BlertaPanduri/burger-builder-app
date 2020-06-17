import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Auxiliary from '../../../Hoc/Auxiliary.js';
import Logo from '../../Logo/Logo';


const SideDrawer = (props)=>{
    let attachedClasses=[classes.SideDrawer,classes.Close]
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open]
    
    }
    return(
        <Auxiliary>

            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                <Logo/>
                </div>
        
            <nav>
                <NavigationItems/>
            </nav>
            </div>
            <Backdrop show={props.open} clicked={props.closed}/>
        </Auxiliary>
    )
}
export default SideDrawer; 
