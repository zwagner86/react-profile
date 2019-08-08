import React from 'react';
import PropTypes from 'prop-types';
import './ResumeTitle.css';

const ResumeTitle = props => {
    return (
        <div className="ResumeTitle">
            <div className="ResumeTitle-first-name">Zachary</div>
            <div className="ResumeTitle-last-name">Wagner</div>
            <div className="ResumeTitle-title">Software Engineer</div>
        </div>
    );
};

export default ResumeTitle;
