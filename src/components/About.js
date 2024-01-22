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

function About() {
    return(
        <section id="about">
            <h1>About Me</h1>
            <h3 className="education">I am currently a 3rd year <b>Software Engineering</b> student at Concordia University, Montreal, Canada. Here are some technologies I have been working with:</h3>
            <div className="languages-grid-container">
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