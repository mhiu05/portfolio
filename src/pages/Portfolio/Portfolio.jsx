import { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('tab-rppg');
    const [activeSection, setActiveSection] = useState('about');

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

    // Track active section for sidebar
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

    return (
        <div className="portfolio-page">
            {/* Sidebar Navigation */}
            <nav className="portfolio-sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-title">
                        <i className="fas fa-compass"></i> Mục lục
                    </div>
                    <ul className="sidebar-menu">
                        <li>
                            <a
                                href="#about"
                                className={`sidebar-link ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-user"></i>
                                <span>Giới thiệu</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#education"
                                className={`sidebar-link ${activeSection === 'education' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-graduation-cap"></i>
                                <span>Giáo dục</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className={`sidebar-link ${activeSection === 'projects' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-rocket"></i>
                                <span>Dự án</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className={`sidebar-link ${activeSection === 'experience' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-briefcase"></i>
                                <span>Kinh nghiệm</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={`sidebar-link ${activeSection === 'skills' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-tools"></i>
                                <span>Kỹ năng</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#certificates"
                                className={`sidebar-link ${activeSection === 'certificates' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-award"></i>
                                <span>Chứng chỉ</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`sidebar-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="fas fa-envelope"></i>
                                <span>Liên hệ</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="portfolio-content">
                {/* About Section */}
                <section className="section" id="about">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-user"></i> Giới thiệu</span>
                            <h2 className="section-title">Về <span className="gradient-text">tôi</span></h2>
                        </div>
                        <div className="about-grid">
                            <div className="about-text">
                                <p>
                                    Hiện tại mình đang là sinh viên ngành <strong>Khoa học Máy tính</strong> khóa D23 (2023) tại Học viện Công nghệ Bưu chính Viễn thông (PTIT) Cơ sở Hà Nội. Mình là một người yêu thích việc học hỏi những điều mới, bất kể là thứ gì miễn là mình cảm thấy thú vị.
                                </p>

                                <p>
                                    <strong>Về tính cách</strong>, mình có khả năng <strong>thích nghi tốt</strong> với mọi môi trường, làm việc <strong>có trách nhiệm</strong> và luôn cố gắng hoàn thành tốt nhiệm vụ được giao. Dù là một người khá hướng nội, thích dành thời gian cho bản thân và những người thân thiết, mình vẫn rất trân trọng và cố gắng duy trì các mối quan hệ xã hội. Mình tin rằng sự kết hợp giữa khả năng thích nghi, tinh thần trách nhiệm và sự hướng nội đã giúp mình phát triển toàn diện cả về cá nhân lẫn chuyên môn.
                                </p>

                                <p>
                                    <strong>Đam mê chính</strong> của mình là <strong>Trí tuệ Nhân tạo (AI)</strong>. Mình không chỉ hứng thú với việc ứng dụng AI để <strong>giải quyết</strong> các <strong>vấn đề thực tế</strong>, mà còn <strong>say mê nghiên cứu</strong> sâu về nó qua từng bài toán (vì hiểu một cách gần gũi hơn, AI chính là toán học).
                                </p>

                                <div className="about-info-cards">
                                    <div className="info-card">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <span className="info-label">Địa điểm</span>
                                            <span className="info-value">Hà Nội, Việt Nam</span>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <i className="fas fa-graduation-cap"></i>
                                        <div>
                                            <span className="info-label">Trường đại học</span>
                                            <span className="info-value">PTIT (2023 - 2027)</span>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <i className="fas fa-brain"></i>
                                        <div>
                                            <span className="info-label">Focus</span>
                                            <span className="info-value">AI Research/Engineer</span>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <i className="fas fa-language"></i>
                                        <div>
                                            <span className="info-label">English</span>
                                            <span className="info-value">TOEIC 720</span>
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
                            <span className="section-tag"><i className="fas fa-graduation-cap"></i> Lịch sử học tập</span>
                            <h2 className="section-title">Giáo dục</h2>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker"><i className="fas fa-university"></i></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>Posts and Telecommunications Institute of Technology</h3>
                                        <span className="timeline-date"><i className="far fa-calendar-alt"></i> 2023 — 2027</span>
                                    </div>
                                    <p className="timeline-degree">Kỹ sư Khoa học Máy tính</p>
                                    <p className="timeline-location"><i className="fas fa-map-marker-alt"></i> Hà Đông, Hà Nội</p>
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
                                        <h4 className="achievements-title"><i className="fas fa-trophy"></i> Học bổng & Thành tích</h4>
                                        <ul className="achievements-list">
                                            <li><i className="fas fa-award"></i> Học bổng đầu vào PTIT</li>
                                            <li><i className="fas fa-award"></i> Học bổng Khuyến khích học tập (Kỳ 4)</li>
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
                            <span className="section-tag"><i className="fas fa-rocket"></i> Những gì tôi đã xây dựng</span>
                            <h2 className="section-title">Dự án <span className="gradient-text">nổi bật</span></h2>
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
                                    Một nền tảng đo lường các chỉ số sức khỏe như: Nhịp tim (HR), biến thiên nhịp tim (HRV) và tín hiệu BVP,
                                    cung cấp thông tin quan trọng về trạng thái hoạt động của hệ thần kinh tự chủ, khả năng phục hồi sau căng thẳng,
                                    và nguy cơ mắc bệnh tim mạch từ các video khuôn mặt. Có phân tích webcam thời gian thực qua WebSocket, xử lý video ngoại tuyến
                                    với hàng đợi công việc bất đồng bộ, và một chatbot y tế AI sử dụng advanced RAG.
                                </p>
                                <div className="project-demo-image">
                                    <img src="/figures/portfolio_project_demo.png" alt="Non-Invasive Health Analysis System — Live measurement interface" loading="lazy" />
                                    <div className="demo-caption">
                                        <i className="fas fa-camera"></i> Giao diện phân tích trực tiếp — HR, Tốc độ chớp mắt, SNR & dạng sóng BVP thời gian thực
                                    </div>
                                </div>
                            </div>

                            {/* Architecture Diagram */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-sitemap"></i> Architecture</h3>
                                <p className="project-card-desc">Thiết kế với 4 lớp chính: Computer Vision (rPPG), Signal Processing, Chatbot RAG, và Web Fullstack — kết nối thông qua WebSocket, REST API, và một hàng đợi làm việc đã phân tác Celery + Redis.</p>
                                <div className="project-architecture-image">
                                    <img src="/figures/portfolio_project_architecture.png" alt="Sơ đồ kiến trúc Hệ thống Phân tích Sức khỏe Không tiếp xúc" loading="lazy" />
                                </div>
                            </div>

                            {/* Feature Tabs */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-layer-group"></i> Chi tiết hơn về dự án</h3>
                                <div className="feature-tabs">
                                    <div className="tab-buttons">
                                        {[
                                            { id: 'tab-rppg', icon: 'fas fa-wave-square', label: 'rPPG' },
                                            { id: 'tab-realtime', icon: 'fas fa-broadcast-tower', label: 'real time' },
                                            { id: 'tab-async', icon: 'fas fa-cogs', label: 'Công việc không đồng bộ' },
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
                                                <h4>Công cụ rPPG & Xử lý Tín hiệu</h4>
                                                <span className="tab-badge">Thị giác Máy tính</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span>Triển khai <strong>FactorizePhys</strong> (3D-CNN + FSAM dựa trên NMF) qua <strong>ONNX Runtime</strong> — suy luận nhẹ không cần phụ thuộc PyTorch.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>MediaPipe Face Mesh</strong> để phát hiện khuôn mặt thời gian thực, mở rộng hộp giới hạn và thay đổi kích thước cắt.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Đường ống xử lý từng khúc: <strong>SessionState</strong> duy trì bộ đệm lăn 180 khung hình cho mỗi phiên.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Xử lý tín hiệu: <strong>detrend → Butterworth bandpass → phát hiện đỉnh FFT</strong> để tính nhịp tim.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Trích xuất các chỉ số HRV: <strong>RMSSD, SDNN, PNN50</strong>, cộng với đánh giá chất lượng SNR.</span></li>
                                            </ul>
                                            <div className="tab-metrics">
                                                <div className="metric-item"><span className="metric-value">0.04</span><span className="metric-label">MAE (bpm) — Ngồi yên</span></div>
                                                <div className="metric-item"><span className="metric-value">0.83</span><span className="metric-label">MAE (bpm) — Chợng đầu</span></div>
                                                <div className="metric-item"><span className="metric-value">1.67</span><span className="metric-label">MAE (bpm) — Nói chuyện</span></div>
                                                <div className="metric-item"><span className="metric-value">&lt;2</span><span className="metric-label">sai số bpm — Tất cả điều kiện</span></div>
                                            </div>
                                        </div>

                                        {/* Real-time */}
                                        <div className={`tab-panel ${activeTab === 'tab-realtime' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Truyền Streaming WebSocket Thời gian Thực</h4>
                                                <span className="tab-badge">Phân tích Trực tiếp</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><strong>Điểm cuối WebSocket</strong> (<code>ws://host/ws/stream</code>) chấp nhận các khung hình webcam trực tiếp.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Mỗi kết nối duy trì một <strong>SessionState</strong> bị cô lập — hỗ trợ các phiên đa người dùng đồng thời.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Tự động lưu các bản ghi đo lường vào <strong>PostgreSQL</strong> khi phiên vượt quá 5 giây.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Các lệnh gọi Frontend (<code>useWebSocket.js</code> + <code>useWebcam.js</code>) xử lý quay phim và kết nối lại.</span></li>
                                            </ul>
                                        </div>

                                        {/* Async */}
                                        <div className={`tab-panel ${activeTab === 'tab-async' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Đường Ống Xử lý Video Bất Đồng Bộ</h4>
                                                <span className="tab-badge">Công việc Nền</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span><code>POST /video/upload-async</code> → lưu trong <strong>S3</strong> → tạo công việc → gửi đến <strong>Celery + Redis</strong>.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Celery Worker</strong> tải xuống → phát hiện khuôn mặt → suy luận rPPG → lưu kết quả.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Kiến trúc 4 dịch vụ được Dockerized được điều phối qua Docker Compose.</span></li>
                                            </ul>
                                            <div className="flow-diagram">
                                                <div className="flow-step"><i className="fas fa-upload"></i><span>Tải lên</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-cloud"></i><span>S3</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-tasks"></i><span>Celery</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-brain"></i><span>rPPG</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-database"></i><span>CSDL</span></div>
                                            </div>
                                        </div>

                                        {/* RAG */}
                                        <div className={`tab-panel ${activeTab === 'tab-rag' ? 'active' : ''}`}>
                                            <div className="tab-panel-header">
                                                <h4>Chatbot Y tế — Advanced RAG</h4>
                                                <span className="tab-badge">NLP / LLM</span>
                                            </div>
                                            <ul className="detail-list">
                                                <li><i className="fas fa-check-circle"></i><span>Advanced RAG: <strong>Viết lại Truy vấn</strong> → <strong>Tìm kiếm Lai</strong> (FAISS + BM25) → <strong>Re-ranking bằng Cross-Encoder</strong> → <strong>Google Gemini</strong>.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Nhập cơ sở kiến thức từ <code>Medical_book.pdf</code> — hỗ trợ PDF, Markdown, văn bản thô.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Chuỗi RAG được tải lười — khởi động lạnh nhanh và hiệu quả bộ nhớ.</span></li>
                                            </ul>
                                            <div className="flow-diagram">
                                                <div className="flow-step"><i className="fas fa-question-circle"></i><span>Truy vấn</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-pen"></i><span>Viết lại</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-search"></i><span>Tìm kiếm</span></div>
                                                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                                                <div className="flow-step"><i className="fas fa-sort-amount-down"></i><span>Xếp hạng lại</span></div>
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
                                                <li><i className="fas fa-check-circle"></i><span><strong>3 trang chính</strong>: Trang chủ, Trực tiếp (webcam + dấu sống), Tải lên (video bất đồng bộ + lịch sử).</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Trang Live: luồng webcam với <strong>lớp phủ hộp giới hạn khuôn mặt</strong>, Thẻ Dấu sống thời gian thực.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Widget chatbot AI</strong> nổi có thể truy cập từ mọi trang.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span>Quản lý trạng thái qua <strong>Zustand</strong>, CSS Modules cho kiểu định dạng có phạm vi.</span></li>
                                                <li><i className="fas fa-check-circle"></i><span><strong>Xác thực Supabase</strong> — người dùng đăng nhập/đăng ký để duy trì lịch sử đo lường sức khỏe.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Benchmark */}
                            <div className="project-card">
                                <h3 className="project-card-subtitle"><i className="fas fa-chart-bar"></i> Kết quả Benchmark</h3>
                                <p className="project-card-desc">Đánh giá trên 10 subjects dùng dưới 3 điều kiện thực tế. Hệ thống đạt độ chính xác cao (sai số &lt; 2 bpm) thậm chí trong cả các điều kiện motion hay talk.</p>
                                <div className="benchmark-image">
                                    <img src="/figures/portfolio_benchmark_normal.png" alt="Kết quả Benchmark — Tình trạng ngồi bình thường" loading="lazy" />
                                    <div className="demo-caption"><i className="fas fa-flask"></i> Benchmark đo lường HR — Bình thường (ngồi yên), mô hình: FactorizePhys</div>
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
                            <span className="section-tag"><i className="fas fa-briefcase"></i> Lịch sử làm việc</span>
                            <h2 className="section-title">Kinh nghiệm & <span className="gradient-text">Làm việc</span></h2>
                        </div>
                        <div className="experience-card">
                            <div className="experience-icon-wrapper"><i className="fas fa-microchip"></i></div>
                            <div className="experience-content">
                                <h3>Câu lạc bộ Tài năng trẻ AI PTIT</h3>
                                <span className="experience-role">Thành viên — Phòng ban Nghiên cứu AI</span>
                                <ul className="experience-list">
                                    <li><i className="fas fa-chevron-right"></i><span>Tiến hành nghiên cứu ở cấp độ đại học về các công nghệ giám sát sức khỏe không tiếp xúc (rPPG).</span></li>
                                    <li><i className="fas fa-chevron-right"></i><span>Nghiên cứu và đánh giá các phương pháp huấn luyện LLM bao gồm quy trình RLHF (PPO, DPO) và tinh chỉnh hiệu quả với họ mô hình Qwen.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="section" id="skills">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-tools"></i> Công nghệ</span>
                            <h2 className="section-title">Kỹ năng & <span className="gradient-text">Công nghệ</span></h2>
                        </div>
                        <div className="skills-grid">
                            {[
                                { icon: 'fas fa-code', title: 'Ngôn ngữ lập trình', items: [{ icon: 'fab fa-python', name: 'Python' }, { icon: 'fas fa-copyright', name: 'C / C++' }] },
                                { icon: 'fas fa-brain', title: 'AI / ML', items: [{ icon: 'fas fa-fire', name: 'PyTorch' }, { icon: 'fas fa-robot', name: 'Transformers' }, { icon: 'fas fa-link', name: 'LangChain' }, { icon: 'fas fa-search', name: 'RAG' }, { icon: 'fas fa-eye', name: 'OpenCV' }, { icon: 'fas fa-chart-line', name: 'Scikit-learn' }] },
                                { icon: 'fas fa-server', title: 'Backend & Cơ sở hạ tầng', items: [{ icon: 'fas fa-bolt', name: 'FastAPI' }, { icon: 'fas fa-database', name: 'PostgreSQL' }, { icon: 'fab fa-docker', name: 'Docker' }] },
                                { icon: 'fas fa-wrench', title: 'Công cụ', items: [{ icon: 'fab fa-git-alt', name: 'Git' }, { icon: 'fab fa-google', name: 'Google Colab' }, { icon: 'fab fa-kaggle', name: 'Kaggle' }, { icon: 'fas fa-smile', name: 'Hugging Face' }] },
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

                {/* Certificates Section */}
                <section className="section section-alt" id="certificates">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-award"></i> Thành tựu</span>
                            <h2 className="section-title">Chứng chỉ & <span className="gradient-text">Giải thưởng</span></h2>
                        </div>
                        <div className="certificates-grid">
                            {[
                                { img: '/figures/portfolio_toeic.jpg', icon: 'fas fa-language', date: 'Apr. 2026', title: 'TOEIC Listening & Reading: 720', issuer: 'ETS' },
                                { img: '/figures/portfolio_DeepLearning-NVIDIA.jpg', icon: 'fas fa-microchip', date: 'Aug. 2025', title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA' },
                                { img: '/figures/portfolio_AI_ML_Fundamentals.png', icon: 'fas fa-brain', date: 'Sep. 2025', title: 'AI/ML Fundamentals', issuer: 'PTIT AI Club' },
                                { img: '/figures/portfolio_math.jpg', icon: 'fas fa-calculator', date: 'Jun. 2025', title: 'Mathematics for Machine Learning', issuer: 'Self-study' },
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

                {/* Contact Section */}
                <section className="section" id="contact">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag"><i className="fas fa-paper-plane"></i> Hãy kết nối</span>
                            <h2 className="section-title">Liên hệ với <span className="gradient-text">tôi</span></h2>
                            <p className="section-description">
                                Tôi luôn sẵn lòng chào đón những cơ hội mới, cộng tác, và các cuộc trò chuyện thú vị. Vui lòng liên hệ với tôi!
                            </p>
                        </div>
                        <div className="contact-grid">
                            <a href="mailto:minhhieuhh2k5@gmail.com" className="contact-card" id="contact-email">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <h3>Email</h3>
                                <p>minhhieuhh2k5@gmail.com</p>
                            </a>
                            <a href="tel:+84375049906" className="contact-card" id="contact-phone">
                                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                                <h3>Điện thoại</h3>
                                <p>0375 049 906</p>
                            </a>
                            <a href="https://github.com/mhiu05" target="_blank" rel="noopener noreferrer" className="contact-card" id="contact-github">
                                <div className="contact-icon"><i className="fab fa-github"></i></div>
                                <h3>GitHub</h3>
                                <p>github.com/mhiu05</p>
                            </a>
                            <div className="contact-card" id="contact-location">
                                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <h3>Địa điểm</h3>
                                <p>Hà Nội, Việt Nam</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
