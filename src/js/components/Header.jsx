import React from 'react';
import { gsap } from 'gsap';

import fishing from '../../../public/images/fishing.jpeg';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        new gsap.from(('.portrait, .header-name'), {opacity: 0, y: 50, stagger: 0.5, duration: 0.8, delay: 1})
    }

    render() {
        return (
             <div className='container'>
                <img className='portrait' src={fishing} />
                <h1 className='header-name'>Anthony Garitachea</h1> 
             </div>
        )
    }
};

export default Header