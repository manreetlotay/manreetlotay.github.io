import img from '../images/reactjs.png';

function Projects() {
    return(
        <section id="projects">
            <h1>{'<'}My Projects {'/>'}</h1>
            <div className="realEstate-project-container projectCard">
                <h2>Project Name</h2>
                <h5>Languages</h5>
                <img src={img} alt="project image"></img>
                <h3>Brief Description</h3>
                <a href="/" title="View source code on gitHub" target="_blank" rel="noopener">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="/" title="View demo on youTube" target="_blank" rel="noopener">
                    <i className="fa-brands fa-youtube"></i>
                </a>
               
            </div>
        </section>
    )

}

export default Projects