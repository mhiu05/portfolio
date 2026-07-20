import { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('tab-rppg');

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
                                        <span className="timeline-date"><i className="far fa-calendar-alt"></i> 2023 — 2027</span>
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
                        <div className="project-showcase">
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
                                    providing vital information about the autonomic nervous system's state, stress resilience,
                                    and cardiovascular disease risk from facial videos. Features real-time webcam analysis via WebSocket, offline video processing
                                    with asynchronous task queues, and an AI medical chatbot using advanced RAG.
                                </p>
                                <div className="project-demo-image">
                                    <img src="/figures/project_demo.png" alt="Non-Invasive Health Analysis System — Live measurement interface" loading="lazy" />
                                    <div className="demo-caption">
                                        <i className="fas fa-camera"></i> Live analysis interface — HR, Blink Rate, SNR & real-time BVP waveform
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
                                                <h4>Computer Vision & Signal Processing</h4>
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
                                                <li><i className="fas fa-check-circle"></i><span><strong>3 trang chính</strong>: Trang chủ, Trực tiếp (webcam + dấu sống), Upload (video bất đồng bộ + lịch sử).</span></li>
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
                                    <div className="demo-caption"><i className="fas fa-flask"></i> HR Measurement Benchmark — Normal (resting), mô hình: FactorizePhys</div>
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
                                    <li><i className="fas fa-chevron-right"></i><span>3 weeks of intensive study on AI skills and problem solving</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>9 weeks of hands-on AI project execution with mentors and enterprise partners (VSF)</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-cube"></i></div>
                            <div className="experience-content">
                                <h3>Phenikaa-X Joint Stock Company</h3>
                                <span className="experience-role">Collaborator - Annotator, Remote, Jun 2026 - Present</span>
                                <ul className="experience-list">
                                    <li><i className="fas fa-chevron-right"></i><span>Utilized OpenVPN and Xpra for remote work with 3D point cloud data from LiDAR sensors</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>Annotated and refined object point clouds to ensure training data quality</span></li>
                                </ul>
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
                                        { icon: 'fas fa-leaf', name: 'MongoDB' },
                                        { icon: 'fab fa-docker', name: 'Docker' },
                                        { icon: 'fab fa-vercel', name: 'Vercel' }
                                    ]
                                },
                                {
                                    icon: 'fas fa-wrench', title: 'Tools & AI Tools', items: [
                                        { icon: 'fab fa-git-alt', name: 'Git/GitHub' },
                                        { icon: 'fas fa-flask', name: 'Google Colab' },
                                        { icon: 'fab fa-kaggle', name: 'Kaggle' },
                                        { icon: 'fas fa-face-smile', name: 'Hugging Face' },
                                        { icon: 'fas fa-wand-magic-sparkles', name: 'Claude Code, Gemini, Cursor, Codex, Github Copilot' }
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
