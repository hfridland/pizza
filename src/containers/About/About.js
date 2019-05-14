import React from 'react';

import classes from './About.module.css';
import avatar from '../../assets/images/avatar.png';

const about = () => (
    <div className={classes.About}>
        <h1>About Me</h1>
        <div className={classes.Center}>
            <img src={avatar} alt='My Photo' />
        </div>
        <p>Hi, my name is <strong>Haim Fridland</strong>. I'm programmer with ~35 years experience. You see my React portfolio. I'm looking for a job or orders. 
         My hourly rate is $35CAD/hour negotiable. I live in Vancouver, BC, Canada. You can contact me by email <a href='mailto:hfridland@shaw.ca'>hfridland@shaw.ca</a>.</p>
    </div>
);

export default about;