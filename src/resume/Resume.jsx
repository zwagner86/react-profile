import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import {resume} from "personal-site-data";
import Menu from '../common/menu/Menu';
import ResumeContact from './ResumeContact';
import ResumeTitle from './ResumeTitle';
import CompanyWorkExperience from './work-experience/CompanyWorkExperience';
import InterestsList from './interests/InterestsList';
import Projects from './projects/Projects';
import PersonalProject from './projects/PersonalProject';
import SkillMeterList from './skill-meter/SkillMeterList';
import './Resume.css';

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
            skills,
            personalProjects
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
                                <div>I am a Software Engineer with over 7 years of professional experience developing web applications using various technologies and platforms. In that time, I consulted for Fortune 500 companies and worked in mid-stage and early-stage startups. For the past 5 years, I focused on Front-End development - specializing in React.</div>
                            </div>
                            <div className="Resume-section Resume-about">
                                <div className="Resume-section-header">Contact</div>
                                <ResumeContact />
                            </div>
                            <div className="Resume-section Resume-skills">
                                <div className="Resume-section-header">Skills & Competencies</div>
                                <SkillMeterList skills={skills} />
                            </div>
                            <div className="Resume-section Resume-interests">
                                <div className="Resume-section-header">Interests</div>
                                <InterestsList interests={interests} />
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
                                    <Fragment key={`${name}${i}`}>
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
                        <div className="Resume-section Resume-software-projects">
                            <div className="Resume-section-header">Software Projects</div>
                            {personalProjects.map((project, i) => {
                                const {
                                    name,
                                } = project;

                                return (
                                    <PersonalProject
                                        key={`${name}{i}`}
                                        project={project}
                                    />
                                );
                            })}
                        </div>
                        <div className="Resume-section Resume-education">
                            <div className="Resume-section-header">Education</div>
                            <div className="Resume-education-school-info">
                                <div className="Resume-education-dates-mobile">{education.date}</div>
                                <div className="Resume-education-degree">{education.degree}</div>
                                <div className="Resume-education-comma-separator">,&nbsp;</div>
                                <div className="Resume-education-school">{education.school}</div>
                                <div className="Resume-education-comma-separator">,&nbsp;</div>
                                <div className="Resume-education-dates">{education.date}</div>
                            </div>
                            <div className="Resume-education-major-info">
                                <div className="Resume-education-major"><span>Major:</span>&nbsp;&nbsp;{education.major}</div>
                                <div className="Resume-education-specialization"><span>Specialization:</span>&nbsp;&nbsp;{education.specialization}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
