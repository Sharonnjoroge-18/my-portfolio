import './navbar.css';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeLink,setActiveLink]= useState('#home')

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') || 'dark';

    setTheme(savedTheme);

    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);

    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleLinkClick =(link) => {
    setActiveLink(link);
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Sharon
      </div>

      {/* Desktop Navigation */}
      <ul className="navbar-links">
        <li><a href="#home" className={activeLink === '#home' ? 'active' : ''} 
            onClick={() => handleLinkClick('#home')}
          >Home</a></li>
        <li><a href="#about" className={activeLink === '#about' ? 'active' : ''}
          onClick={() => handleLinkClick('#about')}
          >About</a></li>
        <li><a href="#skills" className={activeLink === '#skills' ? 'active' : ''}
         onClick={() => handleLinkClick('#skills')}
         >Skills</a></li>
        <li><a href="#projects" className={activeLink === '#projects' ? 'active' : ''}
         onClick={() => handleLinkClick('#projects')}
         >Projects</a></li>
        <li><a href="#experience" className={activeLink === '#experience' ? 'active' : ''}
         onClick={() => handleLinkClick('#experience')}
         >Experience</a></li>
        <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''}
         onClick={() => handleLinkClick('#contact')}
         >Contact</a></li>
        <li onClick={toggleTheme}>
          {theme === 'dark' ? (
            <FaSun className="navbar-icon" />
          ) : (
            <FaMoon className="navbar-icon" />
          )}
        </li>
      </ul>

      {/*Mobile Icons */}
      <div className="navbar-actions">
        <div onClick={toggleTheme}>
          {theme === 'dark' ? (
            <FaSun className="navbar-icon" />
          ) : (
            <FaMoon className="navbar-icon" />
          )}
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
<div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
  <a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={() => handleLinkClick('#home')}>Home</a>
  <a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={() => handleLinkClick('#about')}>About</a>
  <a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={() => handleLinkClick('#skills')}>Skills</a>
  <a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleLinkClick('#projects')}>Projects</a>
  <a href="#experience" className={activeLink === '#experience' ? 'active' : ''} onClick={() => handleLinkClick('#experience')}>Experience</a>
  <a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={() => handleLinkClick('#contact')}>Contact</a>
</div>
    </nav>
  );
}

export default Navbar;