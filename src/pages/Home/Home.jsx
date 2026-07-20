import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* =============================================
   PERSONAL INFO — Chỉnh sửa thông tin tại đây
   ============================================= */
const PERSONAL_INFO = {
    name: 'Nguyen Minh Hieu',
    greeting: "Hi, I'm",
    highlightName: 'Hieu',
    phone: '0375 049 906',
    email: 'minhhieuhh2k5@gmail.com',
    github: 'github.com/mhiu05',
    githubUrl: 'https://github.com/mhiu05',
    school: 'PTIT — Posts and Telecommunications Institute of Technology',
    birthday: '01/05/2005',
    description:
        'Computer Science student at PTIT passionate about building intelligent systems — from real-time health monitoring with rPPG to RAG-powered chatbots.',
    stats: [
        { value: '3.41', label: 'GPA / 4.0', isDecimal: true },
        { value: '720', label: 'TOEIC Score', isDecimal: false },
        { value: '1', label: 'Major Project', isDecimal: false },
    ],
};

const TYPEWRITER_PHRASES = [
    'AI / ML Engineer',
    'Computer Vision Enthusiast',
    'Full-Stack Developer',
    'rPPG Researcher',
    'Problem Solver',
];

export default function Home() {
    const [typeText, setTypeText] = useState('');
    const phraseIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);
    const timeoutRef = useRef(null);

    // Typewriter effect
    useEffect(() => {
        function type() {
            const currentPhrase = TYPEWRITER_PHRASES[phraseIndex.current];
            let speed = 80;

            if (isDeleting.current) {
                charIndex.current--;
                speed = 40;
            } else {
                charIndex.current++;
                speed = 80;
            }

            setTypeText(currentPhrase.substring(0, charIndex.current));

            if (!isDeleting.current && charIndex.current === currentPhrase.length) {
                speed = 2000;
                isDeleting.current = true;
            } else if (isDeleting.current && charIndex.current === 0) {
                isDeleting.current = false;
                phraseIndex.current = (phraseIndex.current + 1) % TYPEWRITER_PHRASES.length;
                speed = 500;
            }

            timeoutRef.current = setTimeout(type, speed);
        }

        type();
        return () => clearTimeout(timeoutRef.current);
    }, []);

    // Counter animation
    const statsRef = useRef(null);
    const [countersStarted, setCountersStarted] = useState(false);
    const [counters, setCounters] = useState(PERSONAL_INFO.stats.map(() => 0));

    useEffect(() => {
        if (!statsRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !countersStarted) {
                    setCountersStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, [countersStarted]);

    useEffect(() => {
        if (!countersStarted) return;
        const duration = 2000;
        const startTime = performance.now();

        function updateCounters(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounters(
                PERSONAL_INFO.stats.map((stat) => {
                    const target = parseFloat(stat.value);
                    const current = target * easeOutQuart;
                    return stat.isDecimal ? current.toFixed(2) : Math.round(current);
                })
            );

            if (progress < 1) {
                requestAnimationFrame(updateCounters);
            }
        }

        requestAnimationFrame(updateCounters);
    }, [countersStarted]);

    return (
        <div className="home-page">
            <section className="hero" id="hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </div>
                    <h1 className="hero-name">
                        <span className="hero-greeting">{PERSONAL_INFO.greeting}</span>
                        <span className="hero-title">
                            Nguyen Minh<br />
                            <span className="gradient-text">{PERSONAL_INFO.highlightName}</span>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <span>{typeText}</span>
                        <span className="typewriter-cursor">|</span>
                    </p>
                    <p className="hero-description">{PERSONAL_INFO.description}</p>

                    {/* Personal Info Cards */}
                    <div className="hero-info-grid">
                        <div className="hero-info-item">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <span className="info-label">Điện thoại</span>
                                <span className="info-value">{PERSONAL_INFO.phone}</span>
                            </div>
                        </div>
                        <div className="hero-info-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <span className="info-label">Email</span>
                                <span className="info-value">{PERSONAL_INFO.email}</span>
                            </div>
                        </div>
                        <div className="hero-info-item">
                            <i className="fab fa-github"></i>
                            <div>
                                <span className="info-label">GitHub</span>
                                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="info-value">{PERSONAL_INFO.github}</a>
                            </div>
                        </div>
                        <div className="hero-info-item">
                            <i className="fas fa-birthday-cake"></i>
                            <div>
                                <span className="info-label">Ngày sinh</span>
                                <span className="info-value">{PERSONAL_INFO.birthday}</span>
                            </div>
                        </div>
                        <div className="hero-info-item full-width">
                            <i className="fas fa-graduation-cap"></i>
                            <div>
                                <span className="info-label">Trường học</span>
                                <span className="info-value">{PERSONAL_INFO.school}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <Link to="/portfolio" className="btn btn-primary">
                            <span>View Portfolio</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link to="/blogs" className="btn btn-outline">
                            <span>Read Blogs</span>
                        </Link>
                    </div>
                    <div className="hero-stats" ref={statsRef}>
                        {PERSONAL_INFO.stats.map((stat, index) => (
                            <div key={stat.label} style={{ display: 'contents' }}>
                                {index > 0 && <div className="stat-divider"></div>}
                                <div className="stat">
                                    <span className="stat-number">{counters[index]}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-code-block">
                        <div className="code-header">
                            <span className="code-dot red"></span>
                            <span className="code-dot yellow"></span>
                            <span className="code-dot green"></span>
                            <span className="code-filename">about_me.py</span>
                        </div>
                        <pre className="code-content"><code dangerouslySetInnerHTML={{ __html: `<span class="code-keyword">class</span> <span class="code-class">Developer</span>:
    <span class="code-keyword">def</span> <span class="code-func">__init__</span>(<span class="code-param">self</span>):
        self.<span class="code-attr">name</span> = <span class="code-string">"Nguyen Minh Hieu"</span>
        self.<span class="code-attr">role</span> = <span class="code-string">"AI/ML Engineer"</span>
        self.<span class="code-attr">languages</span> = [<span class="code-string">"Python"</span>, <span class="code-string">"C/C++"</span>]
        self.<span class="code-attr">interests</span> = [
            <span class="code-string">"Computer Vision"</span>,
            <span class="code-string">"NLP &amp; RAG"</span>,
            <span class="code-string">"Health Tech"</span>
        ]

    <span class="code-keyword">def</span> <span class="code-func">say_hi</span>(<span class="code-param">self</span>):
        <span class="code-keyword">print</span>(<span class="code-string">"Welcome to my portfolio!"</span>)

<span class="code-comment"># Let's connect! 🚀</span>
me = <span class="code-class">Developer</span>()
me.<span class="code-func">say_hi</span>()` }} /></pre>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span>Scroll down</span>
                </div>
            </section>
        </div>
    );
}
