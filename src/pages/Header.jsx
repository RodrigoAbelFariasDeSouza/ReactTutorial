import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [logoHovered, setLogoHovered] = useState(false);
  const [iconHovered, setIconHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogoHover = () => {
    setLogoHovered(true);
  };

  const handleLogoLeave = () => {
    setLogoHovered(false);
  };

  const handleIconHover = (index) => {
    setIconHovered(index);
  };

  const handleIconLeave = () => {
    setIconHovered(null);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`main-header ${isMobile ? 'mobile' : ''}`}>
        <div className="logo-container">
            <Link
                to="/"
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}>
                    <img
                    src={logoHovered ? 'src/assets/bacardi-primary-logo.png' : 'src/assets/bacardi-primary-logo.png'}
                    alt="Logo da Empresa"
                    className={logoHovered ? 'hovered' : ''} />

            </Link>
 
        </div>
        
        <div className='header-title'>
            <Link
            to="/"
            className='title'
            >
            Bacardí Integrations
            </Link>
        </div>

      <nav className={`nav-icons ${isMobile ? 'mobile-menu' : ''}`}>
        {isMobile ? (
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        ) : (
          <>
            <Link
              to="/Errors"
              title='Errors Logs'
              onMouseEnter={() => handleIconHover(1)}
              onMouseLeave={handleIconLeave}
            >
              <img
                src={iconHovered === 1 ? 'src/assets/Error_Color.png' : 'src/assets/Error_Black.png'}
                alt="Ícone 1"
              />
            </Link>
            <Link
              to="/Integrations"
              title='Integrations Logs'
              onMouseEnter={() => handleIconHover(2)}
              onMouseLeave={handleIconLeave}
            >
              <img
                src={iconHovered === 2 ? 'src/assets/Integration_Color.png' : 'src/assets/Integration_Black.png'}
                alt="Ícone 2"
              />
            </Link>
            <Link
              to="/Configuration"
              title='Configurations'
              onMouseEnter={() => handleIconHover(3)}
              onMouseLeave={handleIconLeave}
            >
              <img
                src={iconHovered === 3 ? 'src/assets/Gear_Color.png' : 'src/assets/Gear_Black.png'}
                alt="Ícone 3"
              />
            </Link>
          </>
        )}
      </nav>
      {isMobile && isMenuOpen && (
        <div className="mobile-menu-options">
          <Link to="/Errors" onClick={toggleMenu}>
            Errors Logs
          </Link>
          <Link to="/Integrations" onClick={toggleMenu}>
            Integrations Logs
          </Link>
          <Link to="/Configuration" onClick={toggleMenu}>
            Configurations
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
