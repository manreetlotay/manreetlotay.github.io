import CV from "../documents/cv_2024.pdf";

function Home() {
    return(
        <section id="home">
            <div className="home-text-container">
                <h1>Hello, <span class="highlight-name">Manreet</span> here.</h1>
                <h3>A Full-Stack Developer with a passion for crafting apps that are both user-friendly and accessible.</h3>
            </div>
            <div className="home-buttons-container">
                <button className="resume-btn"><a href={CV} title="" download>Resume </a><i class="fa-solid fa-download"></i></button>
                <button className="contact-btn"><a href="mailto:lotaymk@gmail.com" title="Send me an email" target="_blank" rel="noopener">Contact Me</a></button>
            </div>
            <div className="cat-walking"></div>
        </section>
    )

}

export default Home