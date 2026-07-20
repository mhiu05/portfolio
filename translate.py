import re

file_path = r'd:\New folder\portfolio\src\pages\Portfolio\Portfolio.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# About Section
content = content.replace('<span className="section-tag"><i className="fas fa-user"></i> Giới thiệu</span>', '<span className="section-tag"><i className="fas fa-user"></i> About</span>')
content = content.replace('Hiện tại mình đang là sinh viên ngành <strong>Khoa học Máy tính</strong> khóa D23 (2023) tại Học viện Công nghệ Bưu chính Viễn thông (PTIT) Cơ sở Hà Nội. Mình là một người yêu thích việc học hỏi những điều mới, bất kể là thứ gì miễn là mình cảm thấy thú vị.',
    'I am currently a student majoring in <strong>Computer Science</strong> (D23 - 2023 cohort) at Posts and Telecommunications Institute of Technology (PTIT) in Hanoi. I am a person who loves learning new things, regardless of what it is, as long as I find it interesting.')
content = content.replace('<strong>Về tính cách</strong>, mình có khả năng <strong>thích nghi tốt</strong> với mọi môi trường, làm việc <strong>có trách nhiệm</strong> và luôn cố gắng hoàn thành tốt nhiệm vụ được giao. Dù là một người khá hướng nội, thích dành thời gian cho bản thân và những người thân thiết, mình vẫn rất trân trọng và cố gắng duy trì các mối quan hệ xã hội. Mình tin rằng sự kết hợp giữa khả năng thích nghi, tinh thần trách nhiệm và sự hướng nội đã giúp mình phát triển toàn diện cả về cá nhân lẫn chuyên môn.',
    '<strong>Regarding my personality</strong>, I am highly <strong>adaptable</strong> to any environment, work <strong>responsibly</strong>, and always strive to complete assigned tasks well. Although I am quite introverted, preferring to spend time with myself and close ones, I deeply value and try to maintain my social relationships. I believe that the combination of adaptability, a sense of responsibility, and introversion has helped me develop comprehensively both personally and professionally.')
content = content.replace('<strong>Đam mê chính</strong> của mình là <strong>Trí tuệ Nhân tạo (AI)</strong>. Mình không chỉ hứng thú với việc ứng dụng AI để <strong>giải quyết</strong> các <strong>vấn đề thực tế</strong>, mà còn <strong>say mê nghiên cứu</strong> sâu về nó qua từng bài toán (vì hiểu một cách gần gũi hơn, AI chính là toán học).',
    '<strong>My main passion</strong> is <strong>Artificial Intelligence (AI)</strong>. I am not only interested in applying AI to <strong>solve real-world problems</strong> but also <strong>passionate about researching</strong> it deeply through various problems (since, fundamentally, AI is mathematics).')
content = content.replace('<span className="info-label">Điện thoại</span>', '<span className="info-label">Phone</span>')
content = content.replace('<span className="info-label">Địa điểm</span>', '<span className="info-label">Location</span>')
content = content.replace('<span className="info-value">Hà Nội, Việt Nam</span>', '<span className="info-value">Hanoi, Vietnam</span>')

# Education Section
content = content.replace('<span className="section-tag"><i className="fas fa-graduation-cap"></i> Giáo dục</span>', '<span className="section-tag"><i className="fas fa-graduation-cap"></i> Education</span>')
content = content.replace('Kỹ sư Khoa học Máy tính', 'Bachelor of Engineering in Computer Science')
content = content.replace('Hà Đông, Hà Nội', 'Ha Dong, Hanoi')
content = content.replace('Additional Infomation', 'Additional Information')
content = content.replace('Học bổng đầu vào PTIT', 'PTIT Entrance Scholarship')
content = content.replace('Học bổng Khuyến khích học tập (Kỳ 4)', 'Academic Excellence Scholarship (Semester 4)')

# Projects Section (remaining Vietnamese)
content = content.replace('<h4>Truyền Streaming WebSocket Thời gian Thực</h4>', '<h4>Real-time WebSocket Streaming</h4>')
content = content.replace('<span className="tab-badge">Phân tích Trực tiếp</span>', '<span className="tab-badge">Live Analysis</span>')
content = content.replace('<strong>Điểm cuối WebSocket</strong>', '<strong>WebSocket endpoint</strong>')
content = content.replace('chấp nhận các khung hình webcam trực tiếp.', 'accepts live webcam frames.')
content = content.replace('Mỗi kết nối duy trì một <strong>SessionState</strong> bị cô lập — hỗ trợ các phiên đa người dùng đồng thời.', 'Each connection maintains an isolated <strong>SessionState</strong> — supporting concurrent multi-user sessions.')
content = content.replace('Tự động lưu các bản ghi đo lường vào <strong>PostgreSQL</strong> khi phiên vượt quá 5 giây.', 'Automatically saves measurement records to <strong>PostgreSQL</strong> when the session exceeds 5 seconds.')
content = content.replace('Các lệnh gọi Frontend', 'Frontend hooks')
content = content.replace('xử lý quay phim và kết nối lại.', 'handle video capture and reconnection.')

content = content.replace('<h4>Đường Ống Xử lý Video Bất Đồng Bộ</h4>', '<h4>Asynchronous Video Processing Pipeline</h4>')
content = content.replace('<span className="tab-badge">Công việc Nền</span>', '<span className="tab-badge">Background Jobs</span>')
content = content.replace('lưu trong <strong>S3</strong>', 'save to <strong>S3</strong>')
content = content.replace('tạo công việc', 'create job')
content = content.replace('gửi đến <strong>Celery + Redis</strong>.', 'dispatch to <strong>Celery + Redis</strong>.')
content = content.replace('<strong>Celery Worker</strong> tải xuống', '<strong>Celery Worker</strong> downloads')
content = content.replace('phát hiện khuôn mặt', 'detects face')
content = content.replace('suy luận rPPG', 'rPPG inference')
content = content.replace('lưu kết quả.', 'saves results.')
content = content.replace('Kiến trúc 4 dịch vụ được Dockerized được điều phối qua Docker Compose.', 'Dockerized 4-service architecture orchestrated via Docker Compose.')
content = content.replace('Tải lên', 'Upload')
content = content.replace('CSDL', 'Database')

content = content.replace('<h4>Chatbot Y tế — Advanced RAG</h4>', '<h4>Medical Chatbot — Advanced RAG</h4>')
content = content.replace('<strong>Viết lại Truy vấn</strong>', '<strong>Query Rewriting</strong>')
content = content.replace('<strong>Tìm kiếm Lai</strong> (FAISS + BM25)', '<strong>Hybrid Search</strong> (FAISS + BM25)')
content = content.replace('<strong>Re-ranking bằng Cross-Encoder</strong>', '<strong>Cross-Encoder Re-ranking</strong>')
content = content.replace('Nhập cơ sở kiến thức từ', 'Knowledge base ingestion from')
content = content.replace('hỗ trợ PDF, Markdown, văn bản thô.', 'supports PDF, Markdown, and raw text.')
content = content.replace('Chuỗi RAG được tải lười — khởi động lạnh nhanh và hiệu quả bộ nhớ.', 'Lazy-loaded RAG chain — fast cold starts and memory efficient.')
content = content.replace('Truy vấn', 'Query')
content = content.replace('Viết lại', 'Rewrite')
content = content.replace('Tìm kiếm', 'Search')
content = content.replace('Xếp hạng lại', 'Re-rank')

content = content.replace('<strong>3 trang chính</strong>: Trang chủ, Trực tiếp (webcam + dấu sống), Tải lên (video bất đồng bộ + lịch sử).', '<strong>3 main pages</strong>: Home, Live (webcam + vitals), Upload (async video + history).')
content = content.replace('Trang Live: luồng webcam với <strong>lớp phủ hộp giới hạn khuôn mặt</strong>, Thẻ Dấu sống thời gian thực.', 'Live page: webcam stream with <strong>face bounding box overlay</strong>, real-time Vitals Cards.')
content = content.replace('<strong>Widget chatbot AI</strong> nổi có thể truy cập từ mọi trang.', '<strong>Floating AI chatbot widget</strong> accessible from any page.')
content = content.replace('Quản lý trạng thái qua <strong>Zustand</strong>, CSS Modules cho kiểu định dạng có phạm vi.', 'State management via <strong>Zustand</strong>, CSS Modules for scoped styling.')
content = content.replace('<strong>Xác thực Supabase</strong> — người dùng đăng nhập/đăng ký để duy trì lịch sử đo lường sức khỏe.', '<strong>Supabase Auth</strong> — user login/signup to persist health measurement history.')

content = content.replace('<h3 className="project-card-subtitle"><i className="fas fa-chart-bar"></i> Kết quả Benchmark</h3>', '<h3 className="project-card-subtitle"><i className="fas fa-chart-bar"></i> Benchmark Results</h3>')
content = content.replace('Đánh giá trên 10 subjects dùng dưới 3 điều kiện thực tế. Hệ thống đạt độ chính xác cao (sai số &lt; 2 bpm) thậm chí trong cả các điều kiện motion hay talk.', 'Evaluated on 10 subjects under 3 real-world conditions. The system achieves high accuracy (error &lt; 2 bpm) even under motion or talking conditions.')
content = content.replace('Kết quả Benchmark — Tình trạng ngồi bình thường', 'Benchmark Results — Normal (resting)')
content = content.replace('Benchmark đo lường HR — Bình thường (ngồi yên)', 'HR Measurement Benchmark — Normal (resting)')

# Experience Section
content = content.replace('<span className="section-tag"><i className="fas fa-briefcase"></i> Kinh nghiệm</span>', '<span className="section-tag"><i className="fas fa-briefcase"></i> Experience</span>')
content = content.replace('Học viên, onsite, Tháng 7/2026 - Hiện tại', 'Trainee, Onsite, Jul 2026 - Present')
content = content.replace('Thực chiến theo chuẩn khung năng lực SFIA', 'Practical training following the SFIA competency framework')
content = content.replace('3 tuần thực học về kỹ năng AI, giải quyết vấn đề', '3 weeks of intensive study on AI skills and problem solving')
content = content.replace('9 tuần thực chiến dự án AI với mentor và doanh nghiệp (VSF)', '9 weeks of hands-on AI project execution with mentors and enterprise partners (VSF)')
content = content.replace('Cộng tác viên - Annotator, Remote, Tháng 6/2026 - hiện tại', 'Collaborator - Annotator, Remote, Jun 2026 - Present')
content = content.replace('Sử dụng OpenVPN, Xpra để làm việc từ xa với dữ liệu point cloud 3D từ LiDAR sensor', 'Utilized OpenVPN and Xpra for remote work with 3D point cloud data from LiDAR sensors')
content = content.replace('Tinh chỉnh (annotate/refine) pointcloud của object nhằm đảm bảo chất lượng dữ liệu training', 'Annotated and refined object point clouds to ensure training data quality')

# Activities Section
content = content.replace('<span className="section-tag"><i className="fas fa-graduation-cap"></i> Hoạt động</span>', '<span className="section-tag"><i className="fas fa-graduation-cap"></i> Activities</span>')
content = content.replace('Thành viên ban AI Research câu lạc bộ PTIT AI Young Talent (PAYT)', 'Member of AI Research Department at PTIT AI Young Talent (PAYT) Club')
content = content.replace('Tham gia chung kết ICPC PTIT 2025', 'Participated in the ICPC PTIT 2025 Finals')
# Remove Vietnamese comments
content = re.sub(r'\{\/\* Đổi thành fa-graduation-cap hoặc fa-award để tăng tính học thuật/ngoại khóa \*\/\}\n\s*', '', content)
content = re.sub(r'\{\/\* Hoạt động 1: Ban AI Research \*\/\}\n\s*', '{/* Activity 1: AI Research Department */}\n                        ', content)
content = re.sub(r'\{\/\* Đổi thành fa-microscope \(nghiên cứu\) hoặc fa-brain \(trí tuệ nhân tạo\) \*\/\}\n\s*', '', content)
content = re.sub(r'\{\/\* Hoạt động 2: Chung kết ICPC \*\/\}\n\s*', '{/* Activity 2: ICPC Finals */}\n                        ', content)
content = re.sub(r'\{\/\* Đổi thành fa-code \(lập trình thi đấu\) hoặc fa-trophy \(giải thưởng/chung kết\) \*\/\}\n\s*', '', content)

# Certificates Section
content = content.replace('<span className="section-tag"><i className="fas fa-award"></i> Chứng chỉ</span>', '<span className="section-tag"><i className="fas fa-award"></i> Certificates</span>')
content = content.replace('Tham gia kỳ thi Olympic toán học Sinh viên', 'Participant in National Student Mathematical Olympiad')
content = content.replace('Hội Toán học Việt Nam', 'Vietnam Mathematical Society')
content = content.replace('Giải Ba HSG cấp tỉnh môn Hóa học', 'Third Prize in Provincial Chemistry Olympiad')
content = content.replace('Sở GD&ĐT Bắc Ninh', 'Bac Ninh Department of Education and Training')
content = content.replace('Giải Tư Khoa học Kỹ thuật cấp tỉnh', 'Fourth Prize in Provincial Science and Engineering Fair')

# Skills Section
content = content.replace('<span className="section-tag"><i className="fas fa-tools"></i> Kỹ năng</span>', '<span className="section-tag"><i className="fas fa-tools"></i> Skills</span>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Translations applied successfully.")
