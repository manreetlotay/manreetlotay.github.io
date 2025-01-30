import '@fortawesome/fontawesome-free/css/all.css';
import javaLogo from '../images/java.png';
import CLogo from '../images/C.png';
import CPPLogo from '../images/C++.png';
import pythonLogo from '../images/python.png';
import HTMLLogo from '../images/HTML.png';
import CSSLogo from '../images/CSS.png';
import bootstrapLogo from '../images/bootstrap.png';
import nodejsLogo from '../images/nodejs.png';
import gitLogo from '../images/git.png';
import mongoDBLogo from '../images/mongoDB.png';
import vscodeLogo from '../images/vscode.png';
import powerPlatformLogo from '../images/powerPlatform.png';
import reactjsLogo from '../images/reactjs.png';

import React, { useEffect, useRef } from 'react';

function About() {


    const aboutRef = useRef(null);

    useEffect(() => {
        const aboutObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        });

        if (aboutRef.current) {
            aboutObserver.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                aboutObserver.unobserve(aboutRef.current);
            }
        };
    }, []);






    return(
        <section id="about" ref={aboutRef}>
            <h1>About Me</h1>
            <h3 className="education animate-in">I am currently a 4th year <b>Software Engineering</b> student at Concordia University, Montreal, Canada. Here are some technologies I have been working with:</h3>
            <div className="languages-grid-container animate-in">
                <img className="language-logo" src={javaLogo} alt="logo of java"/> 
                <img className="language-logo" src={CLogo} alt="logo of C"/>
                <img className="language-logo" src={CPPLogo} alt="logo of C++"/>
                <img className="language-logo" src={pythonLogo} alt="logo of Python"/>
                <img className="language-logo" src={HTMLLogo} alt="logo of HTML"/>
                <img className="language-logo" src={CSSLogo} alt="logo of CSS"/>
                <img className="language-logo" src={bootstrapLogo} alt="logo of Bootstrap"/>
                <img className="language-logo" src={nodejsLogo} alt="logo of Node.js"/>
                <img className="language-logo" src={reactjsLogo} alt="logo of React.js"/>
                <img className="language-logo" src={mongoDBLogo} alt="logo of mongoDB"/>                    <img className="language-logo" src={vscodeLogo} alt="logo of Visual Studio Code"/>
                <img className="language-logo" src={powerPlatformLogo} alt="logo of Microsoft Power Platform"/> 
            </div>
        </section>
    )

}

export default About