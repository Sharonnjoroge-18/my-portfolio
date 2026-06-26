import './hero.css';
import profile from '../images/Profile1.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <div className="hero-container">
        <section className="hero">
            <div className="hero-left">
                <div className="hero-title">
                    Hi, I'm  <br />
                    <span className="hero-name">Sharon Njoroge</span> <br/>
                </div>
                <p className="hero-description">
                    <span className="hero-specialty">CS Student. Frontend Developer. Problem Solver.</span>
                    Computer Science student, frontend developer, and lifelong learner.<br/>
                     Passionate about building meaningful applications, exploring emerging technologies, and solving real-world problems through code.<br/>
                    I don't just build websites -I build solutions.<br/>
                    Let's build something great together.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View All Projects</a>
                    <button className="btn btn-secondary">Download Resume</button>
                </div>
                <div className='hero-socials'>
                    <a href="https://github.com/Sharonnjoroge-18" target="_blank" rel="noopener noreferrer" title='GitHub'> <FaGithub size={28} /> </a>
                    <a href="https://linkedin.com/in/sharon-njoroge-0218snn" target="_blank" rel="noopener noreferrer" title='LinkedIn'> <FaLinkedin size={28}/> </a>
                    <a href="mailto:sharonnjoroge18@email.com" title='Email'> <FaEnvelope size={28}/> </a>
                </div>
            </div>
                
            <div className="hero-right">
                <img src={profile} alt="Sharon Njoroge" />
            </div>
        </section>
    </div>
  );
}

export default Hero;