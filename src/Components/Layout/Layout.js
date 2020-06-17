import React, { Component } from 'react';
import Auxiliary from '../../Hoc/Auxiliary.js';
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import classes from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'


class Layout extends Component {
    state={showSideDrower:false}

    sideDrawerClosedHandler= () =>{
        this.setState({showSideDrower:false})

    }
    sideDrawerToggleHandler= () =>{
        this.setState((prevState) =>{
            return {showSideDrower: !prevState.showSideDrower}
        })

    }
    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrower} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>{this.props.children}</main>

            </Auxiliary>

        )



    }



}

export default Layout;