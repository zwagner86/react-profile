import React from 'react';
import profilePic from '../../assets/prof-pic.png';
import githubIcon from '../../assets/github_circle_gray.png';
import linkedInIcon from '../../assets/linkedin_circle_gray.png';
import './ProfileInfo.less';

const ProfileInfo = () => {

  return (
    <div className="profile-info col-xs-12 col-sm-6">
      <div className="profile-info-inner">
        <div className="profile-info-inner-cell">
          <div className="profile-pic-container">
            <img src={profilePic} alt="Zachary Wagner Profile"/>
          </div>
          <h1>Hey, I'm Zach,</h1>
          <h4>a Senior Software Engineer</h4>
          <h4>working in Chicago for Slalom Consulting</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/zacharywagner" target="_blank"><img className="linkedin" src={linkedInIcon} alt="LinkedIn Icon" /></a>
            <a href="https://github.com/zwagner86" target="_blank"><img className="github" src={githubIcon} alt="GitHub Icon"/></a>
          </div>
          <div className="resume-link">
            <a href="http://resume.zacharywagner.net" target="_blank" className="btn btn-primary resume-btn">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};


ProfileInfo.propTypes = {};

export default ProfileInfo;
