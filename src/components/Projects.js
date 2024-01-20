function Projects() {
    return(
        <section id="projects">
            <h1>Projects</h1>
            <div className="realEstate-project-container">
                <h2>Project Name</h2>
                <h3>Brief Description</h3>
                <button className="View-GitHub-Btn">View on GitHub</button>
                <button className="View-Demo-Btn">Watch Demo</button>
                <ul className="language-container">
                    <li>ReactJS</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                </ul>
                <div className="project-gallery">
                    Images of project
                </div>
            </div>
        </section>
    )

}

export default Projects