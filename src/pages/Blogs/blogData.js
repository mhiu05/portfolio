export const blogPosts = [
    {
        id: 'factorizephys',
        title: 'FactorizePhys',
        category: 'Computer Vision',
        date: '2026-06-08',
        tableOfContents: [
            { id: 'nmf', title: '1 Nonnegative Matrix Factorization (NMF)', level: 1 },
            { id: 'phat-bieu', title: '1.1 Phát biểu bài toán', level: 2 },
            { id: 'bai-toan-toi-uu', title: '1.2 Bài toán tối ưu (Objective Function)', level: 2 },
            { id: 'chi-tiet-khac', title: '1.3 Một số chi tiết khác', level: 2 },
            { id: 'fsam', title: '2 FSAM – Factorized Self-Attention Module', level: 1 },
            { id: 'dau-vao', title: '2.1 Đầu vào, Voxel Embeddings và Vấn đề của Attention hiện có', level: 2 },
            { id: 'bien-doi', title: '2.2 Biến đổi sang ma trận nhân tử hóa', level: 2 },
            { id: 'nhan-tu-hoa', title: '2.3 Nhân tử hóa, Khôi phục và Kích hoạt', level: 2 },
            { id: 'kien-truc', title: '3 Kiến trúc tổng quát', level: 1 },
        ],
        content: `
            <h2 id="nmf">1 Nonnegative Matrix Factorization (NMF)</h2>
            
            <h3 id="phat-bieu">1.1 Phát biểu bài toán</h3>
            <p>Cho ma trận <em>V = [v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>N</sub>] &isin; ℝ<sup>M &times; N</sup><sub>≥ 0</sub></em>. NMF tìm hai ma trận không âm:</p>
            <div style="text-align: center; margin: 16px 0;">
                <em>W = [w<sub>1</sub>, ..., w<sub>L</sub>] &isin; ℝ<sup>M &times; L</sup><sub>≥ 0</sub></em>,&nbsp;&nbsp;&nbsp;&nbsp;
                <em>H = [h<sub>1</sub>, ..., h<sub>N</sub>] &isin; ℝ<sup>L &times; N</sup><sub>≥ 0</sub></em>
            </div>
            <p>sao cho <em>V ≈ WH</em>, tức là:</p>
            <div style="text-align: center; background: rgba(124, 92, 252, 0.05); padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 3px solid var(--accent-primary);">
                <em>V = WH + E = V̂ + E</em>
            </div>
            <p>trong đó <em>V̂ = WH &isin; ℝ<sup>M &times; N</sup><sub>≥ 0</sub></em> là <strong>ma trận xấp xỉ low-rank</strong>, <em>E &isin; ℝ<sup>M &times; N</sup></em> là ma trận sai số bị loại bỏ. <em>L</em> là hyperparameter do người dùng chọn, với điều kiện <em>L ≪ min(M, N)</em>.</p>
            
            <p><strong>Nhận xét (Phân tích theo cột):</strong> Mỗi cột <em>v<sub>j</sub></em> của <em>V</em> được xấp xỉ bởi một tổ hợp tuyến tính các cột cơ sở <em>w<sub>i</sub></em> của <em>W</em>:</p>
            <div style="text-align: center; margin: 12px 0;">
                <em>v<sub>j</sub> ≈ v̂<sub>j</sub> = Σ<sub>i=1..L</sub> w<sub>i</sub> · H<sub>ij</sub></em>
            </div>
            <p><em>H<sub>ij</sub></em> là <strong>hệ số kích hoạt</strong>: cho biết cột cơ sở <em>w<sub>i</sub></em> đóng góp bao nhiêu vào việc tái tạo <em>v<sub>j</sub></em>.</p>

            <h3 id="bai-toan-toi-uu">1.2 Bài toán tối ưu (Objective Function)</h3>
            <p>Mục tiêu của NMF là tìm ma trận <em>W</em> và <em>H</em> sao cho tổng bình phương sai số giữa <em>V</em> và <em>WH</em> là nhỏ nhất. Bài toán được phát biểu dưới dạng tối ưu hóa hàm mất mát theo chuẩn Frobenius:</p>
            <div style="text-align: center; background: rgba(124, 92, 252, 0.05); padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 3px solid var(--accent-primary);">
                min<sub>W, H</sub> ||V - WH||<sup>2</sup><sub>F</sub>&nbsp;&nbsp;&nbsp;&nbsp;s.t.&nbsp;&nbsp;&nbsp;&nbsp;W<sub>ml</sub> ≥ 0,&nbsp; H<sub>ln</sub> ≥ 0
            </div>
            <p>trong đó chuẩn Frobenius được định nghĩa là ||A||<sup>2</sup><sub>F</sub> = Σ<sub>i,j</sub> A<sup>2</sup><sub>ij</sub>.</p>
            <p>Hàm mục tiêu này mang những đặc tính toán học đặc biệt: <strong>lồi theo từng biến riêng lẻ nhưng không lồi theo cả hai biến đồng thời</strong>.</p>

            <h3 id="chi-tiet-khac">1.3 Một số chi tiết khác</h3>
            
            <p><strong>1.3.1 Chứng minh V̂ là ma trận hạng thấp (Low-rank)</strong></p>
            <p>Theo tính chất về hạng của tích hai ma trận:</p>
            <div style="text-align: center; margin: 12px 0;">
                rank(V̂) = rank(WH) ≤ min(rank(W), rank(H))
            </div>
            <p>Vì ma trận <em>W</em> có kích thước <em>M × L</em> và <em>H</em> có kích thước <em>L × N</em>, ta có rank(W) ≤ L và rank(H) ≤ L. Suy ra:</p>
            <div style="text-align: center; margin: 12px 0;">
                rank(V̂) ≤ L ≪ min(M, N)
            </div>
            <p><strong>Hệ quả:</strong> Không gian cột của V̂ có số chiều tối đa là L, trong khi không gian cột của V có thể lên đến min(M,N) chiều. NMF thực hiện <strong>nén thông tin</strong>: V̂ giữ lại L hướng quan trọng nhất.</p>

            <p><strong>1.3.2 Giải thích tính lồi theo từng biến riêng lẻ nhưng không lồi theo cả hai biến</strong></p>
            
            <p><em><strong>1. Lồi theo từng biến riêng lẻ (Convex in isolated variables)</strong></em></p>
            <p>Cố định H, xét hàm mục tiêu f theo W:</p>
            <div style="text-align: center; margin: 12px 0;">
                f(W) = ||V - WH||<sup>2</sup><sub>F</sub> = tr[(V - WH)<sup>T</sup>(V - WH)]
            </div>
            <p>Khai triển:</p>
            <div style="text-align: center; margin: 12px 0;">
                f(W) = tr(V<sup>T</sup>V) - 2tr(V<sup>T</sup>WH) + tr(H<sup>T</sup>W<sup>T</sup>WH)
            </div>
            <p>Trong biểu thức này:</p>
            <ul>
                <li>Số hạng thứ hai <strong>tuyến tính</strong> theo W</li>
                <li>Số hạng thứ ba <strong>bậc hai</strong> theo W, với ma trận Hessian ∇²<sub>W</sub>f = HH<sup>T</sup> ⪰ 0 (nửa xác định dương)</li>
            </ul>
            <p>→ f(W) là một <strong>hàm bậc hai lồi</strong> theo W khi H cố định. Lập luận tương tự, hàm cũng lồi theo H khi cố định W.</p>

            <p><em><strong>2. Không lồi theo (W,H) đồng thời (Non-convex jointly)</strong></em></p>
            <p><strong>Nguyên nhân:</strong> Sự xuất hiện của tích <em>WH</em> tạo thành một <strong>hàm song tuyến tính (bilinear)</strong>, và các hàm như vậy nói chung <strong>không lồi</strong>.</p>
            <p>Ví dụ vô hướng: với V = 1, xét f(w,h) = (1 - wh)²</p>
            <ul>
                <li>(w<sub>1</sub>, h<sub>1</sub>) = (2, 1) ⟹ f = 1</li>
                <li>(w<sub>2</sub>, h<sub>2</sub>) = (1, 2) ⟹ f = 1</li>
                <li>Điểm giữa: (3/2, 3/2) ⟹ f = (1 - 9/4)² = 25/16 ≈ 1.5625 > 1 ✗</li>
            </ul>
            <p>Vi phạm điều kiện lồi: f(điểm giữa) ≤ [f(w₁,h₁) + f(w₂,h₂)]/2</p>

            <p><em><strong>3. Hệ quả đối với việc giải bài toán</strong></em></p>
            <p>Do tính không lồi tổng thể, NMF thường có nhiều <strong>cực tiểu cục bộ</strong> (local minima) và không có nghiệm duy nhất. Thêm vào đó, tồn tại <strong>ambiguity về tỉ lệ</strong>: nếu (W*, H*) là nghiệm tối ưu, thì (cW*, (1/c)H*) với bất kỳ c > 0 cũng là nghiệm vì chúng cho ra cùng tích WH.</p>
            <p>Chính vì vậy, các thuật toán giải NMF dựa trên <strong>tối ưu hóa xen kẽ</strong> (Alternating Optimization): mỗi vòng lặp, cố định H để giải bài toán lồi tìm W, rồi giữ nguyên W để giải bài toán lồi tìm H. Quá trình lặp này đảm bảo hội tụ dù bài toán toàn cục không lồi.</p>

            <p><strong>1.3.3 Tại sao L = 1 là tối ưu cho FactorizePhys?</strong></p>
            <p><em><strong>Bản chất vật lý của tín hiệu BVP:</strong></em></p>
            <p>Tim bơm máu → áp suất máu thay đổi theo chu kỳ → mao mạch dưới da giãn/co → lượng ánh sáng phản chiếu từ da thay đổi = tín hiệu BVP.</p>
            <p><strong>Điểm then chốt:</strong> Trên toàn bộ khuôn mặt, tất cả vùng da đều phản chiếu <strong>cùng một nhịp tim</strong>. Không có vùng trán đập theo nhịp khác với vùng má. Chỉ có <strong>một nguồn tín hiệu duy nhất</strong> lan ra khắp nơi.</p>
            
            <p><em><strong>Biểu diễn toán học khi L = 1:</strong></em></p>
            <div style="text-align: center; margin: 12px 0;">
                V̂<sup>st</sup> = w<sub>1</sub> h<sub>1</sub><sup>T</sup> &isin; ℝ<sup>M × N</sup>
            </div>
            <ul>
                <li><em>w<sub>1</sub> &isin; ℝ<sup>M</sup></em>: <strong>một vector thời gian duy nhất</strong> — chính là dạng sóng BVP</li>
                <li><em>h<sub>1</sub><sup>T</sup> &isin; ℝ<sup>N</sup></em>: <strong>vector hệ số</strong> cho từng vị trí spatial+channel — cho biết mỗi vùng da đóng góp bao nhiêu</li>
            </ul>
            <p>Mỗi cột của V̂<sup>st</sup> là: <em>v̂<sup>st</sup><sub>j</sub> = h<sub>1j</sub> · w<sub>1</sub></em></p>
            <p>Tất cả đều cùng dạng sóng, chỉ khác biên độ — <strong>phù hợp vật lý</strong>.</p>
            
            <p>Nếu chọn <strong>L = 2</strong>, NMF sẽ tìm hai nguồn độc lập. Nhưng vật lý chỉ có một nguồn BVP, nên nguồn thứ hai sẽ khớp với <strong>nhiễu</strong> (chuyển động đầu, thay đổi ánh sáng). Kết quả: attention bị phân tán, performance giảm.</p>

            <p><strong>1.3.4 Tại sao ràng buộc không âm quan trọng?</strong></p>
            
            <p><em><strong>1. So sánh với PCA</strong></em></p>
            <p>PCA (không có ràng buộc không âm) tìm các thành phần như:</p>
            <div style="text-align: center; margin: 12px 0;">
                khuôn mặt = (+2.1)·eigenface<sub>1</sub> <strong>−</strong> (1.3)·eigenface<sub>2</sub> + (+0.8)·eigenface<sub>3</sub> + ...
            </div>
            <p>Hệ số âm: bạn phải <strong>trừ bớt</strong> một eigenface. Nhưng eigenface<sub>2</sub> không phải là một phần vật lý của khuôn mặt — nó chỉ là một khái niệm toán học thuần túy.</p>
            
            <p><strong>NMF với ràng buộc không âm:</strong></p>
            <div style="text-align: center; margin: 12px 0;">
                khuôn mặt = (+2.1)·w<sub>1</sub> + (+1.3)·w<sub>2</sub> + (+0.8)·w<sub>3</sub> + ...
            </div>
            <p>Tất cả hệ số dương. w<sub>1</sub> có thể là vùng mắt, w<sub>2</sub> là vùng mũi, w<sub>3</sub> là vùng miệng. Khuôn mặt được ghép từ các bộ phận — <strong>đúng với trực giác</strong>.</p>

            <p><em><strong>2. Bản chất toán học của "cộng dồn"</strong></em></p>
            <p>Không ràng buộc không âm: một vector v<sub>j</sub> có thể biểu diễn theo nhiều cách hủy nhau:</p>
            <div style="text-align: center; margin: 12px 0;">
                v<sub>j</sub> = (+100)·w<sub>1</sub> + (−99)·w<sub>1</sub> + ...
            </div>
            <p>Các thành phần lớn triệt tiêu, tạo biểu diễn <strong>không ổn định</strong> và khó giải thích.</p>
            
            <p>Với ràng buộc không âm (w<sub>i</sub> ≥ 0, H<sub>ij</sub> ≥ 0):</p>
            <div style="text-align: center; margin: 12px 0;">
                v̂<sub>j</sub> = Σ<sub>i</sub> H<sub>ij</sub> · w<sub>i</sub> ≥ 0
            </div>
            <p>Mỗi số hạng chỉ <strong>tăng</strong> tổng, không bao giờ giảm. Không có hủy nhau. Điều này gọi là <strong>cộng dồn (additive)</strong>.</p>
            <p>Quan trọng: <em>H<sub>ij</sub> = 0</em> có nghĩa rõ ràng — thành phần w<sub>i</sub> <strong>hoàn toàn vắng mặt</strong> trong v<sub>j</sub>.</p>

            <p><em><strong>3. Ý nghĩa trong FactorizePhys</strong></em></p>
            <p>V<sup>st</sup> &isin; ℝ<sup>M × N</sup><sub>≥ 0</sub> là embedding sau ReLU — tất cả phần tử không âm. Ràng buộc không âm của NMF <strong>phù hợp tự nhiên</strong>.</p>
            <p>Nếu không có ràng buộc, w<sub>1</sub> có thể âm, nghĩa là tín hiệu BVP "âm" tại một số thời điểm — vô nghĩa vật lý vì cường độ phản chiếu ánh sáng ≥ 0.</p>

            <p><em><strong>4. Diễn giải Attention</strong></em></p>
            <p>Kết quả cuối của FSAM:</p>
            <div style="text-align: center; margin: 12px 0;">
                r<sup>PPG</sup> = ω(ε + IN(ε ⊙ ε̂))
            </div>
            <p>ε̂ là attention map. Vì ε̂ ≥ 0:</p>
            <ul>
                <li>ε̂<sub>ij</sub> lớn → vị trí (i,j) quan trọng với BVP</li>
                <li>ε̂<sub>ij</sub> ≈ 0 → vị trí đó <strong>không liên quan</strong>, bị ức chế</li>
            </ul>
            <p>Phép nhân ε ⊙ ε̂ là <strong>khuếch đại có chọn lọc</strong>: vùng quan trọng giữ, vùng không quan trọng tắt. Điều này chỉ rõ ràng khi ε̂ ≥ 0 — nếu âm, phép nhân có thể <strong>đảo dấu</strong>, không còn là "attention" nữa.</p>

            <h2 id="fsam">2 FSAM – Factorized Self-Attention Module</h2>
            
            <h3 id="dau-vao">2.1 Đầu vào, Voxel Embeddings và Vấn đề của Attention hiện có</h3>
            
            <p><strong><em>Đầu vào và voxel embeddings là gì?</em></strong></p>
            <p>Đầu vào thô là video không gian-thời gian:</p>
            <div style="text-align: center; margin: 12px 0;">
                <em>I &isin; ℝ<sup>T × C × H × W</sup></em>
            </div>
            <p>Ví dụ: 160 khung hình, ảnh màu RGB 72×72 → I &isin; ℝ<sup>160 × 3 × 72 × 72</sup>.</p>
            <p>Sau 3D-CNN, ta thu được <strong>voxel embeddings</strong>:</p>
            <div style="text-align: center; margin: 12px 0;">
                <em>ε &isin; ℝ<sup>τ × κ × α × β</sup></em>
            </div>
            <p>Ví dụ: ε &isin; ℝ<sup>160 × 12 × 7 × 7</sup> trong FactorizePhys.</p>
            <ul>
                <li><strong>Voxel</strong> = pixel trong không gian 3D (temporal + spatial). Mỗi điểm không còn là giá trị pixel thô mà là đặc trưng học được, mã hóa thông tin BVP tiềm ẩn.</li>
            </ul>

            <p><strong><em>Vấn đề của các cơ chế attention hiện có:</em></strong></p>
            <ul>
                <li><strong>Squeeze-and-Excitation (Channel attention):</strong> Nén toàn bộ temporal và spatial thành một số cho mỗi kênh (Global Average Pooling). Mối liên hệ "kênh này quan trọng ở thời điểm nào, vị trí nào" bị mất.</li>
                <li><strong>CBAM (Spatial + Channel riêng lẻ):</strong> Hai bước nối tiếp. Không thấy sự tương tác đồng thời giữa ba chiều.</li>
            </ul>

            <p><strong><em>Vấn đề cốt lõi cho rPPG:</em></strong> Tín hiệu BVP chỉ xuất hiện ở vùng da cụ thể (spatial), chủ yếu trong kênh xanh lá (channel), với sóng tuần hoàn theo thời gian (temporal). Ba chiều này <strong>chặt chẽ liên quan</strong> và <strong>không thể tách</strong> xử lý độc lập. FSAM tính attention <strong>đồng thời</strong> trên cả ba chiều mà không ép (squeeze) bất kỳ chiều nào.</p>

            <h3 id="bien-doi">2.2 Biến đổi sang ma trận nhân tử hóa</h3>
            
            <p><strong><em>Bước tiền xử lý ξ<sub>pre</sub>:</em></strong></p>
            <p>Trước reshape, embedding ε qua lớp tiền xử lý:</p>
            <div style="text-align: center; margin: 12px 0;">
                ξ<sub>pre</sub>(ε) = ReLU(Conv<sub>1×1×1</sub>(ε))
            </div>
            <ul>
                <li><strong>Conv 1×1×1:</strong> Trộn thông tin giữa các kênh tại cùng vị trí spatial+temporal. Phép chiếu tuyến tính học được để chuẩn bị embedding tối ưu cho NMF.</li>
                <li><strong>ReLU:</strong> Đảm bảo giá trị ≥ 0. Bắt buộc vì NMF yêu cầu ma trận không âm.</li>
            </ul>

            <p><strong><em>Định nghĩa: Ánh xạ sang ma trận 2D Γ</em></strong></p>
            <p>FSAM giải bài toán 3D bằng gập ε thành ma trận 2D để áp dụng NMF:</p>
            <div style="text-align: center; background: rgba(124, 92, 252, 0.05); padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 3px solid var(--accent-primary);">
                <em>V<sup>st</sup> &isin; ℝ<sup>M × N</sup> = Γ<sup>τκαβ→MN</sup>(ξ<sub>pre</sub>(ε))</em><br/>
                M = τ,&nbsp;&nbsp;&nbsp;&nbsp;N = κ × α × β
            </div>
            <p>Ví dụ: M = 160, N = 12 × 7 × 7 = 588 → V<sup>st</sup> &isin; ℝ<sup>160 × 588</sup>.</p>

            <p><strong><em>Cấu trúc ma trận V<sup>st</sup>:</em></strong></p>
            <ul>
                <li><strong>Mỗi hàng i (chiều M):</strong> Snapshot tại thời điểm i, qua tất cả vị trí spatial+kênh.</li>
                <li><strong>Mỗi cột j (chiều N):</strong> <strong>Chuỗi thời gian</strong> của đặc trưng tại vị trí spatial+kênh j. Đây chứa tín hiệu BVP.</li>
            </ul>

            <p><strong><em>Chú ý: Tại sao ánh xạ τ → M chứ không phải khác?</em></strong></p>
            <p>Lựa chọn thiết kế này xuất phát từ loss function. rPPG dùng <strong>Negative Pearson Correlation Loss</strong>:</p>
            <div style="text-align: center; margin: 12px 0; font-size: 0.9rem;">
                η<sub>p</sub> = 1 − [Σ(r<sup>ppg</sup><sub>i</sub> − r̄)<sub>(g<sup>ppg</sup></sub><sub>i</sub> − ḡ)] / [√Σ(r<sup>ppg</sup> − r̄)² · √Σ(g<sup>ppg</sup> − ḡ)²]
            </div>
            <p>Loss đo tương quan <strong>hình dạng</strong> (không quan tâm biên độ, chỉ dạng sóng thời gian).</p>
            <ul>
                <li><strong>Khi τ → M:</strong> Mỗi cột V<sup>st</sup> là chuỗi thời gian. NMF phân rã V<sup>st</sup> ≈ WH với W = w<sub>1</sub> (dạng sóng BVP), H = h<sub>1</sub><sup>T</sup> (trọng số spatial). NMF làm đúng điều loss yêu cầu.</li>
                <li><strong>Nếu κ → M:</strong> NMF tìm pattern kênh, không liên quan trực tiếp dạng sóng thời gian. Kém hơn trong thực nghiệm.</li>
            </ul>

            <h3 id="nhan-tu-hoa">2.3 Nhân tử hóa, Khôi phục và Kích hoạt</h3>
            
            <p><strong><em>Bước 1: Nhân tử hóa (Factorization)</em></strong></p>
            <p>Phân rã ma trận: Ṽ<sup>st</sup> = φ(V<sup>st</sup>) = WH &isin; ℝ<sup>M × N</sup>.</p>
            <p>NMF thông thường lặp xen kẽ, quá chậm để nhúng vào neural network. FactorizePhys dùng <strong>xấp xỉ tuyến tính của BPTT</strong> — chỉ chạy <strong>một bước gradient</strong> mỗi forward pass.</p>
            <p>Với L=1, bài toán: min<sub>w₁, h₁</sub> ||V<sup>st</sup> − w<sub>1</sub>h<sub>1</sub><sup>T</sup>||²<sub>F</sub> với w₁, h₁ ≥ 0.</p>
            <p>Một bước gradient descent cho w₁ (giữ h₁ cố định):</p>
            <div style="text-align: center; margin: 12px 0; font-size: 0.95rem;">
                w<sub>1</sub> ← w<sub>1</sub> − η·∇<sub>w₁</sub>||V<sup>st</sup> − w<sub>1</sub>h<sub>1</sub><sup>T</sup>||²<sub>F</sub> = w<sub>1</sub> + 2η(V<sup>st</sup>h<sub>1</sub> − w<sub>1</sub>||h<sub>1</sub>||²)
            </div>
            <p>Sau đó clip về 0: w<sub>1</sub> ← max(0, w<sub>1</sub>).</p>
            <p><strong>Lưu ý:</strong> NMF chạy trong <code>torch.no_grad()</code> — gradient <strong>không</strong> lan ngược qua NMF để tiết kiệm tính toán. Model học thông qua gradient của phép nhân ε ⊙ ε̂ phía sau.</p>

            <p><strong><em>Bước 2: Biến đổi ngược (Reverse Mapping)</em></strong></p>
            <p>Reshape ngược từ 2D sang 4D ban đầu:</p>
            <div style="text-align: center; margin: 12px 0;">
                <em>ε̂ = Γ<sup>MN→τκαβ</sup>(Ṽ<sup>st</sup>) &isin; ℝ<sup>τ × κ × α × β</sup></em>
            </div>
            <p>Nội dung của ε̂ tại vị trí spatial (α,β), kênh κ, thời điểm t:</p>
            <div style="text-align: center; margin: 12px 0;">
                ε̂<sub>t,κ,α,β</sub> = h<sub>1,(κ,α,β)</sub> · (w<sub>1</sub>)<sub>t</sub>
            </div>
            <p>ε̂ là <strong>dạng sóng BVP w<sub>1</sub> được nhân rộng (broadcast)</strong> ra toàn embedding, với trọng số khác nhau do h<sub>1</sub> quyết định. Vùng da nhiều BVP có h<sub>1</sub> lớn.</p>

            <p><strong><em>Bước 3: Excitation và Residual</em></strong></p>
            <p>Kết quả cuối cùng FSAM:</p>
            <div style="text-align: center; background: rgba(124, 92, 252, 0.05); padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 3px solid var(--accent-primary);">
                <em>r<sup>PPG</sup> = ω(ε + IN(ε ⊙ ξ<sub>post</sub>(ε̂)))</em>
            </div>
            <p><strong>Phân tích từng thành phần:</strong></p>
            <ul>
                <li><strong>ξ<sub>post</sub>(ε̂) = ReLU(Conv<sub>1×1×1</sub>(ε̂)):</strong> Tinh chỉnh attention map ε̂. ReLU đảm bảo ≥ 0.</li>
                <li><strong>Excitation (ε ⊙ ξ<sub>post</sub>):</strong> Phép nhân element-wise. Vùng da có ε̂ lớn → embedding ε được <strong>khuếch đại</strong>. Vùng tóc/nền có ε̂ ≈ 0 → ε bị <strong>ức chế</strong>. Vì ε̂ biến thiên theo thời gian (theo nhịp w<sub>1</sub>), đây là attention thay đổi frame-by-frame, không phải mask không gian cố định.</li>
                <li><strong>IN(·):</strong> <strong>Instance Normalization</strong>. Chuẩn hóa độc lập trên mỗi sample+kênh. Tốt hơn BatchNorm vì rPPG phụ thuộc điều kiện ánh sáng và da của <em>mỗi video</em>.</li>
                <li><strong>Residual (ε + ...):</strong> Đảm bảo gradient lan truyền mượt mà, tránh vanishing gradient. Nếu FSAM chưa học, output = ε (không tệ đi).</li>
                <li><strong>ω(·):</strong> <strong>Network head</strong>. Conv cuối + global pooling để chuyển embedding 4D → tín hiệu 1D: r<sup>PPG</sup> &isin; ℝ<sup>T</sup> (chuỗi nhịp tim ước lượng).</li>
            </ul>

            <h2 id="kien-truc">3 Kiến trúc tổng quát</h2>
            <div style="margin: 24px 0;">
                <img src="/figures/blogs_FactorizePhys_architecture.png" alt="FactorizePhys Architecture" style="width: 100%; border-radius: 12px; border: 1px solid rgba(124, 92, 252, 0.2);" loading="lazy" />
            </div>
            <table border="1" style="border-collapse: collapse; width: 100%; text-align: left; margin-bottom: 20px;">
                <thead>
                    <tr>
                        <th style="padding: 8px;">Bước</th>
                        <th style="padding: 8px;">Phép biến đổi</th>
                        <th style="padding: 8px;">Kích thước tensor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px;">1</td>
                        <td style="padding: 8px;"><em>ε</em> (Voxel embeddings gốc)</td>
                        <td style="padding: 8px;"><em>τ × κ × α × β</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">2</td>
                        <td style="padding: 8px;"><em>ξ<sub>pre</sub></em>: Conv 1×1×1 + ReLU</td>
                        <td style="padding: 8px;"><em>τ × κ × α × β</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">3</td>
                        <td style="padding: 8px;">Reshape: <em>Γ</em></td>
                        <td style="padding: 8px;"><em>M × N (τ → M)</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">4</td>
                        <td style="padding: 8px;">NMF: <em>V<sup>st</sup> ≈ WH = Ṽ<sup>st</sup></em></td>
                        <td style="padding: 8px;"><em>M × N (rank = 1)</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">5</td>
                        <td style="padding: 8px;">Reshape ngược: <em>Γ<sup>−1</sup></em></td>
                        <td style="padding: 8px;"><em>τ × κ × α × β</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">6</td>
                        <td style="padding: 8px;"><em>ξ<sub>post</sub></em>: Conv 1×1×1 + ReLU → <em>ε̂</em></td>
                        <td style="padding: 8px;"><em>τ × κ × α × β</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">7</td>
                        <td style="padding: 8px;">Excitation & Residual: <em>ε + IN(ε ⊙ ε̂)</em></td>
                        <td style="padding: 8px;"><em>τ × κ × α × β</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">8</td>
                        <td style="padding: 8px;"><em>ω(·)</em>: Network head (Conv + Global Pool)</td>
                        <td style="padding: 8px;"><em>T (1D PPG signal)</em></td>
                    </tr>
                </tbody>
            </table>

            <h3 id="bien-doi">2.2 Biến đổi sang ma trận nhân tử hóa</h3>
            
            <p><strong><em>Bước tiền xử lý ξ<sub>pre</sub>:</em></strong></p>
            <p>Trước khi reshape, embedding ε được đi qua một lớp tiền xử lý:</p>
            <div style="text-align: center; margin: 12px 0;">
                ξ<sub>pre</sub>(ε) = ReLU(Conv<sub>1×1×1</sub>(ε))
            </div>
            <ul>
                <li><strong>Conv 1×1×1:</strong> Trộn thông tin giữa các kênh tại cùng vị trí spatial+temporal. Phép chiếu tuyến tính học được để chuẩn bị embedding tối ưu cho NMF.</li>
                <li><strong>ReLU:</strong> Đảm bảo giá trị ≥ 0. Bắt buộc vì NMF yêu cầu ma trận không âm.</li>
            </ul>

            <p><strong>Định nghĩa</strong>: FSAM giải quyết bài toán 3D bằng cách gập <em>&epsilon;</em> thành ma trận 2D để áp dụng NMF:<br/>
            <em>V<sup>st</sup> &isin; ℝ<sup>M &times; N</sup> = &Gamma;(&xi;<sub>pre</sub>(&epsilon;))</em><br/>
            Trong đó: <em>M = &tau;</em>, và <em>N = &kappa; &times; &alpha; &times; &beta;</em>.</p>
            <p><strong>Hình dung cấu trúc ma trận V<sup>st</sup>:</strong><br/>
            - <strong>Mỗi hàng i (chiều M):</strong> Là một snapshot tại thời điểm i, nhìn qua tất cả các vị trí spatial và kênh.<br/>
            - <strong>Mỗi cột j (chiều N):</strong> Là một <strong>chuỗi thời gian</strong> của đặc trưng tại vị trí không gian và kênh thứ j. Đây chính là thứ chứa tín hiệu BVP.</p>
            
            <p><em>Nhận xét (Tại sao ánh xạ &tau; &rarr; M chứ không phải cách khác?):</em> Đây là lựa chọn thiết kế quan trọng nhất, xuất phát từ loss function. Bài toán rPPG dùng <em>Negative Pearson Correlation Loss</em>. Loss này đo tương quan <strong>hình dạng</strong> giữa tín hiệu ước lượng và ground truth.<br/>
            - <strong>Khi ánh xạ &tau; &rarr; M:</strong> Mỗi cột của <em>V<sup>st</sup></em> là một chuỗi thời gian. NMF phân rã <em>V<sup>st</sup> &approx; WH</em>. Khi đó, <em>W = w<sub>1</sub></em> là một chuỗi thời gian cơ sở (chính là dạng sóng BVP tiềm ẩn), và <em>H = h<sub>1</sub><sup>T</sup></em> là trọng số cho biết vị trí spatial+channel nào chứa dạng sóng BVP đó nhiều nhất. NMF đang làm đúng thứ loss yêu cầu.<br/>
            - Nếu ánh xạ <em>&kappa; &rarr; M</em> (channel làm vector), NMF sẽ tìm các pattern kênh, không liên quan trực tiếp đến dạng sóng thời gian.</p>

            <h3 id="nhan-tu-hoa">2.3 Nhân tử hóa, Khôi phục và Kích hoạt</h3>
            <p><strong>Bước 1: Nhân tử hóa (Factorization)</strong><br/>
            Ta phân rã ma trận: <em>V̂<sup>st</sup> = &phi;(V<sup>st</sup>) = WH &isin; ℝ<sup>M &times; N</sup></em>.<br/>
            FactorizePhys dùng <strong>xấp xỉ tuyến tính của BPTT</strong>. Ý tưởng là thay vì lặp đến hội tụ, chỉ chạy <strong>một bước gradient</strong> mỗi lần forward pass.<br/>
            <strong>Lưu ý về gradient:</strong> Quá trình NMF này chạy trong <code>torch.no_grad()</code> — gradient không lan ngược qua các bước NMF để tiết kiệm tính toán. Model học thông qua gradient của phép nhân <em>&epsilon; &odot; &epsilon;̂</em> ở phần sau.</p>
            
            <p><strong>Bước 2: Biến đổi ngược (Reverse Mapping)</strong><br/>
            Sau khi có <em>V̂<sup>st</sup></em>, ta reshape ngược lại không gian 4D ban đầu: <em>&epsilon;̂ = &Gamma;<sup>-1</sup>(V̂<sup>st</sup>) &isin; ℝ<sup>&tau; &times; &kappa; &times; &alpha; &times; &beta;</sup></em>.<br/>
            Điều này có nghĩa: <em>&epsilon;̂</em> chính là <strong>dạng sóng BVP w<sub>1</sub> được nhân rộng (broadcast)</strong> ra toàn bộ không gian embedding, với trọng số khác nhau ở mỗi vị trí do <em>h<sub>1</sub></em> quyết định.</p>

            <p><strong>Bước 3: Excitation và Residual</strong><br/>
            Kết quả cuối cùng của FSAM: <em>r<sup>ppg</sup> = &omega;(&epsilon; + &Iota;N(&epsilon; &odot; &xi;<sub>post</sub>(&epsilon;̂)))</em><br/>
            Phân tích từng thành phần từ trong ra ngoài:<br/>
            - <strong>&xi;<sub>post</sub>(&epsilon;̂) = ReLU(Conv<sub>1x1x1</sub>(&epsilon;̂))</strong>: Tinh chỉnh lại attention map <em>&epsilon;̂</em>.<br/>
            - <strong>Excitation (&epsilon; &odot; &xi;<sub>post</sub>)</strong>: Phép nhân element-wise. Vùng da mặt có <em>&epsilon;̂</em> lớn &rarr; embedding gốc <em>&epsilon;</em> được <strong>khuếch đại</strong>. Vùng tóc/nền có <em>&epsilon;̂ &approx; 0</em> &rarr; <em>&epsilon;</em> bị <strong>ức chế</strong>.<br/>
            - <strong>&Iota;N(&middot;)</strong>: <strong>Instance Normalization</strong>. Chuẩn hóa độc lập trên từng sample và từng kênh.<br/>
            - <strong>Residual Connection (&epsilon; + ...)</strong>: Đảm bảo gradient lan truyền mượt mà tránh vanishing gradient.<br/>
            - <strong>&omega;(&middot;)</strong>: <strong>Network head</strong>. Các lớp convolution cuối và global pooling để chuyển embedding 4D thành tín hiệu 1D cuối cùng.</p>

            <h2 id="kien-truc">3 Kiến trúc tổng quát</h2>
            <div style="margin: 24px 0;">
                <img src="/figures/blogs_FactorizePhys_architecture.png" alt="FactorizePhys Architecture" style="width: 100%; border-radius: 12px; border: 1px solid rgba(124, 92, 252, 0.2);" loading="lazy" />
            </div>
            <table border="1" style="border-collapse: collapse; width: 100%; text-align: left; margin-bottom: 20px;">
                <thead>
                    <tr>
                        <th style="padding: 8px;">Bước</th>
                        <th style="padding: 8px;">Phép biến đổi</th>
                        <th style="padding: 8px;">Kích thước tensor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px;">1</td>
                        <td style="padding: 8px;"><em>&epsilon;</em> (Voxel embeddings gốc)</td>
                        <td style="padding: 8px;"><em>&tau; &times; &kappa; &times; &alpha; &times; &beta;</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">2</td>
                        <td style="padding: 8px;"><em>&xi;<sub>pre</sub></em>: Conv 1x1x1 + ReLU</td>
                        <td style="padding: 8px;"><em>&tau; &times; &kappa; &times; &alpha; &times; &beta;</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">3</td>
                        <td style="padding: 8px;">Reshape: <em>&Gamma;</em></td>
                        <td style="padding: 8px;"><em>M &times; N &nbsp; (&tau; &rarr; M)</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">4</td>
                        <td style="padding: 8px;">NMF: <em>V<sup>st</sup> &approx; WH = V̂<sup>st</sup></em></td>
                        <td style="padding: 8px;"><em>M &times; N &nbsp; (rank = 1)</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">5</td>
                        <td style="padding: 8px;">Reshape ngược: <em>&Gamma;<sup>-1</sup></em></td>
                        <td style="padding: 8px;"><em>&tau; &times; &kappa; &times; &alpha; &times; &beta;</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">6</td>
                        <td style="padding: 8px;"><em>&xi;<sub>post</sub></em>: Conv 1x1x1 + ReLU &rarr; <em>&epsilon;̂</em></td>
                        <td style="padding: 8px;"><em>&tau; &times; &kappa; &times; &alpha; &times; &beta;</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">7</td>
                        <td style="padding: 8px;">Excitation &amp; Residual: <em>&epsilon; + &Iota;N(&epsilon; &odot; &epsilon;̂)</em></td>
                        <td style="padding: 8px;"><em>&tau; &times; &kappa; &times; &alpha; &times; &beta;</em></td>
                    </tr>
                </tbody>
            </table>
        `
    }
];

export const categories = [...new Set(blogPosts.map((p) => p.category))];
