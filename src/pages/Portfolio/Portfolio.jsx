import { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('tab-rppg');
    const [activeProject, setActiveProject] = useState('rppg');
    const [activeVdaTab, setActiveVdaTab] = useState('tab-vda-overview');

    // Setup GPA gradient SVG
    const svgRef = useRef(null);
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg || svg.querySelector('defs')) return;

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gpa-gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '0%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#7c5cfc');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#00d4aa');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }, []);

    // Scroll reveal
    useEffect(() => {
        const revealElements = document.querySelectorAll(
            '.portfolio-page .section-header, .portfolio-page .about-text, .portfolio-page .about-visual, ' +
            '.portfolio-page .timeline-item, .portfolio-page .project-card, .portfolio-page .skill-category, ' +
            '.portfolio-page .experience-card, .portfolio-page .cert-card, .portfolio-page .contact-card, .portfolio-page .info-card'
        );

        revealElements.forEach((el) => el.classList.add('reveal'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="portfolio-page">
            <div className="portfolio-content">
                {/* About Section */}
                <section className="section" id="about">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-user"></i> About</span>
                        </div>
                        <div className="about-grid">
                            <div className="about-text">
                                <p>
                                    I am currently a student majoring in <strong>Computer Science</strong> (D23 - 2023 cohort) at Posts and Telecommunications Institute of Technology (PTIT) in Hanoi. I am a person who loves learning new things, regardless of what it is, as long as I find it interesting.
                                </p>

                                <p>
                                    <strong>Regarding my personality</strong>, I am highly <strong>adaptable</strong> to any environment, work <strong>responsibly</strong>, and always strive to complete assigned tasks well. Although I am quite introverted, preferring to spend time with myself and close ones, I deeply value and try to maintain my social relationships. I believe that the combination of adaptability, a sense of responsibility, and introversion has helped me develop comprehensively both personally and professionally.
                                </p>

                                <p>
                                    <strong>My main passion</strong> is <strong>Artificial Intelligence (AI)</strong>. I am not only interested in applying AI to <strong>solve real-world problems</strong> but also <strong>passionate about researching</strong> it deeply through various problems (since, fundamentally, AI is mathematics).
                                </p>

                                <div className="about-info-cards">
                                    <a href="mailto:minhhieuhh2k5@gmail.com" className="info-card">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <span className="info-label">Email</span>
                                            <span className="info-value">minhhieuhh2k5@gmail.com</span>
                                        </div>
                                    </a>
                                    <a href="tel:+84375049906" className="info-card">
                                        <i className="fas fa-phone-alt"></i>
                                        <div>
                                            <span className="info-label">Phone</span>
                                            <span className="info-value">0375 049 906</span>
                                        </div>
                                    </a>
                                    <a href="https://github.com/mhiu05" target="_blank" rel="noopener noreferrer" className="info-card">
                                        <i className="fab fa-github"></i>
                                        <div>
                                            <span className="info-label">GitHub</span>
                                            <span className="info-value">github.com/mhiu05</span>
                                        </div>
                                    </a>
                                    <div className="info-card">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <span className="info-label">Location</span>
                                            <span className="info-value">Hanoi, Vietnam</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-visual">
                                <div className="tech-orbit">
                                    <div className="orbit-center">
                                        <i className="fas fa-code"></i>
                                    </div>
                                    <div className="orbit-ring ring-1">
                                        <div className="orbit-item" style={{ '--angle': '0deg' }}><i className="fab fa-python"></i></div>
                                        <div className="orbit-item" style={{ '--angle': '120deg' }}><i className="fab fa-docker"></i></div>
                                        <div className="orbit-item" style={{ '--angle': '240deg' }}><i className="fab fa-git-alt"></i></div>
                                    </div>
                                    <div className="orbit-ring ring-2">
                                        <div className="orbit-item" style={{ '--angle': '60deg' }}><i className="fas fa-robot"></i></div>
                                        <div className="orbit-item" style={{ '--angle': '180deg' }}><i className="fas fa-database"></i></div>
                                        <div className="orbit-item" style={{ '--angle': '300deg' }}><i className="fas fa-server"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="section section-alt" id="education">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-graduation-cap"></i> Education</span>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker"><i className="fas fa-university"></i></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>Posts and Telecommunications Institute of Technology</h3>
                                        <span className="timeline-date"><i className="far fa-calendar-alt"></i> 2023 — 2028</span>
                                    </div>
                                    <p className="timeline-degree">Bachelor of Engineering in Computer Science</p>
                                    <p className="timeline-location"><i className="fas fa-map-marker-alt"></i> Ha Dong, Hanoi</p>
                                    <div className="gpa-badge">
                                        <div className="gpa-circle">
                                            <svg viewBox="0 0 100 100" ref={svgRef}>
                                                <circle cx="50" cy="50" r="42" className="gpa-bg" />
                                                <circle cx="50" cy="50" r="42" className="gpa-fill" style={{ '--gpa-percent': 85 }} />
                                            </svg>
                                            <span className="gpa-value">3.41</span>
                                        </div>
                                        <span className="gpa-label">GPA / 4.0</span>
                                    </div>
                                    <div className="education-achievements">
                                        <h4 className="achievements-title"><i className="fas fa-trophy"></i> Additional Information</h4>
                                        <ul className="achievements-list">
                                            <li><i className="fas fa-award"></i> PTIT Entrance Scholarship</li>
                                            <li><i className="fas fa-award"></i> Academic Excellence Scholarship (Semester 4)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="section" id="projects">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-rocket"></i> Projects</span>
                        </div>

                        {/* Project Switcher */}
                        <div className="project-switcher">
                            <button
                                id="btn-project-rppg"
                                className={`project-switch-btn ${activeProject === 'rppg' ? 'active' : ''}`}
                                onClick={() => setActiveProject('rppg')}
                            >
                                <div className="psb-icon"><i className="fas fa-heartbeat"></i></div>
                                <div className="psb-content">
                                    <span className="psb-label">Project 1</span>
                                    <span className="psb-title">Non-Invasive Health Analysis</span>
                                    <span className="psb-tags">
                                        <span>Computer Vision</span>
                                        <span>RAG</span>
                                        <span>WebSocket</span>
                                    </span>
                                </div>
                                <i className="fas fa-chevron-right psb-arrow"></i>
                            </button>
                            <button
                                id="btn-project-vda"
                                className={`project-switch-btn ${activeProject === 'vda' ? 'active' : ''}`}
                                onClick={() => setActiveProject('vda')}
                            >
                                <div className="psb-icon psb-icon-vda"><i className="fas fa-diagram-project"></i></div>
                                <div className="psb-content">
                                    <span className="psb-label">Project 2</span>
                                    <span className="psb-title">VDaAgent — Data Profiling</span>
                                    <span className="psb-tags">
                                        <span>LangGraph</span>
                                        <span>FastAPI</span>
                                        <span>Next.js</span>
                                    </span>
                                </div>
                                <i className="fas fa-chevron-right psb-arrow"></i>
                            </button>
                        </div>

                        {/* ── PROJECT 1: Non-Invasive ── */}
                        <div className={`project-showcase ${activeProject === 'rppg' ? 'project-visible' : 'project-hidden'}`}>
                            {/* Project Hero Card */}
                            <div className="project-card featured">
                                <div className="project-card-glow"></div>
                                <div className="project-header">
                                    <div className="project-icon"><i className="fas fa-heartbeat"></i></div>
                                    <div className="project-links">
                                        <a href="https://github.com/mhiu05/Non-Invasive" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub repository">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://non-invasive.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live demo">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                                <h3 className="project-title">Non-Invasive Health Analysis System</h3>
                                <p className="project-date"><i className="far fa-calendar-alt"></i> first commit on Nov 11, 2025</p>
                                <p className="project-description">
                                    A platform for measuring health indicators such as: Heart Rate (HR), Heart Rate Variability (HRV), and BVP signals,
                                    providing vital information about the autonomic nervous system&apos;s state, stress resilience,
                                    and cardiovascular disease risk from facial videos. Features real-time webcam analysis via WebSocket, offline video processing
                                    with asynchronous task queues, and an AI medical chatbot using advanced RAG.
                                </p>
                                <div className="project-demo-image">
                                    <img src="/figures/project_demo.png" alt="Non-Invasive Health Analysis System — Live measurement interface" loading="lazy" />
                                    <div className="demo-caption">
                                        <i className="fas fa-camera"></i> Live analysis interface — HR, Blink Rate, SNR &amp; real-time BVP waveform
                                    </div>
                                </div>
                            </div>

                            {/* Architecture Diagram */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-sitemap"></i> Architecture</h3>
                                <p className="project-card-desc">Designed with 4 main layers: Computer Vision (rPPG), Signal Processing, RAG Chatbot, and Web Fullstack — connected via WebSocket, REST API, and a distributed Celery + Redis task queue.</p>
                                <div className="project-architecture-image">
                                    <img src="/figures/project_architecture.png" alt="Architecture Diagram of the Non-Invasive Health Analysis System" loading="lazy" />
                                </div>
                            </div>

                            {/* Feature Tabs */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-layer-group"></i> Project Details</h3>
                                <div className="feature-tabs">
                                    <div className="tab-buttons">
                                        {[
                                            { id: 'tab-rppg', icon: 'fas fa-wave-square', label: 'rPPG' },
                                            { id: 'tab-realtime', icon: 'fas fa-broadcast-tower', label: 'Real-time' },
                                            { id: 'tab-async', icon: 'fas fa-cogs', label: 'Async Tasks' },
                                            { id: 'tab-rag', icon: 'fas fa-robot', label: 'Chatbot RAG' },
                                            { id: 'tab-frontend', icon: 'fab fa-react', label: 'Frontend' },
                                        ].map((tab) => (
                                            <button
                                                key={tab.id}
                                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                                onClick={() => setActiveTab(tab.id)}
                                            >
                                                <i className={tab.icon}></i>
                                                <span>{tab.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-panels">
                                        {/* rPPG Engine */}
                                        <div className={`tab-panel ${activeTab === 'tab-rppg' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Computer Vision &amp; Signal Processing</h4>
                                                <span className="tab-badge">Computer Vision</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span>Implemented NMF-based 3D-CNN + FSAM architecture via <strong>ONNX Runtime</strong> — lightweight inference without PyTorch dependencies.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>MediaPipe Face Mesh</strong> for real-time face detection, bounding box expansion, and crop resizing.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Chunk-based processing pipeline: <strong>SessionState</strong> maintains a rolling buffer of 180 frames per session.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Signal processing: <strong>detrend → Butterworth bandpass → FFT peak detection</strong> to calculate heart rate.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Extract HRV metrics: <strong>RMSSD, SDNN, PNN50</strong>, along with SNR quality assessment.</span></li>
                                            </ul>
                                            <div className="tab-metrics">
                                                <div className="metric-item"><span className="metric-value">0.04</span><span className="metric-label">MAE (bpm) — Resting</span></div>
                                                <div className="metric-item"><span className="metric-value">0.83</span><span className="metric-label">MAE (bpm) — Head Motion</span></div>
                                                <div className="metric-item"><span className="metric-value">1.67</span><span className="metric-label">MAE (bpm) — Talking</span></div>
                                                <div className="metric-item"><span className="metric-value">&lt;2</span><span className="metric-label">bpm error — All conditions</span></div>
                                            </div>
                                        </div>

                                        {/* Real-time */}
                                        <div className={`tab-panel ${activeTab === 'tab-realtime' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Real-time WebSocket Streaming</h4>
                                                <span className="tab-badge">Live Analysis</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>WebSocket endpoint</strong> (<code>ws://host/ws/stream</code>) accepts live webcam frames.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Each connection maintains an isolated <strong>SessionState</strong> — supporting concurrent multi-user sessions.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Automatically saves measurement records to <strong>PostgreSQL</strong> when the session exceeds 5 seconds.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Frontend hooks (<code>useWebSocket.js</code> + <code>useWebcam.js</code>) handle video capture and reconnection.</span></li>
                                            </ul>
                                        </div>

                                        {/* Async */}
                                        <div className={`tab-panel ${activeTab === 'tab-async' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Asynchronous Video Processing Pipeline</h4>
                                                <span className="tab-badge">Background Jobs</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><code>POST /video/upload-async</code> → save to <strong>S3</strong> → create job → dispatch to <strong>Celery + Redis</strong>.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Celery Worker</strong> downloads → detects face → rPPG inference → saves results.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Dockerized 4-service architecture orchestrated via Docker Compose.</span></li>
                                            </ul>
                                            <div className="flow-diagram">
                                                <div className="flow-step"><i className="fas fa-upload"></i><span>Upload</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-cloud"></i><span>S3</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-tasks"></i><span>Celery</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-brain"></i><span>rPPG</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-database"></i><span>Database</span></div>
                                            </div>
                                        </div>

                                        {/* RAG */}
                                        <div className={`tab-panel ${activeTab === 'tab-rag' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Medical Chatbot — Advanced RAG</h4>
                                                <span className="tab-badge">NLP / LLM</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span>Advanced RAG: <strong>Query Rewriting</strong> → <strong>Hybrid Search</strong> (FAISS + BM25) → <strong>Cross-Encoder Re-ranking</strong> → <strong>Google Gemini</strong>.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Knowledge base ingestion from <code>Medical_book.pdf</code> — supports PDF, Markdown, and raw text.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Lazy-loaded RAG chain — fast cold starts and memory efficient.</span></li>
                                            </ul>
                                            <div className="flow-diagram">
                                                <div className="flow-step"><i className="fas fa-question-circle"></i><span>Query</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-pen"></i><span>Rewrite</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-search"></i><span>Search</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-sort-amount-down"></i><span>Re-rank</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-magic"></i><span>Gemini</span></div>
                                            </div>
                                        </div>

                                        {/* Frontend */}
                                        <div className={`tab-panel ${activeTab === 'tab-frontend' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Frontend — React + Vite</h4>
                                                <span className="tab-badge">Web UI</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>3 main pages</strong>: Home, Live (webcam + vitals), Upload (async video + history).</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Live page: webcam stream with <strong>face bounding box overlay</strong>, real-time Vitals Cards.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Floating AI chatbot widget</strong> accessible from any page.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>State management via <strong>Zustand</strong>, CSS Modules for scoped styling.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Supabase Auth</strong> — user login/signup to persist health measurement history.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Benchmark */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-chart-bar"></i> Benchmark Results</h3>
                                <p className="project-card-desc">Evaluated on 10 subjects under 3 real-world conditions. The system achieves high accuracy (error &lt; 2 bpm) even under motion or talking conditions.</p>
                                <div className="benchmark-image">
                                    <img src="/figures/benchmark_normal.png" alt="Benchmark Results — Normal (resting)" loading="lazy" />
                                    <div className="demo-caption"><i className="fas fa-flask"></i> HR Measurement Benchmark — Normal (resting), model: FactorizePhys</div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-cubes"></i> Tech Stack</h3>
                                <div className="project-tech-grid">
                                    {[
                                        { label: 'AI / CV', items: ['ONNX Runtime', 'MediaPipe', 'FactorizePhys', 'FFT', 'Butterworth Filter'] },
                                        { label: 'RAG / NLP', items: ['Google Gemini', 'FAISS', 'BM25', 'Cross-Encoder', 'LangChain'] },
                                        { label: 'Backend', items: ['FastAPI', 'WebSocket', 'Celery', 'Redis', 'Pydantic'] },
                                        { label: 'Frontend', items: ['React', 'Vite', 'Zustand', 'CSS Modules'] },
                                        { label: 'Cloud / Infrastructure', items: ['Supabase', 'PostgreSQL', 'S3 Storage', 'Docker', 'Vercel'] },
                                    ].map((group) => (
                                        <div className="tech-group" key={group.label}>
                                            <span className="tech-group-label">{group.label}</span>
                                            <div className="tech-group-items">
                                                {group.items.map((item) => (
                                                    <span className="tech-tag" key={item}>{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── PROJECT 2: VDaAgent ── */}
                        <div className={`project-showcase ${activeProject === 'vda' ? 'project-visible' : 'project-hidden'}`}>
                            {/* VDaAgent Hero Card */}
                            <div className="project-card featured vda-featured">
                                <div className="project-card-glow vda-glow"></div>
                                <div className="project-header">
                                    <div className="project-icon project-icon-vda"><i className="fas fa-diagram-project"></i></div>
                                    <div className="project-links">
                                        <span className="project-wip-badge"><i className="fas fa-hard-hat"></i> In Development</span>
                                    </div>
                                </div>
                                <h3 className="project-title">VDaAgent — Evidence-First Data Profiling Workspace</h3>
                                <p className="project-date"><i className="far fa-calendar-alt"></i> Started Jul 2026 · Active development</p>
                                <p className="project-description">
                                    An evidence-first workspace for data profiling and visual analytics. The core unit is a <strong>Profile Run</strong> — deterministic profiling of CSV, TSV, Parquet, JSON, MySQL, MongoDB, and DuckDB sources — followed by AI-powered chart planning, Q&amp;A, drift comparison, and immutable report snapshots. Built with a multi-service architecture on Azure.
                                </p>
                                {/* User flow */}
                                <div className="vda-flow">
                                    {[
                                        { icon: 'fas fa-sign-in-alt', label: 'Login' },
                                        { icon: 'fas fa-upload', label: 'Upload Dataset' },
                                        { icon: 'fas fa-cogs', label: 'Profile Run' },
                                        { icon: 'fas fa-user-check', label: 'HITL Review' },
                                        { icon: 'fas fa-chart-bar', label: 'Charts / Q&A' },
                                        { icon: 'fas fa-file-pdf', label: 'Report PDF' },
                                    ].map((step, i, arr) => (
                                        <div className="vda-flow-item" key={step.label}>
                                            <div className="vda-flow-step">
                                                <i className={step.icon}></i>
                                                <span>{step.label}</span>
                                            </div>
                                            {i < arr.length - 1 && <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* VDaAgent Tabs */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-layer-group"></i> Project Details</h3>
                                <div className="feature-tabs">
                                    <div className="tab-buttons">
                                        {[
                                            { id: 'tab-vda-overview', icon: 'fas fa-boxes', label: 'Overview' },
                                            { id: 'tab-vda-arch', icon: 'fas fa-sitemap', label: 'Architecture' },
                                            { id: 'tab-vda-profiling', icon: 'fas fa-microscope', label: 'Profiling' },
                                            { id: 'tab-vda-agent', icon: 'fas fa-robot', label: 'Agent & Charts' },
                                            { id: 'tab-vda-reports', icon: 'fas fa-file-alt', label: 'Reports' },
                                        ].map((tab) => (
                                            <button
                                                key={tab.id}
                                                className={`tab-btn ${activeVdaTab === tab.id ? 'active' : ''}`}
                                                onClick={() => setActiveVdaTab(tab.id)}
                                            >
                                                <i className={tab.icon}></i>
                                                <span>{tab.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-panels">
                                        {/* Overview */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-overview' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Product Overview</h4>
                                                <span className="tab-badge vda-badge">Full-Stack Platform</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span>Accepts <strong>CSV, TSV, Parquet, JSON</strong> uploads and connects to <strong>MySQL, MongoDB, DuckDB</strong> — all materialized to a secure bounded pipeline.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Deterministic profiling</strong>: schema, quality, statistics, correlation, privacy proposals (PII) per column.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Human-in-the-loop (HITL)</strong> review step: Analyst confirms, edits or rejects semantic type / candidate key / PII proposals before run completes.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Evidence-first</strong> invariant: PII-confirmed columns are excluded from Agent/chart context. No raw rows are returned to the browser or report.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Workspace-scoped roles: <strong>Analyst</strong> for profiling/analytics, <strong>Admin</strong> for user/account management via Supabase Auth.</span></li>
                                            </ul>
                                            <div className="tab-metrics">
                                                <div className="metric-item"><span className="metric-value">28</span><span className="metric-label">Forecast Models</span></div>
                                                <div className="metric-item"><span className="metric-value">15</span><span className="metric-label">Chart Renderers</span></div>
                                                <div className="metric-item"><span className="metric-value">3</span><span className="metric-label">Azure App Services</span></div>
                                                <div className="metric-item"><span className="metric-value">∞</span><span className="metric-label">Profile Runs</span></div>
                                            </div>
                                        </div>

                                        {/* Architecture */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-arch' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Multi-Service Architecture</h4>
                                                <span className="tab-badge vda-badge">Azure Deployed</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Next.js 15 / React 19</strong> frontend — SSR, Supabase PKCE auth, React Query, SSE consumer and server-side PDF route.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>FastAPI</strong> backend — REST/SSE, Bearer + X-Workspace-Id guard, workspace bootstrap, audit and all business workflows.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Dedicated profiling worker</strong> — claims durable jobs via <code>SKIP LOCKED</code>, heartbeat lease renewal, LangGraph HITL resume.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>PostgreSQL / Supabase</strong> for all metadata, audit, LangGraph checkpoints, evidence and trace — never raw rows.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>CI/CD via <strong>GitHub Actions</strong>: Ruff, pytest, Playwright E2E, Vitest, typecheck → build/push images → Alembic migrate → restart 3 App Services → health check.</span></li>
                                            </ul>
                                            <div className="flow-diagram">
                                                <div className="flow-step"><i className="fas fa-globe"></i><span>Next.js</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-bolt"></i><span>FastAPI</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-cog"></i><span>Worker</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-database"></i><span>PostgreSQL</span></div>
                                            </div>
                                        </div>

                                        {/* Profiling */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-profiling' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Deterministic Profiling Engine</h4>
                                                <span className="tab-badge vda-badge">DuckDB + pandas</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><code>POST /profile</code> returns <strong>202 Accepted</strong>; client polls <code>GET /profiling-jobs/{'{jobId}'}</code> for status transitions: <em>queued → running → succeeded</em>.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Worker uses <code>SKIP LOCKED</code> for atomic job claim, bounded concurrency and finite retry with lease heartbeat.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Profiling graph (LangGraph) saves: row/column counts, column statistics, correlation, quality flags, PII proposals and provenance.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>External datasources (MySQL, MongoDB, DuckDB) are validated, credentials <strong>Fernet-encrypted</strong> at rest, then materialized to a temp file — max 1,000,000 rows.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Analyst HITL review: <code>PATCH /profile/{'{runId}'}/confirm</code> persists decisions and enqueues continuation for the worker to resume the LangGraph checkpoint.</span></li>
                                            </ul>
                                        </div>

                                        {/* Agent & Charts */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-agent' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>AI Agent, Charts &amp; Forecast</h4>
                                                <span className="tab-badge vda-badge">LangGraph + LLM</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Chart planner</strong> converts natural-language questions into a validated <code>QuerySpec</code> (allow-listed columns, analysis kind, aggregation, time grain). Deterministic fallback when LLM unavailable.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Analysis kinds: <strong>aggregate, histogram, scatter, box, heatmap, forecast, missing, correlation, cardinality, violin, donut, outlier</strong> — 15 native renderers.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>28 forecast model adapters</strong>: baseline, exponential smoothing, ARIMA, state-space, decomposable and ML. Hidden when dependency or data contract missing.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Q&amp;A Agent (<code>POST /qa/stream</code>) is evidence-scoped to the selected Profile Run; bounded short-term memory (8 messages, per-message truncation).</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>MCP stdio server</strong> (FastMCP) for trusted local processes — bounded profile/chart tools only, no raw-row or SQL execution paths.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Google Calendar integration</strong>: OAuth per workspace/user, list/create/delete events via UI, API and MCP.</span></li>
                                            </ul>
                                        </div>

                                        {/* Reports */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-reports' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Immutable Report Snapshots &amp; Export</h4>
                                                <span className="tab-badge vda-badge">PDF / JSON</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span>Report Draft is tied to a single Profile Run. Charts pinned to Draft must be <strong>Official evidence</strong> (promoted from Preview with result hash and provenance).</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Snapshot</strong> freezes the Draft immutably. Submit → Review → Publish → Archive lifecycle then operates on the frozen snapshot, not live UI state.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>PDF rendered server-side by Next.js route using <strong>Playwright Core + Chromium</strong> after FastAPI authorizes the export source.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Drift comparison: <code>POST /profile/{'{runId}'}/drift</code> between two completed Profile Runs to detect schema/distribution shift.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* VDaAgent Tech Stack */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-cubes"></i> Tech Stack</h3>
                                <div className="project-tech-grid">
                                    {[
                                        { label: 'Frontend', items: ['Next.js 15', 'React 19', 'React Query', 'TypeScript'] },
                                        { label: 'Backend', items: ['FastAPI', 'LangGraph', 'Pydantic', 'Alembic'] },
                                        { label: 'AI / Agent', items: ['LangGraph', 'LLM (pluggable)', 'FastMCP', 'LangSmith'] },
                                        { label: 'Compute', items: ['DuckDB', 'pandas', 'NumPy', 'SciPy', '28 Forecast Models'] },
                                        { label: 'Infrastructure', items: ['Azure App Service', 'PostgreSQL / Supabase', 'Supabase Auth', 'GitHub Actions', 'Docker'] },
                                    ].map((group) => (
                                        <div className="tech-group" key={group.label}>
                                            <span className="tech-group-label">{group.label}</span>
                                            <div className="tech-group-items">
                                                {group.items.map((item) => (
                                                    <span className="tech-tag vda-tag" key={item}>{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Experience Section */}
                <section className="section section-alt" id="experience">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-briefcase"></i> Experience</span>
                        </div>
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-microchip"></i></div>
                            <div className="experience-content">
                                <h3>Vin Univiersity - AI In Action</h3>
                                <span className="experience-role">Trainee, Onsite, Jul 2026 - Present</span>
                                <ul className="experience-list">
                                    <li><i className="fas fa-chevron-right"></i><span>Practical training following the SFIA competency framework</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>3 weeks of intensive study on AI skills and problem solving, 9 weeks of hands-on AI project execution with mentors and enterprise partners</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>Top 2 mini-hackathon across the entire cohort 3 & 4</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-cube"></i></div>
                            <div className="experience-content">
                                <h3>Phenikaa-X Joint Stock Company</h3>
                                <span className="experience-role">Collaborator - Annotator, Remote, Jun 2025 - Aug 2026</span>
                                <ul className="experience-list">
                                    <li><i className="fas fa-chevron-right"></i><span>Utilized OpenVPN and Xpra for remote work with 3D point cloud data from LiDAR sensors</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>Annotated and refined object point clouds to ensure training data quality</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Section */}
                <section className="section" id="research">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-flask"></i> Research</span>
                        </div>

                        {/* Research Item 1 (Mock Data) */}
                        <div className="experience-card research-card">
                            <div className="experience-icon-wrapper research-icon-wrapper">
                                <i className="fas fa-brain"></i>
                            </div>
                            <div className="experience-content">
                                <div className="research-title-row">
                                    <h3>Title of Research Project / Publication #1</h3>
                                    <span className="research-status">Under Review</span>
                                </div>
                                <span className="experience-role">Authors: Nguyen Minh Hieu, Co-author Name, Mentor Name</span>
                                <p className="research-venue">
                                    <i className="fas fa-book-open"></i> Target: Conference / Journal (e.g. CVPR / NeurIPS / IEEE Access 2026)
                                </p>
                                <ul className="experience-list">
                                    <li><i className="fas fa-chevron-right"></i><span>Proposed a novel deep learning approach for [brief topic description].</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>Conducted extensive experiments demonstrating superior performance over baseline benchmarks.</span></li>
                                </ul>
                                <div className="research-links">
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="research-link-btn">
                                        <i className="fas fa-file-pdf"></i> Paper PDF
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="research-link-btn">
                                        <i className="fab fa-github"></i> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Research Item 2 (Mock Data) */}
                        <div className="experience-card research-card">
                            <div className="experience-icon-wrapper research-icon-wrapper">
                                <i className="fas fa-atom"></i>
                            </div>
                            <div className="experience-content">
                                <div className="research-title-row">
                                    <h3>Title of Research Project / Publication #2</h3>
                                    <span className="research-status completed">Preprint / Completed</span>
                                </div>
                                <span className="experience-role">Authors: Nguyen Minh Hieu, Advisor Name</span>
                                <p className="research-venue">
                                    <i className="fas fa-book-open"></i> Published on arXiv / Lab Technical Report
                                </p>
                                <ul className="experience-list">
                                    <li><i className="fas fa-chevron-right"></i><span>Investigated [research problem] to solve key challenges in [domain/field].</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>Engineered an end-to-end framework optimizing processing time and accuracy.</span></li>
                                </ul>
                                <div className="research-links">
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="research-link-btn">
                                        <i className="fas fa-file-pdf"></i> Paper PDF
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="research-link-btn">
                                        <i className="fab fa-github"></i> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activities Section */}
                <section className="section" id="activities">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-graduation-cap"></i> Activities</span>
                        </div>

                        {/* Activity 1: AI Research Department */}
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-microscope"></i></div>
                            <div className="experience-content">
                                <h3>Member of AI Research Department at PTIT AI Young Talent (PAYT) Club</h3>
                            </div>
                        </div>

                        {/* Activity 2: ICPC Finals */}
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-trophy"></i></div>
                            <div className="experience-content">
                                <h3>Participated in the ICPC PTIT 2025 Finals</h3>
                            </div>
                        </div>

                        {/* Activity 2: Olympic AI Finals */}
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-robot"></i></div>
                            <div className="experience-content">
                                <h3>Participated in the Olympic AI PTIT 2025 Finals</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="section section-alt" id="certificates">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-award"></i> Certificates</span>
                        </div>
                        <div className="certificates-grid">
                            {[
                                { img: '/figures/toeic.jpg', icon: 'fas fa-language', date: 'Apr. 2026', title: 'TOEIC Listening & Reading: 720', issuer: 'ETS' },
                                { img: '/figures/DeepLearning-NVIDIA.jpg', icon: 'fas fa-microchip', date: 'Aug. 2025', title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA' },
                                { img: '/figures/AI_ML_Fundamentals.png', icon: 'fas fa-brain', date: 'Apr. 2025', title: 'AI/ML Fundamentals', issuer: 'PTIT x LA TROBE UNIVERSITY' },
                                { img: '/figures/math.jpg', icon: 'fas fa-calculator', date: 'Apr. 2025', title: 'Participant in National Student Mathematical Olympiad', issuer: 'Vietnam Mathematical Society' },
                                { img: '/figures/Applications of Algorithm.jpg', icon: 'fas fa-calculator', date: 'Aug. 2025', title: 'Application of Algorithm', issuer: 'SAMSUNG x PTIT' },
                                { img: '/figures/chemistry.jpg', icon: 'fas fa-calculator', date: 'Mar. 2023', title: 'Third Prize in Provincial Chemistry Olympiad', issuer: 'Bac Ninh Department of Education and Training' },
                                { img: '/figures/khoahockythua.jpg', icon: 'fas fa-calculator', date: 'Feb. 2023', title: 'Fourth Prize in Provincial Science and Engineering Fair', issuer: 'Bac Ninh Department of Education and Training' },
                            ].map((cert) => (
                                <div className="cert-card" key={cert.title}>
                                    <div className="cert-image">
                                        <img src={cert.img} alt={cert.title} loading="lazy" />
                                        <div className="cert-overlay">
                                            <a href={cert.img} target="_blank" rel="noopener noreferrer" className="cert-view-btn"><i className="fas fa-search-plus"></i> View</a>
                                        </div>
                                    </div>
                                    <div className="cert-info">
                                        <div className="cert-icon-header">
                                            <div className="cert-icon"><i className={cert.icon}></i></div>
                                            <span className="cert-date">{cert.date}</span>
                                        </div>
                                        <div className="cert-content">
                                            <h3>{cert.title}</h3>
                                            <span className="cert-issuer">{cert.issuer}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="section" id="skills">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-tools"></i> Skills</span>
                        </div>
                        <div className="skills-grid">
                            {[
                                { icon: 'fas fa-code', title: 'Language & Framework', items: [{ icon: 'fab fa-python', name: 'Python' }, { icon: 'fas fa-copyright', name: 'C / C++' }, { icon: 'fas fa-fire', name: 'PyTorch' }, { icon: 'fas fa-eye', name: 'OpenCV' }, { icon: 'fas fa-chart-line', name: 'Scikit-learn' }, { icon: 'fas fa-table', name: 'Pandas' }] },
                                {
                                    icon: 'fas fa-brain', title: 'CV, NLP & GenAI', items: [
                                        { icon: 'fas fa-database', name: 'RAG (FAISS, BM25)' },
                                        { icon: 'fas fa-sliders', name: 'Fine-tuning (LoRA/QLoRA)' },
                                        { icon: 'fas fa-closed-captioning', name: 'Image Captioning (ResNet50, LSTM)' },
                                        { icon: 'fas fa-vector-square', name: 'Object Detection (YOLO)' }
                                    ]
                                },
                                {
                                    icon: 'fas fa-server', title: 'Backend, Database & Infrastructure', items: [
                                        { icon: 'fas fa-bolt', name: 'FastAPI' },
                                        { icon: 'fas fa-database', name: 'PostgreSQL' },
                                        { icon: 'fas fa-leaf', name: 'Supabase' },
                                        { icon: 'fab fa-docker', name: 'Docker' },
                                        { icon: 'fab fa-vercel', name: 'Vercel' },
                                        { icon: 'fab fa-microsoft', name: 'Azure' }
                                    ]
                                },
                                {
                                    icon: 'fas fa-wrench', title: 'Tools & AI Tools', items: [
                                        { icon: 'fab fa-git-alt', name: 'Git/GitHub' },
                                        { icon: 'fas fa-flask', name: 'Google Colab/Kaggle' },
                                        { icon: 'fas fa-face-smile', name: 'Hugging Face' },
                                        { icon: 'fas fa-wand-magic-sparkles', name: 'Claude Code, Codex' }
                                    ]
                                },
                            ].map((category) => (
                                <div className="skill-category" key={category.title}>
                                    <div className="skill-category-header">
                                        <div className="skill-icon"><i className={category.icon}></i></div>
                                        <h3>{category.title}</h3>
                                    </div>
                                    <div className="skill-items">
                                        {category.items.map((item) => (
                                            <div className="skill-item" key={item.name}>
                                                <i className={item.icon}></i>
                                                <span>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
