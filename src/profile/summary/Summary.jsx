import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {profileImage} from 'personal-site-data';
import './Summary.css';

const Summary = () => (
    <div className="Summary">
        <div className="Summary-inner">
            <div className="Summary-inner-cell">
                <div className="Summary-pic-container">
                    <img
                        className="Summary-pic-img"
                        src={profileImage}
                        alt="Zachary Wagner Profile" />
                </div>
                <h1>Hey, I&apos;m Zach,</h1>
                <h4 className="Summary-h4">a Front End Engineer</h4>
                <h4 className="Summary-h4">working in Chicago</h4>
                <h4 className="Summary-h4">for SpotHero</h4>
                <div className="Summary-social-icons">
                    <a
                        className="Summary-social-link Summary-linkedin-link"
                        href="https://www.linkedin.com/in/zacharywagner"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="Summary-social-icon"
                            icon={['fab', 'linkedin']}
                            size="2x"
                            fixedWidth
                        />
                    </a>
                    <a
                        className="Summary-social-link Summary-github-link"
                        href="https://github.com/zwagner86"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="Summary-social-icon"
                            icon={['fab', 'github']}
                            size="2x"
                            fixedWidth
                        />
                    </a>
                </div>
                <div className="Summary-resume-link">
                    <Link
                        to="/resume"
                        className="Summary-resume-btn"
                    >
                        View Resume
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Summary;
