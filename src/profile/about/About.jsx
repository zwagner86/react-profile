import React from 'react';
import What from './what/What';
import Where from './where/Where';
import Who from './who/Who';
import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className="About-inner">
                <Who />
                <What />
                <Where />
            </div>
        </div>
    );
};

export default About;
