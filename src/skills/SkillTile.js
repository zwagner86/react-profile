import React from "react";
import PropTypes from 'prop-types';
import "./SkillTile.css";

const SkillTile = ({
    tileData: {
        star,
        name,
        logoPath
    }
}) => {
    return (
        <div className="SkillTile">
            <div className="SkillTile-label">
                <div className="SkillTile-text">
                    {name}&nbsp;
                    {star &&
                        <svg className="SkillTile-star-icon" role="presentation" viewBox="0 0 260 245" width="52" height="49">
                            <path d="m55,237 74-228 74,228L9,96h240"/>
                        </svg>
                    }
                </div>
            </div>
            <div className="SkillTile-image-block">
                <div className="SkillTile-image-cell">
                    <img
                        className="SkillTile-image"
                        src={logoPath}
                        alt={name}
                    />
                </div>
            </div>
        </div>
    );
};

SkillTile.propTypes = {
    tileData: PropTypes.shape({
        star: PropTypes.bool,
        name: PropTypes.string,
        logoPath: PropTypes.string,
    }).isRequired
};

export default SkillTile;
