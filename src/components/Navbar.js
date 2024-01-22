import '@fortawesome/fontawesome-free/css/all.css'
import React, { useState } from 'react';

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }
    

    return (
        <nav id="navbar">

            <div className="nav-logo-container">
                <a href="/" className="nav-logo"><h1>MKLotay</h1></a>
                <button className="mobileMenuTrigger" onClick={toggleMenu} aria-expanded={isActive} aria-controls="navigationLinks" title="Open and Close Navbar">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>
            </div>

            <div className={`nav-links-container ${isActive ? 'active' : ''}`} id="navigationLinks">
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>

                <div className="nav-socials">
                    <a href="/" title="Send me an email" target="_blank" rel="noopener">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="/" title="Visit my LinkedIn profile" target="_blank" rel="noopener">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/" title="Visit my GitHub profile" target="_blank" rel="noopener">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>

            </div>

        </nav>
    )

}

export default Navbar