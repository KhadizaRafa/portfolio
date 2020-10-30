import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './ProjectDetails.css'
import { MDBBadge } from "mdbreact";

const ProjectDetails = (props) => {
    const { title, detail, tools, githubLink, liveLink, image } = props.project;

    return (
        <div className="card mt-5 mb-5">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{title}</h5>
                    <div>
                        <span className='p-2'><a href={githubLink} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a></span>
                        <span className='p-2'><a href={liveLink} target="_blank"><FontAwesomeIcon icon={faGlobe} size="2x" /></a></span>
                    </div>
                </div>
                <hr />
                
                    {
                        tools.map(tool => <MDBBadge pill color="light" className="p-2 m-2">{tool}</MDBBadge>)
                    }
                      <p className="card-text mt-3">{detail}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;