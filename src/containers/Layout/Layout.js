import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

export class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }    


    render() {
        return (
            <>
                <Toolbar 
                    /*isAuth={this.props.isAuthenticated}*/
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    /*isAuth={this.props.isAuthenticated}*/
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;
