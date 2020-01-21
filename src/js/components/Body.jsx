import React from 'react';

const Body = () => (
    <div className='body-container'>
        <h1 className='project-header'>Projects</h1>
        <div className='content-container'>
            <h1 className='project-name'>Web Scraper</h1>
            <p className='project-details'>Back end project that controls a headless browser to extract data from Amtrak and stores data into MongoDB</p>
        </div>

        <div className='content-container'>
            <h1 className='project-name'>Cheryl Lee Website</h1>
            <p className='project-details'>Multi-page responsive website</p>
        </div>
    </div>
);

export default Body;