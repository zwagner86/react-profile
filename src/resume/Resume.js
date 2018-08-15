import React from 'react';
import resumeData from './resume-data';

const Resume = () => {
    const {
        createInterestStringFromArray,
        createTechStringFromArray,
        education,
        interests,
        slalomProjects,
        skills
    } = resumeData;

    return (
        <div className="Resume">
            <div className="resume-header">
                <div className="personal-info">
                    <h2>Zachary Wagner</h2>
                    <div className="summary">
                        Software engineer with experience developing web applications using various technologies and platforms.  Proficient across all areas of software architecture.  Strong background in front-end development using multiple frameworks and libraries and experience with automated testing.
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-item-table">
                        <div className="contact-item-cell">wagnerzachary@yahoo.com <i className="glyphicon glyphicon-envelope"></i></div>
                    </div>
                    <div className="contact-item-table">
                        <div className="contact-item-cell">708-203-5356 <i className="glyphicon glyphicon-earphone"></i></div>
                    </div>
                    <div className="contact-item-table">
                        <div className="contact-item-cell">Chicago, IL <i className="glyphicon glyphicon-map-marker"></i></div>
                    </div>
                    <div className="contact-item-table">
                        <div className="contact-item-cell">www.zacharywagner.net <i className="glyphicon glyphicon-globe"></i></div>
                    </div>
                </div>
            </div>
            <div className="resume-body">
                <div className="left-column">
                    <div className="section work-experience">
                        <div className="section-header">Work Experience</div>
                        <div className="work-experience-company">
                            <div className="company-position col-xs-8">
                                <div className="position">
                                    <div className="position-name">Senior Software Engineer</div>
                                    <div className="position-divider">--</div>
                                    <div className="position-date">09/2016 - Present</div>
                                </div>
                                <div className="position">
                                    <div className="position-name">Software Engineer</div>
                                    <div className="position-divider">--</div>
                                    <div className="position-date">12/2012 - 09/2016</div>
                                </div>
                            </div>
                            <div className="company-location col-xs-4">Chicago, IL</div>
                            <div className="company-name col-xs-12">Slalom Consulting</div>
                        </div>
                        {slalomProjects.map((project, i) => {
                            return (
                                <div className="work-accomplishments">
                                    <div className="work-accomplishments-header">{project.role} – {project.client} – {project.duration}</div>
                                    <div className="work-accomplishments-summary">{project.summary}</div>
                                    <div className="work-accomplishments-tech">
                                        <div className="tech-label">Technologies Used:</div>
                                        <div className="tech-list">{createTechStringFromArray(project.tech)}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="right-column">
                    <div className="section skills padded-bottom">
                        <div className="section-header">Skills & Competencies</div>
                        <div className="skills-graph-container">
                            <div className="skills-graph-guide">
                                <div className="empty-guide-column" />
                                <div className="guide-bar">
                                    <div className="guide-bar-quarter" />
                                    <div className="guide-bar-quarter" />
                                    <div className="guide-bar-quarter" />
                                    <div className="guide-bar-quarter" />
                                </div>
                            </div>
                            <div className="skills-graph">
                                {skills.map((skill, i) => {
                                    return (
                                        <div className="skill-table">
                                            <div className="skill-text-column">
                                                {skill.name}
                                            </div>
                                            <div className="graph-column">
                                                <div className="graph-bar">
                                                    <div
                                                        className="graph-fill"
                                                        style={{height: `${skill.rating}%`}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="section interests padded-bottom">
                        <div className="section-header">Interests</div>
                        <div className="interests-list">{createInterestStringFromArray(interests)}</div>
                    </div>
                    <div className="section education">
                        <div className="section-header">Education</div>
                        <div className="dates">{education.date}</div>
                        <div className="degree">{education.degree}</div>
                        <div className="school">{education.school}</div>
                        <div className="major"><span>Major:</span>&nbsp;&nbsp;{education.major}</div>
                        <div className="specialization"><span>Specialization:</span>&nbsp;&nbsp;{education.specialization}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
