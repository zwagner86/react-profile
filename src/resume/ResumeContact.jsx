import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ResumeContact.css';

const ResumeContact = () => {
    return (
        <div className="ResumeContact">
            <div className="ResumeContact-contact-info">
                <div className="ResumeContact-contact-item-table">
                    <div className="ResumeContact-contact-item-cell">
                        <FontAwesomeIcon
                            className="ResumeContact-contact-info-icon"
                            icon="envelope"
                            size="lg"
                            fixedWidth
                        />
                        <span className="ResumeContact-contact-info-text">wagnerzachary@yahoo.com</span>
                    </div>
                </div>
                <div className="ResumeContact-contact-item-table">
                    <div className="ResumeContact-contact-item-cell">
                        <FontAwesomeIcon
                            className="ResumeContact-contact-info-icon"
                            icon="phone"
                            size="lg"
                            fixedWidth
                        />
                        <span className="ResumeContact-contact-info-text">708-203-5356</span>
                    </div>
                </div>
                <div className="ResumeContact-contact-item-table">
                    <div className="ResumeContact-contact-item-cell">
                        <FontAwesomeIcon
                            className="ResumeContact-contact-info-icon"
                            icon="map-marker-alt"
                            size="lg"
                            fixedWidth
                        />
                        <span className="ResumeContact-contact-info-text">Chicago, IL</span>
                    </div>
                </div>
                <div className="ResumeContact-contact-item-table">
                    <div className="ResumeContact-contact-item-cell">
                        <FontAwesomeIcon
                            className="ResumeContact-contact-info-icon"
                            icon="globe-americas"
                            size="lg"
                            fixedWidth
                        />
                        <span className="ResumeContact-contact-info-text">www.zacharywagner.net</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeContact;
