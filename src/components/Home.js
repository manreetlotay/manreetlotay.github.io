function Home() {
    return(
        <section id="home">
            <div className="home-text-container">
                {/* <h1>Hello, Manreet here.</h1> */}
                <h1>Hello, <span class="highlight-name">Manreet</span> here.</h1>
                <h3>A Full-Stack Developer with a passion for crafting apps that are both user-friendly and accessible.</h3>
            </div>
            <div className="home-buttons-container">
                <button className="resume-btn">Resume</button>
                <button className="contact-btn">Contact Me</button>
            </div>
            <div className="cat-walking"></div>
        </section>
    )

}

export default Home