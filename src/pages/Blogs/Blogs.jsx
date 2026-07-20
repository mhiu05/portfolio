import { useState } from 'react';
import { blogPosts, categories } from './blogData';
import './Blogs.css';

export default function Blogs() {
    const [selectedPostId, setSelectedPostId] = useState(blogPosts[0]?.id || null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const selectedPost = blogPosts.find((p) => p.id === selectedPostId);

    const handleSelectPost = (postId) => {
        setSelectedPostId(postId);
        setSidebarOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="blogs-page">
            <div className="blogs-layout">
                {/* Mobile sidebar toggle */}
                <button
                    className="sidebar-mobile-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <i className="fas fa-bars"></i>
                    {sidebarOpen ? 'Đóng danh sách' : 'Danh sách bài viết'}
                </button>

                {/* Sidebar */}
                <aside className={`blogs-sidebar ${!sidebarOpen ? 'collapsed' : ''}`}>
                    {categories.map((category) => (
                        <div className="sidebar-section" key={category}>
                            <div className="sidebar-label">{category}</div>
                            <div className="sidebar-list">
                                {blogPosts
                                    .filter((p) => p.category === category)
                                    .map((post) => (
                                        <button
                                            key={post.id}
                                            className={`sidebar-item ${selectedPostId === post.id ? 'active' : ''}`}
                                            onClick={() => handleSelectPost(post.id)}
                                        >
                                            <span>{post.title}</span>
                                        </button>
                                    ))}
                            </div>
                        </div>
                    ))}
                </aside>

                {/* Content */}
                <main className="blogs-content">
                    {selectedPost ? (
                        <>
                            <div className="blog-header">
                                <div className="blog-meta">
                                    <span className="blog-category-tag">{selectedPost.category}</span>
                                    <span className="blog-date">
                                        <i className="far fa-calendar-alt"></i>
                                        {formatDate(selectedPost.date)}
                                    </span>
                                </div>
                                <h1 className="blog-title">{selectedPost.title}</h1>
                            </div>

                            {/* Table of Contents */}
                            {selectedPost.tableOfContents && selectedPost.tableOfContents.length > 0 && (
                                <div className="blog-toc">
                                    <div className="toc-title">
                                        <i className="fas fa-list-ul"></i>
                                        Mục lục
                                    </div>
                                    <div className="toc-list">
                                        {selectedPost.tableOfContents.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={`toc-item ${item.level === 2 ? 'level-2' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const el = document.getElementById(item.id);
                                                    if (el) {
                                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Blog Body */}
                            <div
                                className="blog-body"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />
                        </>
                    ) : (
                        <div className="blog-empty">
                            <i className="fas fa-book-open"></i>
                            <h3>Chọn một bài viết</h3>
                            <p>Chọn một bài viết từ danh sách bên trái để bắt đầu đọc.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
