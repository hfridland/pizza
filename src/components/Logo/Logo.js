import React from 'react';

import pizzaLogo from '../../assets/images/pizza_logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pizzaLogo} alt="MyPizza" />
    </div>
);

export default logo;