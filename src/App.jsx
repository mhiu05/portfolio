import Navbar from './components/Navbar/Navbar';
import ParticleCanvas from './components/ParticleCanvas/ParticleCanvas';
import CursorGlow from './components/CursorGlow/CursorGlow';
import Portfolio from './pages/Portfolio/Portfolio';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <ParticleCanvas />
            <CursorGlow />
            <Navbar />
            <main className="app-content">
                <Portfolio />
            </main>
        </div>
    );
}

export default App;
