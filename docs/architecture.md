# Cấu trúc dự án (Architecture)

Tài liệu này tóm tắt chức năng của từng file và thư mục trong dự án Website Cá nhân, được xây dựng bằng **Vite + React** và cấu hình để deploy lên **Vercel**.

## 1. Thư mục gốc (Root Directory)

- `index.html`: File HTML gốc (Entry point của trình duyệt). Chứa các thẻ meta SEO, link import Google Fonts (Inter, JetBrains Mono) và Font Awesome.
- `package.json` & `package-lock.json`: Chứa danh sách các thư viện phụ thuộc (như `react-router-dom`) và các script để chạy/build dự án (`npm run dev`, `npm run build`).
- `vite.config.js`: File cấu hình của Vite cho quá trình bundle và development.
- `vercel.json`: Cấu hình deploy cho Vercel. Thiết lập rewrite rules để hỗ trợ mô hình SPA (Single Page Application) của React Router và định tuyến các request `/api/*` tới thư mục `api/`.
- `api/hello.js`: Hàm mẫu Vercel Serverless Function. Nơi đây có thể dùng để phát triển các API backend độc lập (ví dụ gửi email liên hệ) mà không cần server riêng biệt.

## 2. Thư mục `public/`

- `public/figures/`: Chứa toàn bộ các tài nguyên tĩnh (hình ảnh, chứng chỉ, sơ đồ kiến trúc...) được sử dụng trực tiếp trong mã nguồn thông qua đường dẫn tuyệt đối (VD: `/figures/portfolio_toeic.jpg`).

## 3. Thư mục `src/` (Mã nguồn chính)

Đây là nơi chứa toàn bộ mã nguồn React của frontend.

### 3.1. Các file cấu hình chung
- `main.jsx`: Điểm khởi chạy của ứng dụng React. Render component `App` vào thẻ `<div id="root">` trong `index.html`.
- `index.css`: File CSS toàn cục. Định nghĩa các biến CSS variables (màu sắc, gradient, typography), reset CSS cơ bản, các class tiện ích chung (như `.container`, `.btn`) và các keyframe animation (fade-in, scroll reveal).
- `App.jsx`: Component gốc chứa cấu hình React Router (`BrowserRouter`, `Routes`, `Route`). Nó định nghĩa layout chung bao gồm Navbar, Footer, hiệu ứng nền (Particles, Cursor) và hiển thị các trang tương ứng.
- `App.css`: Chứa CSS layout cơ bản cho App wrapper (đảm bảo Footer luôn nằm dưới cùng và content chiếm không gian còn lại).

### 3.2. `src/components/` (Các Component dùng chung)
- `Navbar/Navbar.jsx` & `.css`: Thanh điều hướng chính ở trên cùng. Có hiệu ứng glassmorphism khi cuộn trang, tự động highlight mục đang xem nhờ `NavLink` và menu dạng hamburger cho thiết bị di động.
- `Footer/Footer.jsx` & `.css`: Phần chân trang chứa copyright và các link mạng xã hội (GitHub, Email).
- `ParticleCanvas/ParticleCanvas.jsx` & `.css`: Hiệu ứng hạt bụi chuyển động trên nền (Background). Được vẽ trực tiếp trên HTML5 Canvas để tối ưu hiệu năng.
- `CursorGlow/CursorGlow.jsx` & `.css`: Hiệu ứng ánh sáng tím mờ chạy theo vị trí con trỏ chuột của người dùng, sử dụng `requestAnimationFrame` để đảm bảo độ mượt.

### 3.3. `src/pages/` (Các Trang chính)

#### Trang chủ (`Home/`)
- `Home.jsx`: Trang Landing Page. Chứa phần giới thiệu nhanh (Hero section), hiệu ứng gõ chữ (Typewriter), bộ đếm số thống kê (Animated counters) và giao diện cửa sổ code giả lập (Python code block). Thông tin cá nhân được khai báo ở đầu file dưới dạng hằng số `PERSONAL_INFO`.
- `Home.css`: Tùy chỉnh hiển thị cho các phần tử trên trang chủ (bố cục grid, style cho code block, các animation đặc thù).

#### Trang Blogs (`Blogs/`)
- `Blogs.jsx`: Giao diện đọc blog. Thiết kế chia làm 2 cột: Cột trái (Sidebar) chứa danh sách bài viết theo nhóm (tự động thu gọn trên mobile); Cột phải hiển thị mục lục (Table of Contents) và nội dung chi tiết bài viết.
- `Blogs.css`: Xử lý layout flexbox/grid cho blog, tùy chỉnh thanh cuộn cho sidebar, và định dạng lại các thẻ HTML bên trong bài viết (như `h2`, `h3`, `ul`, `li`).
- `blogData.js`: "Cơ sở dữ liệu" của Blog. Lưu trữ danh sách các bài viết dưới dạng mảng Object. Nội dung bài viết được viết trực tiếp bằng HTML string để `Blogs.jsx` render ra thông qua `dangerouslySetInnerHTML`.

#### Trang Portfolio (`Portfolio/`)
- `Portfolio.jsx`: Trang hiển thị CV và dự án chi tiết, là trang lớn nhất của website. Được chia thành nhiều section: 
  - **About:** Giới thiệu kèm hiệu ứng quỹ đạo bay (Orbit animation).
  - **Education:** Quá trình học tập kèm biểu đồ tròn SVG hiển thị điểm GPA.
  - **Projects:** Hiển thị dự án lớn (Non-Invasive Health Analysis) với thiết kế Tab (Tabs) để xem chi tiết từng thành phần hệ thống.
  - **Skills, Activities, Certificates:** Dạng lưới (Grid layout) dùng flexbox/grid.
  - **Contact:** Card thông tin liên hệ.
- `Portfolio.css`: Chứa rất nhiều CSS scope riêng biệt để phục vụ cho các layout phức tạp (Timeline, SVG Stroke Dashoffset cho GPA, Tab panels, Hover effects cho card).
