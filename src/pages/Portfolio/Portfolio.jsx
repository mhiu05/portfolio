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
                                    <strong>My main passion</strong> is <strong>researching AI</strong>, and recently, I’ve also been exploring and learning more about <strong>AI Agents</strong>. I am not only interested in applying AI to <strong>solve real-world problems</strong> but also <strong>passionate about researching</strong> it deeply through various problems (since, fundamentally, AI is mathematics).
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
                                        <h4 className="achievements-title"><i className="fas fa-award"></i> Additional Information</h4>
                                        <ul className="achievements-list">
                                            <li><i className="fas fa-award"></i> Entrance Scholarship, Academic Excellence Scholarship (Semester 4)</li>
                                            <li><i className="fas fa-microscope"></i> Member of AI Research Department at PTIT AI Young Talent (PAYT) Club</li>
                                            <li><i className="fas fa-trophy"></i> Participated in the ICPC PTIT 2025 Finals</li>
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
                                <div className="psb-icon psb-icon-vda"><i className="fas fa-shield-halved"></i></div>
                                <div className="psb-content">
                                    <span className="psb-label">Project 2</span>
                                    <span className="psb-title">VDaAgent — Evidence-First Workspace</span>
                                    <span className="psb-tags">
                                        <span>LangGraph</span>
                                        <span>FastAPI</span>
                                        <span>DuckDB</span>
                                        <span>Next.js 15</span>
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
                                    <div className="project-icon project-icon-vda"><i className="fas fa-shield-halved"></i></div>
                                    <div className="project-links">
                                        <a href="https://github.com/mhiu05/VDaAgent" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub repository">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <h3 className="project-title">VDaAgent - Data Profiling</h3>
                                <p className="project-date"><i className="far fa-calendar-alt"></i> Architecture &amp; System Engineering · 2026</p>
                                <p className="project-description">
                                    An enterprise-grade, evidence-first workspace for tabular data profiling and visual analytics. Designed around five core architectural pillars: <strong>Evidence-First Invariant</strong>, <strong>Bounded Execution</strong>, <strong>Workspace Isolation</strong>, <strong>Durable Async Workflows</strong>, and <strong>Human-in-the-Loop Governance</strong>. Guides analysts from heterogeneous tabular data (CSV, TSV, Parquet, JSON, MySQL, MongoDB, DuckDB) into verified statistical profiles, intelligent chart planning, conversational Q&amp;A with fail-closed validation, and immutable audit-ready report snapshots.
                                </p>

                                {/* Live Demo Interface Preview */}
                                <div className="project-demo-image vda-demo-image">
                                    <img src="/figures/Home_VDaAgent.png" alt="VDaAgent — Profile Run Command Center Live Interface" loading="lazy" />
                                    <div className="demo-caption vda-caption">
                                        <i className="fas fa-desktop"></i>
                                        <span><strong>Profile Run Command Center</strong> — Live dashboard with 10k-row reservoir sampling, real-time IQR outlier detection (16.6%), automated PII screening &amp; masking, and 4-stage deterministic provenance pipeline (Ingest → Compute → HITL Review → Ready).</span>
                                    </div>
                                </div>

                                {/* User / Provenance Execution Stepper */}
                                <div className="vda-flow">
                                    {[
                                        { icon: 'fas fa-file-import', label: '1. Ingest & SHA-256' },
                                        { icon: 'fas fa-microchip', label: '2. DuckDB Compute' },
                                        { icon: 'fas fa-user-shield', label: '3. HITL Review' },
                                        { icon: 'fas fa-chart-line', label: '4. Command Center & AI' },
                                        { icon: 'fas fa-file-contract', label: '5. Immutable Report' },
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
                                <h3 className="project-card-subtitle"><i className="fas fa-layer-group"></i> Project Details &amp; Architecture</h3>
                                <div className="feature-tabs">
                                    <div className="tab-buttons">
                                        {[
                                            { id: 'tab-vda-overview', icon: 'fas fa-boxes', label: 'Overview & Principles' },
                                            { id: 'tab-vda-command', icon: 'fas fa-desktop', label: 'Command Center' },
                                            { id: 'tab-vda-arch', icon: 'fas fa-sitemap', label: 'Architecture' },
                                            { id: 'tab-vda-agent', icon: 'fas fa-robot', label: 'Agent & Charts' },
                                            { id: 'tab-vda-reports', icon: 'fas fa-file-alt', label: 'Reports & Drift' },
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
                                        {/* Overview & 5 Principles */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-overview' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Core Architectural Principles</h4>
                                                <span className="tab-badge vda-badge">Evidence-First System</span>
                                            </div>
                                            <p className="tab-panel-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                                                VDaAgent guarantees verified quantitative truth by eliminating LLM hallucinations and bounding all execution stages through five strict rules:
                                            </p>
                                            <div className="vda-principles-grid">
                                                <div className="vda-principle-card">
                                                    <div className="vda-principle-header">
                                                        <i className="fas fa-balance-scale"></i>
                                                        <h5>1. Evidence-First Invariant</h5>
                                                    </div>
                                                    <p className="vda-principle-desc">
                                                        All numbers must trace back to compute artifacts (DuckDB/pandas) or stored Official executions with SHA-256 hashes. Missing evidence triggers fail-closed abstention.
                                                    </p>
                                                </div>
                                                <div className="vda-principle-card">
                                                    <div className="vda-principle-header">
                                                        <i className="fas fa-border-all"></i>
                                                        <h5>2. Bounded Execution</h5>
                                                    </div>
                                                    <p className="vda-principle-desc">
                                                        10k reservoir sampling by default, 50k preview / 500 result row caps, query timeouts, and allow-listed <code>QuerySpec</code> preventing arbitrary SQL or Python execution.
                                                    </p>
                                                </div>
                                                <div className="vda-principle-card">
                                                    <div className="vda-principle-header">
                                                        <i className="fas fa-building-user"></i>
                                                        <h5>3. Workspace Isolation</h5>
                                                    </div>
                                                    <p className="vda-principle-desc">
                                                        Supabase Auth JWT verification via JWKS (ES256/RS256), dynamic membership verification via <code>X-Workspace-Id</code>, and Fernet-encrypted datasource credentials.
                                                    </p>
                                                </div>
                                                <div className="vda-principle-card">
                                                    <div className="vda-principle-header">
                                                        <i className="fas fa-repeat"></i>
                                                        <h5>4. Durable Asynchronous Workflows</h5>
                                                    </div>
                                                    <p className="vda-principle-desc">
                                                        Profiling jobs run in background workers using PostgreSQL <code>SKIP LOCKED</code> with 300s lease renewal heartbeats and LangGraph checkpoint resume.
                                                    </p>
                                                </div>
                                                <div className="vda-principle-card">
                                                    <div className="vda-principle-header">
                                                        <i className="fas fa-user-shield"></i>
                                                        <h5>5. Human-in-the-Loop Governance</h5>
                                                    </div>
                                                    <p className="vda-principle-desc">
                                                        PII detection (addresses, emails, phone numbers) and candidate keys require analyst verification; pending/confirmed PII is permanently masked from AI contexts.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="tab-metrics" style={{ marginTop: '24px' }}>
                                                <div className="metric-item"><span className="metric-value">10,000</span><span className="metric-label">Reservoir Sample Rows</span></div>
                                                <div className="metric-item"><span className="metric-value">15</span><span className="metric-label">Native Chart Types</span></div>
                                                <div className="metric-item"><span className="metric-value">28</span><span className="metric-label">Time-Series Models</span></div>
                                                <div className="metric-item"><span className="metric-value">Fail-Closed</span><span className="metric-label">Zero-Hallucination Gate</span></div>
                                            </div>
                                        </div>

                                        {/* Command Center */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-command' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Profile Run Command Center</h4>
                                                <span className="tab-badge vda-badge">Preview vs. Official</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Live Profile Run Command Center</strong>: A consolidated dashboard tracking dataset telemetry, exact vs. approximate reservoir statistics, quasi-identifiers, and risk evaluations.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Two-Tier Execution Model</strong>:
                                                    <br />• <em>Preview</em>: Rapid exploratory queries on bounded samples (up to 50k input rows, 50 output rows, 1-hour ephemeral TTL) for interactive speed.
                                                    <br />• <em>Official Execution</em>: Re-executed on full dataset source within bounded policy (up to 500 result rows, immutable context version, result SHA-256 hash). Only Official executions qualify as evidence for reports.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Automated Risk &amp; Privacy Auditor</strong>: Detects outliers using IQR (e.g. 16.6% outliers on spatial coordinates), heuristic + LLM PII screening (e.g. zip code address signals with 60% confidence), and automatically masks values from downstream outputs.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Analysis Sessions &amp; Context Versioning</strong>: Every exploration creates an immutable <code>ContextVersion</code>. Analysts can filter, select columns, acknowledge data quality issues, and trigger auto-planned chart packs.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>4-Stage Deterministic Provenance</strong>: Ingest &amp; Canonical SHA-256 → DuckDB Reservoir Compute → HITL Metadata Review → Ready for Analysis.</span></li>
                                            </ul>
                                        </div>

                                        {/* Architecture */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-arch' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Multi-Service Cloud Architecture</h4>
                                                <span className="tab-badge vda-badge">Azure App Service</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Next.js 15 App Router (React 19)</strong>: SSR, Supabase PKCE authentication, TanStack Query, SSE stream consumer, and server-side PDF generation via Playwright Core Chromium.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>FastAPI Backend (Python 3.11)</strong>: REST and Server-Sent Events (SSE) endpoints under <code>/api/v1</code>, Pydantic v2 schemas, request correlation tracing (<code>X-Correlation-Id</code>), and workspace isolation dependencies.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Dedicated Profiling Worker</strong>: Asynchronously claims durable jobs using PostgreSQL <code>SELECT ... FOR UPDATE SKIP LOCKED</code>, maintains 300s heartbeat lease renewal, and resumes LangGraph checkpoints after HITL review.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Storage &amp; Compute</strong>: PostgreSQL 16 for metadata, tenant state, audit logs, and LangGraph checkpoints; Supabase Storage for canonical immutable artifacts; DuckDB for file-backed in-process analytics.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>FastMCP Stdio Server</strong>: Exposes bounded profiling and charting tools to local AI assistants (Claude) via Model Context Protocol without public network exposure.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Azure CI/CD Deployment</strong>: GitHub Actions pipeline enforcing Ruff lint, pytest, Playwright E2E, Vitest, Docker image builds with immutable commit SHA tags, Alembic migrations, and rolling deploys across 3 Azure App Services.</span></li>
                                            </ul>
                                            <div className="flow-diagram">
                                                <div className="flow-step"><i className="fas fa-globe"></i><span>Next.js 15</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-bolt"></i><span>FastAPI</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-cog"></i><span>Worker</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-database"></i><span>DuckDB &amp; PG</span></div>
                                            </div>
                                        </div>

                                        {/* Agent & Charts */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-agent' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>AI Agent, Charts &amp; Forecast Models</h4>
                                                <span className="tab-badge vda-badge">LangGraph + Fail-Closed</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Multi-Node LangGraph QA Graph</strong>: Orchestrates input guardrails → query router (refusal, clarification, quantitative, qualitative) → structured bounded tools → scoped hybrid retrieval → output guardrails.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Fail-Closed Evidence Validator (<code>qa_validation.py</code>)</strong>: Verifies workspace binding, artifact SHA-256, tool success, and guarantees that every single numeric figure in the answer is grounded in verified evidence. If evidence is lacking, the agent abstains rather than inventing data.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Safe Chart Planner</strong>: Translates natural language questions into strongly-typed <code>QuerySpec</code> schemas (allow-listed columns, aggregation, time grain). Features a deterministic fast path for standard queries and structured LLM planning for multi-step reasoning.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>15 Native Chart Renderers</strong>: Aggregate bar/line, histogram, scatter plot, box plot, correlation matrix, heatmap, violin, donut, outlier distribution, and cardinality charts.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>28 Time-Series Forecast Adapters</strong>: Baseline, exponential smoothing, ARIMA, SARIMAX, Prophet-like decomposable models, and machine learning regressors. Adapters gracefully hide when prerequisites or data contracts are missing.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Scoped Hybrid Retrieval</strong>: Sparse (BM25) + dense vector search on workspace-bound <code>retrieval_documents</code> with automatic sparse fallback when embedding APIs are unreachable.</span></li>
                                            </ul>
                                        </div>

                                        {/* Reports */}
                                        <div className={`tab-panel ${activeVdaTab === 'tab-vda-reports' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Immutable Reports &amp; Dataset Drift</h4>
                                                <span className="tab-badge vda-badge">Cryptographic Snapshots &amp; PDF</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Report Drafts &amp; Official Evidence</strong>: Report drafts are bound to a single Profile Run; only promoted Official executions with verified result hashes can be pinned into reports.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Cryptographic Snapshot Freezing</strong>: Report Snapshots freeze the entire structure, metrics, and charts with SHA-256 content hashing. Subsequent edits create a new draft version, ensuring an untampered audit trail.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Server-Side Chromium PDF Export</strong>: Rendered securely by a Next.js server route using headless Chromium (Playwright Core) after FastAPI authorizes the export request.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Dataset Drift Comparison</strong>: <code>POST /api/v1/profile/{'{runId}'}/drift</code> compares two completed Profile Runs to identify schema drift, null-rate inflation, and numerical distribution shifts over time.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Multi-Source Ingestion</strong>: Native ingestion from CSV, TSV, Parquet, JSON files, Google Drive OAuth, and direct connections to MySQL, MongoDB, and DuckDB with Fernet-encrypted credentials.</span></li>
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
                                        { label: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript (Strict)', 'TanStack Query', 'Tailwind CSS', 'Zod'] },
                                        { label: 'Backend & API', items: ['FastAPI', 'Python 3.11', 'Pydantic v2', 'SQLAlchemy', 'Alembic', 'Server-Sent Events'] },
                                        { label: 'AI & Agent', items: ['LangGraph', 'OpenAI / Gemini', 'FastMCP (stdio)', 'Fail-Closed QA Validator', 'LangSmith'] },
                                        { label: 'Compute Engine', items: ['DuckDB', 'pandas', 'NumPy', 'SciPy', 'statsmodels', 'scikit-learn (28 Models)'] },
                                        { label: 'Storage & Cloud', items: ['PostgreSQL 16', 'Supabase Auth & Storage', 'Azure App Service', 'Docker', 'GitHub Actions', 'Playwright Core'] },
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
                                <span className="experience-role">Collaborator - Annotator, Remote, Jun 2026 - Aug 2026</span>
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
                                { img: '/figures/Applications of Algorithm.jpg', icon: 'fas fa-calculator', date: 'Aug. 2025', title: 'Application of Algorithm', issuer: 'SAMSUNG x PTIT' },
                                { img: '/figures/AI_ML_Fundamentals.png', icon: 'fas fa-brain', date: 'Apr. 2025', title: 'AI/ML Fundamentals', issuer: 'PTIT x LA TROBE UNIVERSITY' },
                                { img: '/figures/math.jpg', icon: 'fas fa-calculator', date: 'Apr. 2025', title: 'Participant in National Student Mathematical Olympiad', issuer: 'Vietnam Mathematical Society' },
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
                                {
                                    icon: 'fas fa-code',
                                    title: 'Languages & Core Libraries',
                                    items: [
                                        { icon: 'fab fa-python', name: 'Python' },
                                        { icon: 'fas fa-copyright', name: 'C / C++' },
                                        { icon: 'fab fa-js', name: 'TypeScript / JavaScript' },
                                        { icon: 'fas fa-fire', name: 'PyTorch' },
                                        { icon: 'fas fa-chart-line', name: 'Scikit-learn' },
                                        { icon: 'fas fa-table', name: 'Pandas / NumPy' }
                                    ]
                                },
                                {
                                    icon: 'fas fa-brain',
                                    title: 'AI, Agents & GenAI',
                                    items: [
                                        { icon: 'fas fa-robot', name: 'AI Agents (LangGraph, FastMCP)' },
                                        { icon: 'fas fa-database', name: 'Advanced RAG (FAISS, BM25, Hybrid)' },
                                        { icon: 'fas fa-sliders', name: 'Fine-tuning (LoRA / QLoRA)' },
                                        { icon: 'fas fa-eye', name: 'Computer Vision (OpenCV, YOLO, rPPG)' },
                                        { icon: 'fas fa-microchip', name: 'ONNX Runtime & Inference' }
                                    ]
                                },
                                {
                                    icon: 'fas fa-server',
                                    title: 'Backend, Database',
                                    items: [
                                        { icon: 'fas fa-bolt', name: 'FastAPI' },
                                        { icon: 'fab fa-react', name: 'Next.js / React' },
                                        { icon: 'fas fa-database', name: 'PostgreSQL & Supabase' },
                                        { icon: 'fas fa-network-wired', name: 'WebSocket & Redis / Celery' },
                                        { icon: 'fab fa-docker', name: 'Docker & Azure Cloud' },
                                        { icon: 'fab fa-vercel', name: 'Vercel' }
                                    ]
                                },
                                {
                                    icon: 'fas fa-wrench',
                                    title: 'Tools, Platforms & AI Assistants',
                                    items: [
                                        { icon: 'fab fa-git-alt', name: 'Git / GitHub' },
                                        { icon: 'fas fa-flask', name: 'Google Colab / Kaggle' },
                                        { icon: 'fas fa-face-smile', name: 'Hugging Face' },
                                        { icon: 'fas fa-chart-pie', name: 'LangSmith & Observability' },
                                        { icon: 'fas fa-wand-magic-sparkles', name: 'AI Tools (Claude Code, Codex, Gemini)' }
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
