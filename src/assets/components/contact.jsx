import './contact.css';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa';
function Contact(){
    return(
       <section className="contact-container" id="contact">
            <div className="contact-left">
                <h2>Get In Touch</h2>
                <div className="contact-line"></div>
                <p className="contact-description">
                I'm currently open to new opportunities.
                If you have a project in mind or just 
                want to say hi,feel free to reach out! 
                </p>
                <div className="contct-info">
                    <div className="contact-item">
                        <FaEnvelope />
                        <span>njorogesharon18@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt />
                        <span>+254 710 771 934</span>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkedAlt />
                        <span>Nairobi, Kenya</span>
                    </div>
                </div>
                <div className="contact-socials">
                    <a
                        href="https://github.com/Sharonnjoroge-18"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/sharon-njoroge-0218snn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:njorogesharon18@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <div className="contact-right">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <textarea rows={6} placeholder="Your Message"></textarea>
                    <button type="submit">Send Message <FaPaperPlane /></button>
                </form>
            </div>
       </section> 
    );
}
export default Contact;