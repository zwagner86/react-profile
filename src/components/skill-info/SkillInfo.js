import React, { PropTypes } from 'react';
import SkillTile from '../skill-tile/SkillTile';
import './SkillInfo.less';

const SkillInfo = ({ whatDescription, languages, frameworks }) => {

  return (
    <div className="col-xs-12 col-sm-6 skill-info">
      <div className="skill-info-inner">
        <div className="info-container">
          <div className="info-header">WHO?</div>
          <div className="info">
            <div className="description">
              Hey, what's up?  My full name is <span className="highlighted">Zachary</span> but you can call me <span className="highlighted">Zach</span>.  I am a <span className="highlighted">Senior Software Engineer</span> with <span className="highlighted">full-stack experience</span>, but a passion for working in the <span className="highlighted">front-end</span>.  For example, I made this page so I could play around with <span className="highlighted">React</span>!
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="info-header">WHAT?</div>
          <div className="info">
            <div className="description">{whatDescription}</div>
            <div className="sub-info-container">
              <div className="sub-info-desc">Here are some languages I have experience with:</div>
              <div className="skills-list">
                {languages.map(language => <SkillTile key={language.name} tileData={language} />)}
              </div>
            </div>
            <div className="sub-info-container">
              <div className="sub-info-desc">And here are some frameworks, libraries, and tools I've used:</div>
              <div className="skills-list">
                {frameworks.map(framework => <SkillTile key={framework.name} tileData={framework} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="info-header">WHERE?</div>
          <div className="info">
            <div><a href="https://www.slalom.com/locations/chicago" target="_blank">Slalom Consulting</a></div>
            <div>December 2012 - Present</div>
            <div>Chicago, IL</div>
            <div>Senior Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  )
};


SkillInfo.propTypes = {
  whatDescription: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  frameworks: PropTypes.array.isRequired,
};

export default SkillInfo;
