import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.png';
import navIcon2 from '../assets/img/resume.png';
import navIcon3 from '../assets/img/whatsapp.png';
import resume from '../assets/pdf/resume.pdf';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={ scrolled ? "scrolled" : "" }>
        <Container>
          {/* <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experience" className={ activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#project" className={ activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href={resume} title="Resume" target="_blank" rel="noreferrer">
                      <img src={navIcon2} alt="Resume" />
                    </a>
                    <a href="https://wa.me/+6581363604" title="Whtasapp" target="_blank" rel="noreferrer">
                      <img src={navIcon3}  alt="WhatsApp"/>
                    </a>
                    <a href="https://sg.linkedin.com/in/kui-sin-pung-24a398224"  title="LinkedIn" target="_blank" rel="noreferrer">
                      <img src={navIcon1}  alt="LinkedIn"/>
                    </a>
                </div>
                <a href="#connect" className="hire-button">
                  Hire Me!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}