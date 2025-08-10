import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  // Timer modal state
  const [showTimer, setShowTimer] = useState(false);
  const [timer, setTimer] = useState(25 * 60); // 25 min
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  // Progress modal state
  const [showProgress, setShowProgress] = useState(false);

  // New state variables for modals
  const [showResources, setShowResources] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // Feedback form state
  const [feedback, setFeedback] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  // Timer logic
  React.useEffect(() => {
    if (isRunning && timer > 0) {
      timerRef.current = setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      clearTimeout(timerRef.current);
    }
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timer]);

  const formatTime = sec => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const resetTimer = () => {
    setTimer(25 * 60);
    setIsRunning(false);
  };

  // Feedback form handlers
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setShowFeedback(false);
      setFeedback('');
      setFeedbackSubmitted(false);
    }, 1500);
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    setSuggestionSubmitted(true);
    setTimeout(() => {
      setShowSuggestion(false);
      setSuggestion('');
      setSuggestionSubmitted(false);
    }, 1500);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-content">
          <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            alt="YOUR BUDDY Logo" 
            className="hero-logo" 
            onError={(e) => {
              console.log('Logo failed to load');
              e.target.style.display = 'none';
            }}
          />
          <h1>
            Welcome to <span className="brand">YOUR BUDDY</span>
          </h1>
          <p className="subtitle">
            India's most advanced platform for students to share and access previous year papers, notes, and study resources from any college or university.
          </p>
          <div className="cta-buttons">
            <Link to="/browse" className="cta">Browse Resources</Link>
            <Link to="/upload" className="cta secondary">Upload Notes</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Colleges</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Platform Features</h2>
        <div className="features-grid">
          <div
            className="feature-card feature-clickable"
            onClick={() => setShowResources(true)}
            style={{ cursor: 'pointer' }}
            title="Browse Student Resources"
          >
            <div className="feature-icon">📚</div>
            <h3>Study Resources</h3>
            <p>Access thousands of notes, previous year papers, and study materials</p>
          </div>
          <div
            className="feature-card feature-clickable"
            onClick={() => setShowCommunity(true)}
            style={{ cursor: 'pointer' }}
            title="Join Student Community"
          >
            <div className="feature-icon">👥</div>
            <h3>Student Community</h3>
            <p>Connect with fellow students, discuss topics, and solve doubts together</p>
          </div>
          <div
            className="feature-card feature-clickable"
            onClick={() => setShowTimer(true)}
            style={{ cursor: 'pointer' }}
            title="Open Study Timer"
          >
            <div className="feature-icon">⏱️</div>
            <h3>Study Timer</h3>
            <p>Track your study sessions with our built-in Pomodoro timer</p>
          </div>
          <div
            className="feature-card feature-clickable"
            onClick={() => setShowProgress(true)}
            style={{ cursor: 'pointer' }}
            title="View Progress"
          >
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your learning progress with detailed analytics</p>
          </div>
        </div>
      </div>

      {/* Student Resources Modal */}
      {showResources && (
        <div className="modal-overlay" onClick={() => setShowResources(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Browse Student Resources</h2>
            <input
              type="text"
              placeholder="Search notes, papers, assignments..."
              style={{ width: '100%', padding: '0.7rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            <ul style={{ color: '#374151', marginBottom: '1rem' }}>
              <li>Mathematics - 2024 PYQs</li>
              <li>Physics - Notes & Assignments</li>
              <li>CSE - Data Structures Notes</li>
            </ul>
            <Link to="/browse" className="cta">Go to Browse Page</Link>
            <button className="modal-close" onClick={() => setShowResources(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Student Community Modal */}
      {showCommunity && (
        <div className="modal-overlay" onClick={() => setShowCommunity(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Student Community</h2>
            <p>Join discussions, ask doubts, and connect with students from all colleges!</p>
            <Link to="/community" className="cta">Join Community</Link>
            <button className="modal-close" onClick={() => setShowCommunity(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Study Timer Modal */}
      {showTimer && (
        <div className="modal-overlay" onClick={() => setShowTimer(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Pomodoro Study Timer</h2>
            <div style={{ fontSize: '2.5rem', margin: '1rem 0' }}>{formatTime(timer)}</div>
            <div>
              <button onClick={() => setIsRunning(true)} disabled={isRunning} style={{marginRight: '1rem'}}>Start</button>
              <button onClick={() => setIsRunning(false)} disabled={!isRunning} style={{marginRight: '1rem'}}>Pause</button>
              <button onClick={resetTimer}>Reset</button>
            </div>
            <p style={{marginTop: '1rem', color: '#6b7280'}}>25 min focus, then take a 5 min break!</p>
            <button className="modal-close" onClick={() => setShowTimer(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Progress Tracking Modal */}
      {showProgress && (
        <div className="modal-overlay" onClick={() => setShowProgress(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Your Progress</h2>
            <div style={{margin: '1.5rem 0'}}>
              <div style={{height: '120px', width: '100%', background: 'linear-gradient(90deg,#667eea,#764ba2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem'}}>
                📊 76% Complete
              </div>
              <ul style={{marginTop: '1.5rem', color: '#374151'}}>
                <li>Notes uploaded: <strong>12</strong></li>
                <li>Resources downloaded: <strong>34</strong></li>
                <li>Study hours tracked: <strong>18h</strong></li>
              </ul>
            </div>
            <button className="modal-close" onClick={() => setShowProgress(false)}>Close</button>
          </div>
        </div>
      )}

      {/* General Feedback Modal */}
      {showFeedback && (
        <div className="modal-overlay" onClick={() => setShowFeedback(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>General Feedback</h2>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                placeholder="Share your experience or feedback..."
                rows={5}
                style={{ width: '100%', borderRadius: '8px', padding: '0.7rem', border: '1px solid #ddd', marginBottom: '1rem' }}
                required
              />
              <button type="submit" className="modal-close" disabled={feedbackSubmitted}>
                {feedbackSubmitted ? "Submitted!" : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Suggest a Feature Modal */}
      {showSuggestion && (
        <div className="modal-overlay" onClick={() => setShowSuggestion(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Suggest a Feature</h2>
            <form onSubmit={handleSuggestionSubmit}>
              <textarea
                value={suggestion}
                onChange={e => setSuggestion(e.target.value)}
                placeholder="Describe your feature idea..."
                rows={5}
                style={{ width: '100%', borderRadius: '8px', padding: '0.7rem', border: '1px solid #ddd', marginBottom: '1rem' }}
                required
              />
              <button type="submit" className="modal-close" disabled={suggestionSubmitted}>
                {suggestionSubmitted ? "Submitted!" : "Submit Suggestion"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Community Section */}
      <div className="community-section">
        <h2>Join Our Student Community</h2>
        <div className="community-content">
          <div className="community-text">
            <p>
              Connect with fellow students, participate in discussions, and get your questions answered. Our community features include:
            </p>
            <ul className="feature-list">
              <li>Subject-specific discussion forums</li>
              <li>Doubt-solving platform with peer assistance</li>
              <li>Bug reports and feature requests</li>
              <li>Study group formation</li>
              <li>Student success stories</li>
            </ul>
            <Link to="/community" className="cta">Join Community</Link>
          </div>
          <div className="community-image">
            <img 
              src={`${process.env.PUBLIC_URL}/community.jpg`} 
              alt="Student Community" 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How do I upload my notes?</h3>
            <p>You can upload your notes by going to the Upload page. We accept PDFs, Word documents, PPTs, and images. All uploads are reviewed before publishing.</p>
          </div>
          <div className="faq-item">
            <h3>Are all resources free?</h3>
            <p>Yes, all resources on YOUR BUDDY are completely free. We believe in open access to education.</p>
          </div>
          <div className="faq-item">
            <h3>How can I report incorrect study materials?</h3>
            <p>You can report any incorrect materials through the "Report" button available on each resource page or through our Feedback form.</p>
          </div>
          <div className="faq-item">
            <h3>Can I suggest new features?</h3>
            <p>Absolutely! Visit our Feedback page to suggest features or improvements to the platform.</p>
          </div>
        </div>
        <div className="view-all-faq">
          <Link to="/faq" className="text-link">View all FAQs →</Link>
        </div>
      </div>

      {/* Feedback Section (update links to open modals) */}
      <div className="feedback-section">
        <h2>Help Us Improve</h2>
        <div className="feedback-options">
          <Link to="/report-bug" className="feedback-card">
            <div className="feedback-icon">🐛</div>
            <h3>Report a Bug</h3>
            <p>Found something not working? Let us know!</p>
          </Link>
          <button className="feedback-card" onClick={() => setShowSuggestion(true)}>
            <div className="feedback-icon">💡</div>
            <h3>Suggest a Feature</h3>
            <p>Have ideas to make YOUR BUDDY better?</p>
          </button>
          <button className="feedback-card" onClick={() => setShowFeedback(true)}>
            <div className="feedback-icon">📝</div>
            <h3>General Feedback</h3>
            <p>Share your experience with the platform</p>
          </button>
        </div>
      </div>

      {/* Modal Example (to be triggered by a state change) */}
      {/* <div className="modal-overlay">
        <div className="modal">
          <h2>Modal Title</h2>
          <p>Some interesting content for the modal.</p>
          <button className="modal-close">Close</button>
        </div>
      </div> */}
    </div>
  );
}
