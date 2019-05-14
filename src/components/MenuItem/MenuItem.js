import React from 'react';

import classes from './MenuItem.module.css';
import SubItems from './Subitems/Subitems';

const menuItem = (props) => (
    <div className={classes.MenuItem} onClick={props.clicked}>
        {props.data.header.text}
        <SubItems show={props.showSubItems} data={props.data} />
    </div>
);    

export default menuItem;

