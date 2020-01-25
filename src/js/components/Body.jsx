import React from 'react';

import { IoLogoGithub } from 'react-icons/io';

const Body = () =>  (
    <div className='body-container'>
        <h1 className='project-header'>Projects</h1>
        <div className='content-container'>
            <h1 className='project-name'>Web Scraper</h1>
            <p className='project-details'>Back end project that controls a headless browser to extract data from Amtrak and stores data into MongoDB</p>
            <a className='project-link' href='https://github.com/AnthonyGaritachea/scraper' target='_blank'><IoLogoGithub size='35px' fill='var(--aqua-blue)' /></a>
        </div>

        <div className='content-container'>
            <h1 className='project-name'>Cheryl Lee Website</h1>
            <p className='project-details'>Multi-page responsive website</p>
            <a className='project-link' href='https://github.com/SanDiegoCodeSchool/cheryl-lee' target='_blank'><IoLogoGithub size='35px' fill='var(--aqua-blue)' /></a>
        </div>

        <div className='spacer'>
            <h1>Spacer</h1>
            <p>spacer</p>
        </div>
    </div>
)

export default Body;