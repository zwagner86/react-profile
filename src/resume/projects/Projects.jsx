import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import './Projects.css';

const Projects = ({projects}) => {
    return (
        <div className="Projects">
            <div className="Projects-title">Notable Projects</div>
            {projects.map((project, i) => {
                if (project.featureProject) {
                    return (
                        <Project
                            key={i}
                            project={project}
                        />
                    );
                }

                return null;
            })}
        </div>
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired
};

export default Projects;
