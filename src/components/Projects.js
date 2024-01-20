function Projects() {
    return(
        <section id="projects">
            <h1>{'<'}My Projects {'/>'}</h1>
            <div className="realEstate-project-container projectCard">
                <h2>Project Name</h2>
                <h4>Languages</h4>
                <img src=""></img>
                <h3>Brief Description</h3>
                <button className="View-GitHub-Btn">View on GitHub</button>
                <button className="View-Demo-Btn">Watch Demo</button>
                <ul className="language-container">
                    <li>ReactJS</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                </ul>
               
            </div>
        </section>
    )

}

export default Projects