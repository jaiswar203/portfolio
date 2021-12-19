import React, { useEffect } from 'react'

import Navbars from './script'
import { Link, animateScroll } from 'react-scroll'

const Navbar = () => {
    useEffect(() => {
        Navbars()
        window.onscroll = function () { scrollFunc() }
        var header = document.querySelector('.header')

        var sticky = header.offsetTop

        function scrollFunc() {
            if (window.pageYOffset >= sticky) {
                header.classList.add("sticky")
            } else {
                header.classList.remove("sticky");
            }
        }
        
    }, [])
    
    return (
        <header className='header'>
            <div className="header-logo">
                <h2>Nilesh</h2>
            </div>
            <div className="hamburger">
                <span className="hamburger-btn"></span>
            </div>
            <div className="header-item">
                <ul className="item-list">
                    <li>
                        <Link className='link' onClick={() => animateScroll.scrollToTop()}>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to='about' smooth={true} duration={1000}>About</Link>
                    </li>
                    <li>
                        <Link className='link' to='tech' smooth={true} duration={1000}>Technologies</Link>
                    </li>
                    <li>
                        <Link className='link' to='projects' smooth={true} duration={1000}>Projects</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
