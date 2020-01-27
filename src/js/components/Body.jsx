import React from 'react';

import { IconContext } from "react-icons";
import { IoLogoGithub } from 'react-icons/io';


import ReactModal from './ReactModal.jsx';

    // TODO: ADD VIDEO FOR WEBSCRAPER PROJECT

const Body = () =>  (
    <div className='body-container'>
        <h1 className='project-header'>Projects</h1>
        <div className='content-container'>
            <h1 className='project-name'>Web Scraper</h1>
            <p className='project-details'>Back end project that controls a headless browser to extract data from Amtrak and stores data into MongoDB</p>

             <div className='icon-column-container'>
                <a className='project-link' href='https://github.com/AnthonyGaritachea/scraper' target='_blank'><IconContext.Provider value={{className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                <ReactModal
                    content=''
                    challenges='- First time being exposed to async await and using Regular Expressions to grab specific data'
                    outcome='- Better grasp at async/await and regular expressions'
                /> 
             </div>

        </div>

        <div className='content-container'>
            <h1 className='project-name'>Cheryl Lee Website</h1>
            <p className='project-details'>Multi-page responsive website</p>
            <a className='project-link' href='https://github.com/SanDiegoCodeSchool/cheryl-lee' target='_blank'><IconContext.Provider value={{className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
        </div>

        <div className='spacer'>
            <h1>Spacer</h1>
            <p>spacer</p>
        </div>
    </div>
)

export default Body;