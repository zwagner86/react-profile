import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import {resume} from "personal-site-data";
import Menu from '../common/menu/Menu';
import ResumeContact from './ResumeContact';
import ResumeHeader from './ResumeHeader';
import ResumeTitle from './ResumeTitle';
import CompanyWorkExperience from './work-experience/CompanyWorkExperience';
import Projects from './projects/Projects';
import SkillsGraph from './skills-graph/SkillsGraph';
import './Resume.css';

const createInterestStringFromArray = array => {
    let interestString = '';
    for ( let interestItem of array ) {
        interestString += interestItem + '  |  ';
    }
    return interestString.slice(0, interestString.length - 5);
};

export default class Resume extends Component {
    componentDidMount() {
        if (process.env.NODE_ENV === 'production') {
            ReactGA.set({page: window.location.pathname});
            ReactGA.pageview(window.location.pathname);
        }
    }

    render() {
        const {
            education,
            interests,
            workExperience,
            skills
        } = resume;
        const title = "Zachary Wagner - Software Engineer - Resume"

        return (
            <div className="Resume">
                <Helmet>
                    <title>{title}</title>
                    <meta property="og:title" content={title} />
                </Helmet>
                <Menu />
                <div className="Resume-body">
                    <div className="Resume-left-column">
                        <ResumeTitle />
                        <div>
                            <div className="Resume-section Resume-about">
                                <div className="Resume-section-header">About</div>
                                <div>Software engineer with experience developing web applications using various technologies and platforms.  Proficient across all areas of software architecture.  Strong background in front-end development using multiple frameworks and libraries and experience with automated testing.</div>
                            </div>
                            <div className="Resume-section Resume-about">
                                <div className="Resume-section-header">Contact</div>
                                <ResumeContact />
                            </div>
                            <div className="Resume-section Resume-skills">
                                <div className="Resume-section-header">Skills & Competencies</div>
                                <SkillsGraph skills={skills} />
                            </div>
                            <div className="Resume-section Resume-interests">
                                <div className="Resume-section-header">Interests</div>
                                <div className="Resume-interests-list">{createInterestStringFromArray(interests)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="Resume-right-column">
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
    }
}
