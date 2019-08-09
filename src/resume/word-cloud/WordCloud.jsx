import React from 'react';
import PropTypes from 'prop-types';
import ReactWordcloud from 'react-wordcloud';
import './WordCloud.css';

const options = {
    colors: ['#045e8e', '#46494C'],
    enableTooltip: false,
    deterministic: false,
    fontFamily: 'Open Sans',
    fontSizes: [14, 56],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 2,
    rotations: 1,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'rectangular',
    transitionDuration: 0,
};

const WordCloud = ({
    words
}) => {
    return (
        <div className="WordCloud">
            <ReactWordcloud
                className="WordCloud-cloud"
                words={words}
                options={options}
            />
        </div>
    );
};

WordCloud.propTypes = {

};

WordCloud.defaultProps = {

};

export default WordCloud;
