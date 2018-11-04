import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import resumeData from './resume-data';
import ResumeHeader from './ResumeHeader';
import CompanyWorkExperience from './work-experience/CompanyWorkExperience';
import Projects from './projects/Projects';
import SkillsGraph from './skills-graph/SkillsGraph';
import './Resume.css';

const Resume = () => {
    const {
        createInterestStringFromArray,
        education,
        interests,
        workExperience,
        skills
    } = resumeData;

    return (
        <div className="Resume">
            <Helmet>
                <title>Zachary Wagner - Resume</title>
                <meta name="description" content="Zachary Wagner Resume" />
            </Helmet>
            <ResumeHeader />
            <div className="Resume-body">
                <div className="Resume-left-column">
                    <div className="Resume-section Resume-experience">
                        <div className="Resume-section-header">Work Experience</div>
                        {workExperience.map((job, i) => {
                            const {
                                name,
                                location,
                                overview,
                                positions,
                                projects
                            } = job;

                            return (
                                <Fragment key={i}>
                                    <CompanyWorkExperience
                                        name={name}
                                        location={location}
                                        overview={overview}
                                        positions={positions}
                                    />
                                    <Projects projects={projects} />
                                    <div className="HorizontalRule" />
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
                <div className="Resume-right-column">
                    <div className="Resume-section Resume-skills">
                        <div className="Resume-section-header">Skills & Competencies</div>
                        <SkillsGraph skills={skills} />
                    </div>
                    <div className="Resume-section Resume-interests">
                        <div className="Resume-section-header">Interests</div>
                        <div className="Resume-interests-list">{createInterestStringFromArray(interests)}</div>
                    </div>
                    <div className="Resume-section Resume-education">
                        <div className="Resume-section-header">Education</div>
                        <div className="Resume-education-dates">{education.date}</div>
                        <div className="Resume-education-degree">{education.degree}</div>
                        <div className="Resume-education-school">{education.school}</div>
                        <div className="Resume-education-major"><span>Major:</span>&nbsp;&nbsp;{education.major}</div>
                        <div className="Resume-education-specialization"><span>Specialization:</span>&nbsp;&nbsp;{education.specialization}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
