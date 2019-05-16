import React from 'react';

import classes from './About.module.css';
import avatar from '../../assets/images/avatar.png';

const about = () => (
    <div className={classes.About}>
        <h1>About Me</h1>
        <div className={classes.Center}>
            <img src={avatar} alt="It's me" />
        </div>
        <p>Hi, my name is <strong>Haim Fridland</strong>. I'm programmer with ~35 years experience. 
        My resume can be found at <a href='https://docs.google.com/document/d/e/2PACX-1vSBx20QsUgwKpE_EOaNbH_xBEToBlCfgdoIU7zQSiOVEShBnBXyK6liTP84hZK403jFXtm7LDcTh8pO/pub' target='_blank'> 
        https://docs.google.com/document/d/e/2PACX-1vSBx20QsUgwKpE_EOaNbH_xBEToBlCfgdoIU7zQSiOVEShBnBXyK6liTP84hZK403jFXtm7LDcTh8pO/pub</a>.
        You see my React portfolio. Sources can be found at <a href='https://github.com/hfridland/pizza' target='_blank'>https://github.com/hfridland/pizza</a> I'm looking for a job or orders. 
         My hourly rate is $35CAD/hour negotiable. I live in Vancouver, BC, Canada. You can contact me by email <a href='mailto:hfridland@shaw.ca'>hfridland@shaw.ca</a>.</p>
    </div>
);

export default about;