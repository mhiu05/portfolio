import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = !menuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#about" className="nav-logo" onClick={closeMenu}>
                    mhiu05
                </a>
                <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
                    <a
                        href="#about"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        Giới thiệu
                    </a>
                    <a
                        href="#projects"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        Dự án
                    </a>
                    <a
                        href="#contact"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        Liên hệ
                    </a>
                </div>
                <button
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                    id="navToggle"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
