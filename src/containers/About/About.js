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
        My resume can be found at <a href='http://hfridland.com/resume/' target='_blank' rel='noopener noreferrer'>http://hfridland.com/resume/</a> or 
        <a href='http://hfridland.com/resume/resume.pdf' target='_blank' rel='noopener noreferrer'> as PDF</a>.
        You see my React portfolio. Sources can be found at <a href='https://github.com/hfridland/pizza' target='_blank' rel='noopener noreferrer'>https://github.com/hfridland/pizza</a> I'm looking for a job or orders. 
         My hourly rate is $35CAD/hour negotiable. I live in Vancouver, BC, Canada. You can contact me by email <a href='mailto:hfridland@shaw.ca'>hfridland@shaw.ca</a>.</p>
    </div>
);

export default about;