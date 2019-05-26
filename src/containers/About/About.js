import React, { Component } from 'react';

import classes from './About.module.css';
import avatar from '../../assets/images/avatar.png';

class About extends Component {

    componentDidMount() {
        let stylesheet = "https://www.testdome.com/content/source/stylesheets/embed.css";
        let link = document.createElement("link");
        link.href = stylesheet;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);

        stylesheet = "https://www.testdome.com/content/source/stylesheets/embed.css";
        link = document.createElement("link"); 
        link.href = stylesheet;
        link.type = "text/css"; 
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    render() {
        return (
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

                <div className={classes.Center}>
                    <h2>Certificates</h2>
                    <div className={classes.Certificates}>
                        <a href="https://www.testdome.com/cert/24a7a41860cc4727b2fdd65655f6871b" className="testdome-certificate-stamp gold">
                            <span className="testdome-certificate-name">Haim Fridland</span>
                            <span className="testdome-certificate-test-name">JavaScript </span>
                            <span className="testdome-certificate-card-logo">TestDome<br />Certificate</span>
                        </a>

                        <div className={classes.SertDivider}></div>

                        <a href="https://www.testdome.com/cert/5d4efcbf15764abf9bc6f25dcc9a72dd" className="testdome-certificate-stamp gold">
                            <span className="testdome-certificate-name">Haim Fridland</span>
                            <span className="testdome-certificate-test-name">JavaScript with jQuery </span>
                            <span className="testdome-certificate-card-logo">TestDome<br />Certificate</span>
                        </a>
                    </div>
                </div>
            </div>

        );
    };
}

export default About;