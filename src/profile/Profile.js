import React from "react";
import profilePic from "./assets/prof-pic.png";
import githubIcon from "./assets/github_circle_gray.png";
import linkedInIcon from "./assets/linkedin_circle_gray.png";
import "./Profile.css";

const ProfileInfo = () => (
    <div className="Profile">
        <div className="Profile-inner">
            <div className="Profile-inner-cell">
                <div className="Profile-pic-container">
                    <img
                        className="Profile-pic-img"
                        src={profilePic}
                        alt="Zachary Wagner Profile" />
                </div>
                <h1>Hey, I&apos;m Zach,</h1>
                <h4 className="Profile-h4">a Front End Engineer</h4>
                <h4 className="Profile-h4">working in Chicago</h4>
                <h4 className="Profile-h4">for SpotHero</h4>
                <div className="Profile-social-icons">
                    <a
                        className="Profile-social-link Profile-linkedin-link"
                        href="https://www.linkedin.com/in/zacharywagner"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="Profile-social-img Profile-linkedin-img"
                            src={linkedInIcon}
                            alt="LinkedIn Icon"
                        />
                    </a>
                    <a
                        className="Profile-social-link Profile-github-link"
                        href="https://github.com/zwagner86"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="Profile-social-img Profile-github-img"
                            src={githubIcon}
                            alt="GitHub Icon"
                        />
                    </a>
                </div>
                <div className="Profile-resume-link">
                    <a
                        href="http://resume.zacharywagner.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary Profile-resume-btn"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileInfo;
