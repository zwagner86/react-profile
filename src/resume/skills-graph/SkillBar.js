import React from 'react';
import PropTypes from 'prop-types';
import './SkillBar.css';

const SkillBar = ({
    name,
    rating
}) => {
    return (
        <div className="SkillBar">
            <div className="SkillBar-name">
                {name}
            </div>
            <div className="SkillBar-graph">
                <div className="SkillBar-graph-bar">
                    <div
                        className="SkillBar-graph-fill"
                        style={{width: `${rating}%`}}
                    />
                </div>
            </div>
        </div>
    );
};

SkillBar.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default SkillBar;
