import React, { PropTypes } from "react";
import SkillTile from "../skill-tile/SkillTile";
import "./SkillInfo.less";

const SkillInfo = ( { whatDescription, languages, frameworks } ) => (
    <div className="col-xs-12 col-sm-6 skill-info">
        <div className="skill-info-inner">
            <div className="info-container">
                <div className="info-header">WHO?</div>
                <div className="info">
                    <div className="description">
                        <span>Hey, what&apos;s up? My full name is </span>
                        <span className="highlighted">Zachary </span>
                        <span>but you can call me </span>
                        <span className="highlighted">Zach</span>
                        <span>. I am a </span>
                        <span className="highlighted">Senior Software Engineer </span>
                        <span>with </span>
                        <span className="highlighted">full-stack experience</span>
                        <span>, but a passion for working in the </span>
                        <span className="highlighted">front-end</span>
                        <span>. For example, I made this page so I could play around with </span>
                        <span className="highlighted">React</span>!
                    </div>
                    <div className="other-version-text">
                        <span>I also have a version of this page that uses </span>
                        <span className="highlighted">Angular 2 </span>
                        <span>and </span>
                        <span className="highlighted">TypeScript</span>
                        <span>. Check that out </span>
                        <a href="http://ng2.zacharywagner.net" target="_blank" rel="noopener noreferrer">here</a>.
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
                            { languages.map( language => (
                                <SkillTile key={ language.name } tileData={ language } /> )
                            ) }
                        </div>
                    </div>
                    <div className="sub-info-container">
                        <div className="sub-info-desc">
                            And here are some frameworks, libraries, and tools I&apos;ve used:
                        </div>
                        <div className="skills-list">
                            { frameworks.map( framework => (
                                <SkillTile key={ framework.name } tileData={ framework } /> )
                            ) }
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-container">
                <div className="info-header">WHERE?</div>
                <div className="info">
                    <div className="employer-link">
                        <a
                          href="https://www.slalom.com/locations/chicago"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            Slalom Consulting
                        </a>
                    </div>
                    <div>December 2012 - Present</div>
                    <div>Chicago, IL</div>
                    <div>Senior Software Engineer</div>
                </div>
            </div>
        </div>
    </div>
);

SkillInfo.propTypes = {
    whatDescription: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf( PropTypes.shape( {
        star: PropTypes.bool,
        name: PropTypes.string,
        logoPath: PropTypes.string,
    } ) ).isRequired,
    frameworks: PropTypes.arrayOf( PropTypes.shape( {
        star: PropTypes.bool,
        name: PropTypes.string,
        logoPath: PropTypes.string,
    } ) ).isRequired,
};

export default SkillInfo;
