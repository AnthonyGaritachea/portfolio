import React from 'react';
import { IconContext } from "react-icons";
import { IoLogoGithub } from 'react-icons/io';

const ProjectCard = (props) => {
    const {ProjectName, ProjectDetails, ProjectUrl} = props; 

    return(
        <div>
            <div className='content-container'>
                <h1 className='project-name'>{ProjectName}</h1>
                <p className='project-details'>{ProjectDetails}</p>
                <div className='icon-column-container'>
                    <a title='source code' className='project-link' href={ProjectUrl} target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;