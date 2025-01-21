import React, { useEffect, useRef } from 'react';

function Work() {

    const workRef = useRef(null);

    useEffect(() => {
        const workObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        });

        if (workRef.current) {
            workObserver.observe(workRef.current);
        }

        return () => {
            if (workRef.current) {
                workObserver.unobserve(workRef.current);
            }
        };
    }, []);


    return(
        <section id="work" ref={workRef}>
            <h1 className="animate-in">Experience</h1>
                <div class="experience 2">
                    <h2 className="animate-in">Front End Developer Intern <span class="company-name">| Intact</span></h2>
                    <h4 className="animate-in">MAY - AUGUST 2024</h4>
                    <ul className="work-description animate-in">
                        <li>Converted legacy Thymeleaf pages into modern, responsive Angular pages, improving UI consistency and
                            maintainability</li>
                        <li>Worked with QA’s to identify, reproduce, and resolve front-end bugs, ensuring high-quality deliverables.</li>
                        <li>Wrote comprehensive unit tests for all pages, achieving 100% test coverage.</li>
                        <li>Utilized Docker to containerize the website, enhancing deployment efficiency and scalability.</li>
                    </ul>
                </div>
                <br></br>
                <br></br>
                <div class="experience 1">
                    <h2 className="animate-in">Developer Analyst Intern <span class="company-name">| Bombardier</span></h2>
                    <h4 className="animate-in">SEPT - DEC 2022</h4>
                    <ul className="work-description animate-in">
                        <li>Streamlined business travel and internship assessment processes for the Legal Services team using a
                            custom-built Microsoft PowerApps.</li>
                        <li>Implemented Power Automate flow integration, enabling the Legal Services team to receive automatic
                            notifications upon request completion</li>
                        <li>Facilitated generation of tailored legal documents by leveraging Power Automation for Microsoft Word
                            templates.</li>
                    </ul>
                </div>
        </section>
    )

}

export default Work