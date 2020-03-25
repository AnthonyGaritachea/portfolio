import React from 'react';

import { IconContext } from "react-icons";
import { IoLogoGithub } from 'react-icons/io';

import { TweenMax } from 'gsap';

import ReactModal from './ReactModal.jsx';

class Body extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
                              // selector, duration, config  
         new TweenMax.from(('.project-header, .content-container'), 2, { opacity: 0, y: 50, stagger: 0.5, delay: 2.5});
    }

    render() {
        return (
            <div className='body-container' >
                <h1 className='project-header'>Projects</h1>

                <div className='content-container'>
                    <h1 className='project-name'>Restaurant Finder</h1>
                    <p className='project-details'>App that aquire's you're geolocation and searches for nearby restauants to help you decide what to eat</p>

                    <div className='icon-column-container'>
                        <a title='source code' className='project-link' href='https://github.com/anthonygaritachea/restaurant-finder' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                        <ReactModal
                            projectUrl='https://guarded-forest-02000.herokuapp.com/'
                            challenges="First time deploying webpack app with a production mode. I deployed the app with Redux Dev Tools installed so If  random users try's to access the site without the redux dev tools extension installed the app wont render at all. I was using a 3rd party api and Heroku couldn't acces my environment variables."
                            outcome="Disabling redux dev tools in production allowed the app to be compatible for all browsers. In order for heroku to use environment variables you need to configure them through the cli or the heroku dashboard."
                        />
                     </div>
                </div>

                <div className='content-container'>
                    <h1 className='project-name'>Web Scraper</h1>
                    <p className='project-details'>Back end project that controls a headless browser to extract data from Amtrak and stores data into MongoDB</p>

                    <div className='icon-column-container'>
                        <a title='source code' className='project-link' href='https://github.com/AnthonyGaritachea/scraper' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                        <ReactModal
                            video='https://drive.google.com/file/d/13gYFZbBneAS8vaSVx1WtuPf--vIIHmQQ/preview'
                            challenges='- First time being exposed to async await and using Regular Expressions to grab specific data'
                            outcome='- Better grasp at async/await and regular expressions'
                        />
                    </div>

                </div>

                <div className='content-container'>
                    <h1 className='project-name'>Tealium Tool</h1>
                    <p className='project-details'>On Tealium’s e-commerce site we added a Data and Privacy tab on the my account dropdown. Users can manipulate their stats such as delete, download, or see a live feed of their data.</p>

                    <div className='icon-column-container'>
                        <a title='source code' className='project-link' href='https://github.com/Mielan/Healium-Hack' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                        <ReactModal
                            challenges='- First time attending hackathon so I doubted what I was capable of creating'
                            outcome='Learned how other people approach a certain challenge/situation. Ended up taking first place!'
                            link='https://community.tealiumiq.com/t5/TLC-Blog/Tealium-Hackathon-Game-of-Codes-Winners/ba-p/30224'
                        />
                    </div>
                </div>

                <div className='content-container'>
                    <h1 className='project-name'>Cheryl Lee Website</h1>
                    <p className='project-details'>Multi-page responsive website</p>
                    <a title='source code' className='project-link' href='https://github.com/SanDiegoCodeSchool/cheryl-lee' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                </div>

                <div className='spacer'>
                    <h1>Spacer</h1>
                    <p>spacer</p>
                </div>
            </div>
        )
    }
}

export default Body;