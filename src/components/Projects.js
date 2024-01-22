import React, { useEffect, useRef } from 'react';

function Projects() {


    const projectsContainerRef = useRef(null);
    const projectCardsRef = useRef([]);

    useEffect(() => {
        const projectsContainerObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        });

        const projectCardsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        });

        if (projectsContainerRef.current) {
            projectsContainerObserver.observe(projectsContainerRef.current);
        }

        if (projectCardsRef.current.length > 0) {
            projectCardsRef.current.forEach(card => {
                projectCardsObserver.observe(card);
            });
        }

        return () => {
            if (projectsContainerRef.current) {
                projectsContainerObserver.unobserve(projectsContainerRef.current);
            }

            if (projectCardsRef.current.length > 0) {
                projectCardsRef.current.forEach(card => {
                    projectCardsObserver.unobserve(card);
                });
            }
        };
    }, []);

    return(
        <section id="projects">
            <h1 className="animate-in">My Projects</h1>

        <div className="projects-container animate-in" ref={projectsContainerRef}>
            <div className="projectCard" ref={el => projectCardsRef.current[0] = el}>
                <h2>Real Estate Website</h2>
                <h4>{'<'}React.js Express.js MongoDB {'/>'}</h4>
                {/* <img src={img} alt="project image"></img> */}
                <h3>A full-stack website featuring a role-based login system, incorporating functionalities such as property listing favoriting, and property visit scheduling. It is implemented with secure authentication using cookies and JWT, enabling CRUD operations on MongoDB collections.</h3>
                <div className="project-card-links">
                    <a href="https://github.com/naikajb/Pioneers-soen341projectF2023" title="View source code on gitHub" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="/" title="View demo on youTube" target="_blank" rel="noopener">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>



            <div className="projectCard" ref={el => projectCardsRef.current[1] = el}>
                <h2>Warzone Risk</h2>
                <h4>{'<'}C++ {'/>'}</h4>
                {/* <img src={img} alt="project image"></img> */}
                <h3>A command-line version of the "Warzone" edition of Risk using OOP principles, featuring a connected graph map where players aim to conquer all territories, employing the strategy design pattern to define various player types with unique decision-making approaches.</h3>
                <div className="project-card-links">
                    <a href="https://github.com/manreetlotay/WarzoneRisk" title="View source code on gitHub" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="/" title="View demo on youTube" target="_blank" rel="noopener">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div className="projectCard" ref={el => projectCardsRef.current[2] = el}>
                <h2>Word Guesser</h2>
                <h4>{'<'}Python {'/>'}</h4>
                {/* <img src={img} alt="project image"></img> */}
                <h3>A console-based 4-letter word guessing game using OOP principles.</h3>
                <div className="project-card-links">
                    <a href="https://github.com/manreetlotay/wordGuessingGame" title="View source code on gitHub" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="/" title="View demo on youTube" target="_blank" rel="noopener">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>



        </div>
        </section>
    )

}

export default Projects