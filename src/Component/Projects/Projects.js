import React from 'react';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import projectsArray from './projectsData';


const Projects = () => {
    const projects = projectsArray.slice(0, 10);
    return (
        <div className="container mt-5">
            <h1>Projects</h1>
            <div className="card-deck">
                {
                    projects.map(project => <ProjectDetails project={project} key={project.id}></ProjectDetails>)
                }
            </div>
        </div>
    );
};

export default Projects;