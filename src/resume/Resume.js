import React from 'react';
import resumeData from './resume-data';
import ResumeHeader from './ResumeHeader';
import CompanyWorkExperience from './work-experience/CompanyWorkExperience';
import Project from './projects/Project';
import './Resume.css';

const Resume = () => {
    const {
        createInterestStringFromArray,
        createTechStringFromArray,
        education,
        interests,
        slalomInfo,
        slalomPositions,
        slalomProjects,
        skills
    } = resumeData;

    return (
        <div className="Resume">
            <ResumeHeader />
            <div className="Resume-body">
                <div className="Resume-left-column">
                    <div className="Resume-section Resume-experience">
                        <div className="Resume-section-header">Work Experience</div>
                        <CompanyWorkExperience
                            info={slalomInfo}
                            positions={slalomPositions}
                        />
                        {slalomProjects.map((project, i) => {
                            return (
                                <Project
                                    key={i}
                                    project={project}
                                />
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
                                        <div
                                            key={i}
                                            className="skill-table"
                                        >
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
