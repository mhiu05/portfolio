import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ParticleCanvas from './components/ParticleCanvas/ParticleCanvas';
import CursorGlow from './components/CursorGlow/CursorGlow';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-wrapper">
                <ParticleCanvas />
                <CursorGlow />
                <Navbar />
                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </main>

            </div>
        </Router>
    );
}

export default App;
