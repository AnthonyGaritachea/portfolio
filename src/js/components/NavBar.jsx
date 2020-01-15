import React from 'react';

const NavBar = () => (
    <div>
        <div className='mobile-nav-bar-container'>
            <nav>
                <ul className='mobile-nav-bar'>
                    <li><a className='mobile-nav-links' href='#'><img style={{'width': '45px'}} src={require('../../../public/images/linkedin.svg')}/></a></li>
                    <li><a className='mobile-nav-links' href='#'><img style={{'width': '45px'}} src={require('../../../public/images/iconfinder_Menu2_1031510.svg')} /></a></li>
                    <li><a className='mobile-nav-links' href='#'><img style={{'width': '45px'}} src={require('../../../public/images/github-1.svg')}/></a></li>
                </ul>
            </nav>
        </div>

        <div className='desktop-nav-bar-container'>
            <nav>
                <ul className='desktop-nav-bar'>
                    <li><a className='desktop-nav-links' href='#'>Home</a></li>
                    <li><a className='desktop-nav-links' href='#'>Projects</a></li>
                    <li><a className='desktop-nav-links' href='#'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
);

export default NavBar