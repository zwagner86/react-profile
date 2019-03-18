import React from 'react';
import {companies} from 'personal-site-data';
import Company from './Company';

const Where = props => {
    return (
        <div className="About-section Where">
            <div className="About-section-header">WHERE?</div>
            {companies.map(company => {
                const {
                    name
                } = company;

                return (
                    <Company
                        key={name}
                        company={company}
                    />
                );
            })}
        </div>
    );
};

export default Where;
