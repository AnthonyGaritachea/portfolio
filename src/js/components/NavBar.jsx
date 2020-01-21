import React from 'react';
import { FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const NavBar = () => (
    <div>
        <div className='mobile-nav-bar-container'>
            <nav>
                <ul className='mobile-nav-bar'>
                    <li><a className='mobile-nav-links' href='https://www.linkedin.com/in/luis-anthony-garitachea-3a243219a/' target='_blank'><FaLinkedin size='45px' fill='var(--light-gray)'/></a></li>
                    <li><a className='mobile-nav-links' href='https://drive.google.com/file/d/1SPMjw2ALxYg93Rgdxju2nJl3cpoHyVhB/view?usp=sharing' target='_blank'><FaFilePdf size='45px' fill='var(--light-gray)'/></a></li>
                    <li><a className='mobile-nav-links' href='https://github.com/anthonygaritachea' target='_blank'><IoLogoGithub size='45px' fill='var(--light-gray)'/></a></li>
                </ul>
            </nav>
        </div>

        <div className='desktop-nav-bar-container'>
            <nav>
                <ul className='desktop-nav-bar'>
                    <li><a className='desktop-nav-links' href='https://www.linkedin.com/in/luis-anthony-garitachea-3a243219a/' target='_blank'>linkedIn</a></li>
                    <li><a className='desktop-nav-links' href='https://drive.google.com/file/d/1SPMjw2ALxYg93Rgdxju2nJl3cpoHyVhB/view?usp=sharing' target='_blank'>resume</a></li>
                    <li><a className='desktop-nav-links' href='https://github.com/anthonygaritachea' target='_blank'>github</a></li>
                </ul>
            </nav>
        </div>
    </div>
);

export default NavBar