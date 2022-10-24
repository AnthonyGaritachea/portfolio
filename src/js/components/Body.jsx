import React from 'react';
import { TweenMax, gsap } from 'gsap';

import ProjectCard from './ProjectCard.jsx';
import projects from '../../../projects.json';

class Body extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
                              // selector, duration, config  
         new TweenMax.from(('.project-header, .content-container'), 2, { opacity: 0, y: 50, stagger: 0.5, delay: 2.5});

         Array.from(document.querySelectorAll('.content-container'))
            .forEach(element => {
                element.addEventListener('mouseenter', () => {
                    new gsap.to(element, 1, {scaleX: 1.1, scaleY: 1.1})
                });
                element.addEventListener('mouseleave', () => {
                    new gsap.to(element, 1, {scaleX: 1, scaleY: 1})
                });
            })
    }

    render() {
        return (
            <div className='body-container' >
                <h1 className='project-header'>Projects</h1>

                {
                    projects.map(project => {
                        return(
                            <ProjectCard 
                                key={project.projectName}
                                ProjectName={project.projectName}
                                ProjectDetails={project.projectDetails}
                                ProjectLiveSite={project.projectLiveSite}
                                ProjectSourceCode={project.projectSourceCode}
                                ProjectTechStack={project.projectTechStack}
                                ProjectImage={project.projectImage}
                            />
                        )
                    })
                }

                <div className='spacer'>
                    <h1>Spacer</h1>
                    <p>spacer</p>
                </div>
            </div>
        )
    }
}

export default Body;