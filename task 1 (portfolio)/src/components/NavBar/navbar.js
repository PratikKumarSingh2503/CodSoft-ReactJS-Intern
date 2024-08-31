import React from "react";
import './navbar.css';
import ContactImg from './contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav class="navbar">
            <a href="#" className="logo">Pratik.</a>

            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                const contactElement = document.getElementById('contact');
                if(contactElement) {
                    contactElement.scrollIntoView();
                } else {
                    
                }
            }}>
                <img src={ContactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>

    );
}

export default Navbar;