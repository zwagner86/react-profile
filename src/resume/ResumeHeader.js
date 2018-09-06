import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ResumeHeader.css';

const ResumeHeader = () => {
    return (
        <div className="ResumeHeader">
            <div className="ResumeHeader-personal-info">
                <h2 className="ResumeHeader-personal-info-name">Zachary Wagner</h2>
                <div className="ResumeHeader-personal-info-summary">
                    Software engineer with experience developing web applications using various technologies and platforms.  Proficient across all areas of software architecture.  Strong background in front-end development using multiple frameworks and libraries and experience with automated testing.
                </div>
            </div>
            <div className="ResumeHeader-contact-info">
                <div className="ResumeHeader-contact-item-table">
                    <div className="ResumeHeader-contact-item-cell">
                        wagnerzachary@yahoo.com&nbsp;
                        <FontAwesomeIcon
                            className="ResumeHeader-contact-info-icon"
                            icon="envelope"
                            size="lg"
                            fixedWidth
                        />
                    </div>
                </div>
                <div className="ResumeHeader-contact-item-table">
                    <div className="Resume-contact-item-cell">
                        708-203-5356&nbsp;
                        <FontAwesomeIcon
                            className="ResumeHeader-contact-info-icon"
                            icon="phone"
                            size="lg"
                            fixedWidth
                        />
                    </div>
                </div>
                <div className="ResumeHeader-contact-item-table">
                    <div className="ResumeHeader-contact-item-cell">
                        Chicago, IL&nbsp;
                        <FontAwesomeIcon
                            className="ResumeHeader-contact-info-icon"
                            icon="map-marker-alt"
                            size="lg"
                            fixedWidth
                        />
                    </div>
                </div>
                <div className="ResumeHeader-contact-item-table">
                    <div className="ResumeHeader-contact-item-cell">
                        www.zacharywagner.net&nbsp;
                        <FontAwesomeIcon
                            className="ResumeHeader-contact-info-icon"
                            icon="globe-americas"
                            size="lg"
                            fixedWidth
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeHeader;
