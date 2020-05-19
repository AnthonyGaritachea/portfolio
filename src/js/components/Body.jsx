import React from 'react';
import { IconContext } from "react-icons";
import { IoLogoGithub } from 'react-icons/io';
import { TweenMax, gsap } from 'gsap';

import ReactModal from './ReactModal.jsx';

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

    // refactor divs to project component

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
                    <h1 className='project-name'>Typing Game</h1>
                    <p className='project-details'>Web game that keeps count of how many words you type correctly within a certain amount of time</p>

                    <div className='icon-column-container'>
                        <a title='source code' className='project-link' href='https://github.com/anthonygaritachea/type' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                        <ReactModal
                            projectUrl='https://fathomless-hamlet-90107.herokuapp.com/'
                            challenges='I was exposed to alot of hooks that I was unfamilar with. Passing state between siblings. Exposed to webpack plugins'
                            outcome='A better grasp on dependency arrays and what their purpose is within hooks. I learned passing data between sibling components you can use the parent as an intermediary and use a callback to pass the data. Learned about webpack plugins and at which stage during the bundle process they execute'
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
                    <h1 className='project-name'>Tealium Tool <br></br><span>Hackathon - 1st Place</span></h1>
                    <p className='project-details'>On Tealium’s e-commerce site we added a Data and Privacy tab on the my account dropdown. Users can manipulate their stats such as delete, download, or see a live feed of their data.</p>

                    <div className='icon-column-container'>
                        <a title='source code' className='project-link' href='https://github.com/Mielan/Healium-Hack' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                        <ReactModal
                            projectUrl='https://community.tealiumiq.com/t5/TLC-Blog/Tealium-Hackathon-Game-of-Codes-Winners/ba-p/30224'
                            projectInfo='You can read the Article here'
                            challenges='- First time attending hackathon so I doubted what I was capable of creating. Working withing a tight timeframe put pressure on me to complete my task'
                            outcome='Learned how other people approach a certain challenge/situation. Ended up taking first place!'
                        />
                    </div>
                </div>

                <div className='content-container'>
                    <h1 className='project-name'>Cheryl Lee Website</h1>
                    <p className='project-details'>Multi-page responsive website. Code school final project</p>

                    <div className='icon-column-container'>
                        <a title='source code' className='project-link' href='https://github.com/SanDiegoCodeSchool/cheryl-lee' target='_blank'><IconContext.Provider value={{ className: "icons" }}><IoLogoGithub /></IconContext.Provider></a>
                        <ReactModal
                                projectUrl='https://docs.google.com/presentation/d/14YEUYdiVPvx3G5lbTDrZWt4tZrrreFcRs4sINZNjhjM/edit?usp=sharing'
                                projectInfo='You can view the project on slide 11'
                                challenges='Learning SCRUM Methodology and JIRA'
                                outcome='One of the first times working in a team environment so having a Scrum master to periodically have standups within the team was very beneficial. We used JIRA for project management so knowing who had specific tickets and if someone was behind we would mob program definetely helped in finishing within our time frame. Although our project was never deployed you can still view the project'
                            />
                     </div>
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