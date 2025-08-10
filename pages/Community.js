import React, { useState } from 'react';
import './Community.css';

const discussionCategories = [
  { id: 1, name: "General Discussion", icon: "💬", count: 243 },
  { id: 2, name: "Subject Help", icon: "📚", count: 185 },
  { id: 3, name: "Exam Preparation", icon: "📝", count: 129 },
  { id: 4, name: "Career Advice", icon: "💼", count: 87 },
  { id: 5, name: "Campus Life", icon: "🎓", count: 104 },
  { id: 6, name: "Bug Reports", icon: "🐛", count: 32 },
  { id: 7, name: "Feature Requests", icon: "💡", count: 56 },
]

const samplePosts = [
  {
    id: 1,
    title: "Tips for preparing for Computer Networks exam",
    author: "Rohit Kumar",
    category: "Exam Preparation",
    date: "2 days ago",
    replies: 14,
    views: 230,
  },
  {
    id: 2,
    title: "Need help with Database normalization concept",
    author: "Priya Sharma",
    category: "Subject Help",
    date: "5 hours ago",
    replies: 7,
    views: 48,
  },
  {
    id: 3,
    title: "Internship opportunities for CSE students",
    author: "Amit Singh",
    category: "Career Advice",
    date: "1 day ago",
    replies: 22,
    views: 312,
  },
  {
    id: 4,
    title: "UI glitch in the study timer feature",
    author: "Sneha Gupta",
    category: "Bug Reports",
    date: "3 days ago",
    replies: 3,
    views: 27,
  },
];

export default function Community() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = samplePosts.filter(post => {
    // Filter by category
    if (activeCategory !== "all" && post.category !== activeCategory) {
      return false;
    }
    
    // Filter by search
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="community-page">
      <div className="community-header">
        <h1>Student Community</h1>
        <p>Connect, discuss, and learn with fellow students across India</p>
      </div>
      
      <div className="community-container">
        <div className="community-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              <li 
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => setActiveCategory("all")}
              >
                <span className="category-icon">🔍</span>
                <span className="category-name">All Discussions</span>
                <span className="category-count">{samplePosts.length}</span>
              </li>
              
              {discussionCategories.map(category => (
                <li 
                  key={category.id}
                  className={activeCategory === category.name ? "active" : ""}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3>Popular Tags</h3>
            <div className="tag-cloud">
              <span className="tag">programming</span>
              <span className="tag">exams</span>
              <span className="tag">computer-science</span>
              <span className="tag">mathematics</span>
              <span className="tag">physics</span>
              <span className="tag">engineering</span>
              <span className="tag">interview</span>
              <span className="tag">placement</span>
            </div>
          </div>
        </div>
        
        <div className="community-main">
          <div className="community-actions">
            <div className="search-container">
              <input 
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            
            <button className="new-discussion-btn">
              New Discussion
            </button>
          </div>
          
          <div className="discussion-list">
            <div className="discussion-header">
              <span className="discussion-title-header">Discussion Topic</span>
              <div className="discussion-meta-header">
                <span>Category</span>
                <span>Replies</span>
                <span>Activity</span>
              </div>
            </div>
            
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div key={post.id} className="discussion-item">
                  <div className="discussion-content">
                    <h3 className="discussion-title">{post.title}</h3>
                    <div className="discussion-details">
                      <span className="discussion-author">Started by {post.author}</span>
                      <span className="discussion-date">{post.date}</span>
                      <span className="discussion-views">{post.views} views</span>
                    </div>
                  </div>
                  
                  <div className="discussion-meta">
                    <span className="discussion-category">{post.category}</span>
                    <span className="discussion-replies">{post.replies}</span>
                    <span className="discussion-activity">{post.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No discussions found matching your criteria</p>
                <button onClick={() => {setActiveCategory("all"); setSearchQuery("");}}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          
          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-btn">12</button>
          </div>
        </div>
      </div>
    </div>
  );
}