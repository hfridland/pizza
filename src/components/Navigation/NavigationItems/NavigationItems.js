import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact clicked={props.isSideDrawer ? props.clicked : ()=>{}} >Sales</NavigationItem>
        <NavigationItem link="/reports" clicked={props.isSideDrawer ? props.clicked : ()=>{}}>Reports</NavigationItem>
        <NavigationItem link="/about" clicked={props.isSideDrawer ? props.clicked : ()=>{}}>About</NavigationItem>
    </ul>
);

export default navigationItems;

/***
 *         <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link="/order">Orders</NavigationItem> : null }
        { !props.isAuthenticated 
            ? <NavigationItem link="/auth">Authenticate</NavigationItem> 
            : <NavigationItem link="/logout">Logout</NavigationItem> 
        }

 */