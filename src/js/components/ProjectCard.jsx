import React from 'react';
import { IconContext } from "react-icons";
import { IoLogoGithub } from 'react-icons/io';
import { BsWindow } from "react-icons/bs";
import ReactModal from './ReactModal.jsx';


const ProjectCard = (props) => {
    const {ProjectName, ProjectDetails, ProjectLiveSite, ProjectSourceCode, ProjectTechStack, ProjectImage} = props; 
    return(
        <div>
            <div className='content-container'>
                <h1 className='project-name'>{ProjectName}</h1>
                <p className='project-details'>{ProjectDetails}</p>
                <div className='icon-column-container'>
                    <a title='live app' href={ProjectLiveSite} className='modal-link' target='_blank'><IconContext.Provider value={{ className: "icons" }}><BsWindow/></IconContext.Provider></a>
                    <a title='source code' className='project-link' href={ProjectSourceCode} target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                    <ReactModal 
                        ProjectTechStack={ProjectTechStack} 
                        ProjectImage={ProjectImage}
                    />
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;