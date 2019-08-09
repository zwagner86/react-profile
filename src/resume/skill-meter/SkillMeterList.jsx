import React from 'react';
import PropTypes from 'prop-types';
import SkillMeterItem from './SkillMeterItem';

const convertRatingToNearestSkillHalf = rating => {
    const skillValue = (rating / 100) * 5;

    return Math.round(skillValue * 2) / 2;
};

const SkillMeterList = ({
    skills
}) => {
    return (
        <div className="SkillMeterList">
            {skills.map((skill, i) => {
                const {
                    name,
                    rating
                } = skill;

                return (
                    <SkillMeterItem
                        key={`${name}${i}`}
                        name={name}
                        rating={convertRatingToNearestSkillHalf(rating)}
                    />
                );
            })}
        </div>
    );
};

SkillMeterList.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
};

export default SkillMeterList;
