import React, { PropTypes } from "react";
import "./SkillTile.less";

const SkillTile = ( { tileData: { star, name, logoPath } } ) => {
    const showStar = () => (
      star ? ( <i className="glyphicon glyphicon-star" /> ) : ""
    );

    return (
        <div className="skill">
            <div className="skill-label">
                <div className="skill-text">
                    { name } {showStar()}
                </div>
            </div>
            <div className="image-block">
                <div className="image-cell">
                    <img src={ logoPath } alt={ name } />
                </div>
            </div>
        </div>
  );
};

SkillTile.propTypes = {
    tileData: PropTypes.shape( {
        star: PropTypes.bool,
        name: PropTypes.string,
        logoPath: PropTypes.string,
    } ).isRequired,
};

export default SkillTile;
