import React from 'react';
import { gsap } from 'gsap';

import { FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';


class NavBar extends React.Component { 

    componentDidMount(){
                    // selector, duration, config
          new gsap.from('.desktop-nav-links', {opacity: 0, y: 50, duration: 0.8, stagger: 0.3})

          document.querySelectorAll('.desktop-nav-links').forEach(element => {
              element.addEventListener('mouseenter', () => {
                    gsap.to(element, {color: '#00adb5', scaleX: 1.5, scaleY: 1.5, duration: 0.5})
              })
          });
          document.querySelectorAll('.desktop-nav-links').forEach(element => {
            element.addEventListener('mouseleave', () => {
                  gsap.to(element, {color: '#EEEEEE', scaleX: 1, scaleY: 1, duration: 0.5})
            })
        });
    }

    render(){
        return(
            <div>
                <div className='mobile-nav-bar-container'>
                    <nav>
                        <ul className='mobile-nav-bar'>
                            <li><a className='mobile-nav-links' href='https://www.linkedin.com/in/luis-anthony-garitachea' target='_blank'><FaLinkedin size='45px' fill='var(--light-gray)'/></a></li>
                            <li><a className='mobile-nav-links' href='https://drive.google.com/file/d/1IcSfGBmNWUGV4KLApdnPJJrCVgNGZixh/view?usp=sharing' target='_blank'><FaFilePdf size='45px' fill='var(--light-gray)'/></a></li>
                            <li><a className='mobile-nav-links' href='https://github.com/anthonygaritachea' target='_blank'><IoLogoGithub size='45px' fill='var(--light-gray)'/></a></li>
                        </ul>
                    </nav>
                </div>
        
                <div className='desktop-nav-bar-container'>
                    <nav>
                        <ul className='desktop-nav-bar'>
                            <li><a className='desktop-nav-links' href='https://www.linkedin.com/in/luis-anthony-garitachea' target='_blank'>linkedIn</a></li>
                            <li><a className='desktop-nav-links' href='https://drive.google.com/file/d/1IcSfGBmNWUGV4KLApdnPJJrCVgNGZixh/view?usp=sharing' target='_blank'>resume</a></li>
                            <li><a className='desktop-nav-links' href='https://github.com/anthonygaritachea' target='_blank'>github</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }

};

export default NavBar