import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {profileImage} from 'personal-site-data';
import './ProfileInfo.css';

const ProfileInfo = () => (
    <div className="ProfileInfo">
        <div className="ProfileInfo-inner">
            <div className="ProfileInfo-inner-cell">
                <div className="ProfileInfo-pic-container">
                    <img
                        className="ProfileInfo-pic-img"
                        src={profileImage}
                        alt="Zachary Wagner Profile" />
                </div>
                <h1>Hey, I&apos;m Zach,</h1>
                <h4 className="ProfileInfo-h4">a Front End Engineer</h4>
                <h4 className="ProfileInfo-h4">working in Chicago</h4>
                <h4 className="ProfileInfo-h4">for Rippleshot</h4>
                <div className="ProfileInfo-social-icons">
                    <a
                        className="ProfileInfo-social-link ProfileInfo-linkedin-link"
                        href="https://www.linkedin.com/in/zacharywagner"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="ProfileInfo-social-icon"
                            icon={['fab', 'linkedin']}
                            size="2x"
                            fixedWidth
                        />
                    </a>
                    <a
                        className="ProfileInfo-social-link ProfileInfo-github-link"
                        href="https://github.com/zwagner86"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="ProfileInfo-social-icon"
                            icon={['fab', 'github']}
                            size="2x"
                            fixedWidth
                        />
                    </a>
                </div>
                <div className="ProfileInfo-resume-link">
                    <Link
                        to="/resume"
                        className="ProfileInfo-resume-btn"
                    >
                        View Resume
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileInfo;
