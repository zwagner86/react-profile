import React from 'react';
import './ResumeTitle.css';

const firstName = 'Zachary';
const firstNameArr = firstName.split('');
const lastName = 'Wagner';
const lastNameArr = lastName.split('');
const title = 'Software Engineer';
const titleArr = title.split('');

const ResumeTitle = props => {
    return (
        <div className="ResumeTitle">
            <div className="ResumeTitle-info">
                <div className="ResumeTitle-first-name">
                    {firstNameArr.map((char, i) => {
                        return <div key={`${char}${i}`}>{char}</div>;
                    })}
                </div>
                <div className="ResumeTitle-last-name">
                    {lastNameArr.map((char, i) => {
                        return <div key={`${char}${i}`}>{char}</div>;
                    })}
                </div>
                <div className="ResumeTitle-title">
                    {titleArr.map((char, i) => {
                        if (char === ' ') {
                            return <div key={`space${i}`}>&nbsp;</div>;
                        }

                        return <div key={`${char}${i}`}>{char}</div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ResumeTitle;
