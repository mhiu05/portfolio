# Hướng dẫn chỉnh sửa nội dung portfolio

Bạn có thể thay thông tin, thêm dự án, công ty hoặc chứng chỉ bằng cách sửa các tệp trong **`src/content/`**. Không cần sửa các component React để thêm nội dung vào những mục đã có.

## Bắt đầu

1. Mở thư mục dự án bằng trình soạn thảo.
2. Chạy `npm.cmd run dev` trong PowerShell. Với macOS/Linux dùng `npm run dev`.
3. Mở địa chỉ Vite hiển thị. Sau khi lưu tệp, trình duyệt tự cập nhật.
4. Giữ đúng dấu nháy, dấu phẩy và dấu ngoặc. Chạy `npm.cmd run typecheck` nếu nghi có lỗi cú pháp.

`null` có nghĩa là chưa có thông tin. Không thay bằng `'#'`, đường dẫn giả hoặc chuỗi `'null'`. Mọi ví dụ về GPA, ngày và công ty bên dưới đều chỉ minh họa cú pháp, không phải thành tích của chủ portfolio.

## 1. Đổi tên, giới thiệu và tiêu đề

Sửa `src/content/profile.ts`:

```ts
name: 'Tên của bạn',
initials: 'ab',
role: 'AI Engineer / LLM Engineer',
headline: ['I build AI', 'that works.'],
bio: 'Đoạn giới thiệu mới của bạn.',
workflowDescription: 'Cách bạn tiếp cận một bài toán kỹ thuật.',
```

`headline` có đúng hai phần để bố cục tiêu đề luôn có chủ đích. `introduction` là câu ngắn ở phần đầu trang. `contactHeading` và `contactDescription` điều khiển lời mời kết nối ở cuối trang. Tiêu đề SEO tự lấy tên và vai trò từ `profile`; build lại để cập nhật metadata trong HTML xuất bản.

## 2. Đổi trường, ngành và GPA

Vẫn trong `profile.ts`, sửa `education`:

```ts
education: {
  institution: 'Tên đầy đủ của trường',
  shortName: 'Tên viết tắt',
  major: 'Computer Science',
  gpa: null,
},
```

Chỉ nhập GPA thật khi muốn công khai, ví dụ chuỗi `'[GPA đã xác nhận]'`. Nếu giữ `null` hoặc bỏ trường `gpa`, giao diện không hiển thị GPA.

## 3. Sửa nội dung Agent Engineering và cách làm việc

`agentEngineering` là một danh sách trong `profile.ts`, hiển thị ở mục **Agent Engineering** trong About:

```ts
agentEngineering: [{
  title: 'From conversation to action',
  description: 'Mô tả cách bạn xây dựng Agent, tích hợp tools, memory, retrieval và backend.',
  status: 'OpenAI Agents SDK · FastAPI · React',
}],
workflow: ['Understand', 'Design', 'Build', 'Evaluate', 'Iterate'],
```

Nội dung này giới thiệu trọng tâm xây dựng Agent. Chỉ thêm đóng góp, kết quả đánh giá hoặc benchmark khi có bằng chứng thực tế.

## 4. Thêm dự án

1. Sao chép một tệp trong `src/content/projects/`, ví dụ `vdaagent.ts`, thành `my-project.ts`.
2. Đổi tên biến export thành `myProject`.
3. Đổi `id` và `slug` thành giá trị duy nhất, dùng chữ thường và dấu gạch nối.
4. Sửa `name`, `category`, `summary`, `technologies`, `highlights` và `caseStudy`.
5. Import và thêm biến vào `src/content/projects/index.ts`:

```ts
import { myProject } from './my-project';
export const projects: Project[] = [safevoice, myProject, vdaagent, nonInvasive];
```

Trang `/projects/my-project` tự hoạt động. Không cần thêm route thủ công. Không trùng `slug`. `featured: true` tạo phần trình bày lớn; nên giữ một dự án nổi bật. `role`, `cover`, `github` và `demo` có thể là `null`. Chỉ thêm stack và đóng góp thật.

```ts
github: null, // Hoặc URL repository đã kiểm tra
demo: null,   // Hoặc URL demo thực tế
role: null,
cover: null,
visual: 'analytics', // 'mood' | 'analytics' | 'vitals' | 'cache'
```

Các nhãn của hình minh họa nằm trong `site.ts`, mục `visuals`. Đây là hình concept, không phải ảnh chụp sản phẩm. Tên và metadata của mỗi dự án chỉ định nghĩa trong đối tượng dự án của nó.

## 5. Đổi thứ tự dự án

Đổi thứ tự các biến trong mảng `projects` của `src/content/projects/index.ts`. Thứ tự này cũng điều khiển liên kết “Keep exploring” ở trang chi tiết. Để đưa một dự án lên đầu, chuyển biến của nó lên đầu mảng.

## 6. Sửa case study

Mở tệp của dự án và sửa `caseStudy.introduction`, `architecture` và `sections`:

```ts
{
  id: 'results',
  title: 'Results & Evidence',
  paragraphs: ['Mô tả kết quả có bằng chứng.'],
  bullets: ['Liệt kê dữ liệu, phần cứng và cách tái lập.'],
  placeholder: false,
}
```

`placeholder: true` hiển thị nhãn “Content to add”. Xóa một phần khỏi `sections` nếu chưa muốn hiển thị. Giữ `id` duy nhất, ổn định và không có khoảng trắng để liên kết nội bộ hoạt động. Đặt `architecture: null` để bỏ sơ đồ. Các node của sơ đồ gồm `id`, `title`, `detail`.

Khối nội dung cũng hỗ trợ code và bảng, không cần sửa React:

```ts
code: { language: 'Python', text: 'print("example")' },
table: {
  headers: ['Configuration', 'Measured result'],
  rows: [['[Cấu hình thật]', '[Số liệu đã đo]']],
},
```

Phần Overview tự lấy `summary` và `highlights`; tránh chép lại metadata để không phát sinh hai phiên bản khác nhau. SafeVoice và Non-Invasive có nội dung dựa trên repository; đóng góp cá nhân vẫn chờ xác nhận. VDaAgent còn dùng khung biên tập. `caseStudy.note` cho phép ghi nguồn và giới hạn riêng cho từng dự án; nếu bỏ trống sẽ dùng ghi chú chung.

## 7. Thay screenshot

Đặt ảnh thật vào `public/images/projects/<slug>/`, rồi sửa:

```ts
cover: '/images/projects/safevoice/overview.webp',
coverAlt: 'Mô tả nội dung ảnh chụp thực tế',
```

Không ghi `public/` vào đường dẫn. Nên dùng WebP/AVIF hoặc PNG tối ưu, đặt tên không có khoảng trắng. Ảnh dùng `object-fit: contain` nên không cắt chữ quan trọng. Ảnh không có hoặc tải lỗi sẽ quay về hình concept. Với chứng chỉ và logo, dùng các thư mục `public/images/certificates/` và `public/images/companies/`. Có thể tạo các thư mục khi thêm ảnh; dự án không cung cấp ảnh giả.

## 8. Thêm công ty vào Work Experience

Sửa `src/content/experience.ts`. Thêm một đối tượng vào mảng `experience`:

```ts
{
  id: 'experience-02',
  company: '[Tên công ty thực tế]',
  role: '[Chức danh thực tế]',
  employmentType: 'Internship',
  location: null,
  startDate: null,
  endDate: null,
  responsibilities: ['Mô tả trách nhiệm thật.'],
  achievements: [],
  technologies: ['Python'],
  logo: null,
  website: null,
  placeholder: false,
}
```

Chỉ đặt `placeholder: false` khi đã thay nội dung bằng kinh nghiệm có thật. Xóa mục mẫu `[Company Name]` trước khi xuất bản. Đây là lịch sử làm việc tại tổ chức, không phải nơi liệt kê thí nghiệm AI.

## 9. Cập nhật ngày làm việc

Ngày dùng định dạng `YYYY-MM`. Ví dụ cú pháp:

```ts
startDate: '2025-06',
endDate: '2025-09',
current: false,
```

Nếu đang làm: `current: true`, `endDate: null`. Nếu chưa biết ngày, giữ `null` để hiển thị “Dates to add”; không tự điền ngày phỏng đoán. Mảng hiển thị đúng thứ tự bạn nhập, thường mới nhất trước.

## 10. Thêm nội dung Achievement

Sửa `src/content/certifications.ts`:

```ts
{
  id: 'learning-03',
  title: '[Tên chương trình]',
  organization: '[Đơn vị tổ chức]',
  category: 'Training Program',
  date: null,
  description: 'Mô tả chính xác trạng thái tham gia.',
  image: null,
  verificationUrl: null,
  status: 'Unverified sample',
}
```

`category` hỗ trợ `Certification`, `Award`, `Training Program`, `Academic Program`, `Achievement`. Không gọi chương trình đào tạo là chứng chỉ nghề đã đạt nếu chưa xác nhận. Cập nhật `status` khi có bằng chứng; nhãn này hiện ngay trên ảnh. Thêm `verificationUrl` thật mới tạo nút kiểm tra.

## 11. Cập nhật công nghệ

Sửa `src/content/toolkit.ts`, mỗi nhóm gồm `id`, `title`, `description`, `tools`:

```ts
tools: [
  { name: 'Python', projectSlugs: ['safevoice'] },
  { name: 'Docker' },
],
```

`projectSlugs` liên kết tới project đã khai báo. Nếu có nhiều slug, giao diện dẫn tới dự án khớp đầu tiên trong thứ tự projects. Không có slug thì công nghệ hiển thị như nhãn thường. Chỉ giữ các kỹ năng đúng với bản thân; danh sách ban đầu là mẫu cần rà soát, không có phần trăm kỹ năng.

Stack của một dự án sửa ở `technologies` trong tệp dự án, vì đây là thông tin riêng cho dự án đó.

## 12. Đổi GitHub, LinkedIn và email

Sửa `src/content/social.ts`. GitHub đã có URL được cung cấp. Các mục còn lại đang `null`:

```ts
{ id: 'email', label: 'Email', kind: 'email', url: 'mailto:YOUR-REAL-EMAIL' },
{ id: 'linkedin', label: 'LinkedIn', kind: 'linkedin', url: 'https://www.linkedin.com/in/YOUR-PROFILE/' },
```

Thay giá trị minh họa bằng thông tin thật, hoặc tiếp tục để `null` để ẩn. Header, hero và footer tự dùng các liên kết được cung cấp. Chỉnh lời mời kết nối trong `profile.contactDescription` nếu thay cách liên hệ chính.

## 13. Thêm hoặc thay Resume PDF

1. Đặt PDF thật vào `public/resume/`, ví dụ `Minh-Hieu-CV.pdf`.
2. Sửa `profile.ts`: `resume: '/resume/Minh-Hieu-CV.pdf'`.
3. Chạy `npm.cmd run build`; build kiểm tra tệp local có tồn tại.

Nếu chưa có PDF, giữ `resume: null`; không xuất hiện nút Resume bị hỏng. Có thể dùng URL PDF bên ngoài, nhưng cần tự kiểm tra URL đó.

## 14. Đổi màu, font và nội dung giao diện chung

`src/styles/tokens.css` điều khiển màu và font. Ví dụ `--accent` là màu lime. Khi đổi màu, kiểm tra độ tương phản của chữ trên cả nền sáng và nền tối. `src/styles/globals.css` điều khiển bố cục và breakpoint. Khi đổi sang font mới, thêm font cục bộ và cập nhật import trong `src/main.tsx`.

Các tiêu đề phần, lời chú thích, nhãn concept, mô tả chung và `site.url` nằm trong `src/content/site.ts`. Các mục header nằm trong `navigation.ts`; `id` phải khớp section có thật. Đổi nhãn menu không cần sửa React; tạo hẳn một loại section mới sẽ cần bổ sung component.

## 15. Thêm nội dung mà không sửa layout


Mục **Achievement** dùng dữ liệu `src/content/certifications.ts`; nhãn menu và tiêu đề nội dung cùng là Achievement.

Thêm đối tượng vào mảng để thêm công ty, chứng chỉ, nhóm công nghệ, mục nghiên cứu hay dự án. Layout tự xếp lại theo kích thước màn hình. Thêm khối vào `caseStudy.sections` để mở rộng bài viết, dùng `paragraphs`, `bullets`, `code`, `table` có sẵn. Chỉ cần sửa component khi muốn một **loại hiển thị hoàn toàn mới**.

| Loại tệp | Vai trò |
|---|---|
| `src/content/**` | Nội dung cá nhân và văn bản có thể biên tập |
| `src/types/portfolio.ts` | Quy định trường dữ liệu, giúp TypeScript phát hiện thiếu thông tin |
| `src/components/**`, `src/sections/**` | Cách trình bày, không phải nơi nhập thông tin cá nhân |
| `src/components/animations/**`, `src/lib/motion.ts` | Chuyển động GSAP và cleanup |
| `src/styles/**` | Màu, chữ, khoảng cách, responsive |
| `src/App.tsx`, `src/main.tsx` | Routing và khởi động |
| `scripts/postbuild.mjs` | Metadata, sitemap, robots và kiểm tra CV khi build |

## Trước khi xuất bản

Rà soát mọi nhãn placeholder, thông tin việc làm và chứng nhận. Giữ nhãn “unverified” cho dữ liệu chưa kiểm chứng hoặc bỏ mục đó. Thay ảnh concept bằng screenshot thật khi có. Kiểm tra toàn bộ liên kết.

Đặt `site.url` thành origin thật, không kèm đường dẫn repo, để build tạo sitemap và ảnh chia sẻ tuyệt đối. Với GitHub Pages, dùng `VITE_ROUTER_MODE=hash` và `VITE_BASE_PATH=/TEN-REPO/` như README. Hash routing chỉ có canonical/sitemap trang gốc; muốn SEO từng case study nên dùng hosting hỗ trợ clean routes.

Chạy `npm.cmd run typecheck`, `npm.cmd run lint`, `npm.cmd test`, `npm.cmd run build`, `npm.cmd run test:e2e`. Xem lại desktop và mobile. Không có thao tác deploy hoặc push tự động. `.gitignore` loại trừ dependencies, build, kết quả test và cấu hình môi trường riêng; mã nguồn, lockfile, tệp môi trường mẫu và ảnh QA vẫn được lưu trong Git.

## Activities

Mục Activities nằm giữa Achievement và Toolkit. Sửa `src/content/activities.ts`, mảng `activities`, với các trường `id`, `title`, `description`, `organization`, `date`, `image` và `imageAlt`. Ảnh nằm trong `public/images/activities/`; đường dẫn trong nội dung bắt đầu bằng `/images/activities/`. `date: null` ẩn thời gian khi chưa biết.

Achievement dùng ảnh trong `public/images/certificates/`, khai báo tại `src/content/certifications.ts`. Bấm “View certificate” hoặc ảnh hoạt động để mở ảnh nguyên kích thước. AI in Action chưa có ảnh nên không hiển thị. Chỉ ghi giải thưởng, điểm số và thời gian đọc được từ chứng nhận; không suy ra ngày từ tên tệp khi nội dung ảnh khác.
