import './footer.css';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Sharon Njoroge. All rights reserved.</p>

      <a href="#home" className="back-to-top">
        <FaArrowUp />
      </a>
    </footer>
  );
}

export default Footer;