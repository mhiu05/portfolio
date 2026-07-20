import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['about', 'education', 'projects', 'experience', 'skills', 'certificates', 'contact'];

        const handleScroll = () => {
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                    }
                }
            });
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
                    <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>Giới thiệu</a>
                    <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={closeMenu}>Giáo dục</a>
                    <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMenu}>Dự án</a>
                    <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={closeMenu}>Kinh nghiệm</a>
                    <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Kỹ năng</a>
                    <a href="#certificates" className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`} onClick={closeMenu}>Chứng chỉ</a>
                    <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Liên hệ</a>
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
