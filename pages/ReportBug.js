import React, { useState } from 'react';

export default function ReportBug() {
  const [bugReport, setBugReport] = useState({
    title: '',
    description: '',
    stepsToReproduce: '',
    expectedBehavior: '',
    actualBehavior: '',
    browserInfo: '',
    email: '',
    screenshot: null
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBugReport(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setBugReport(prev => ({
      ...prev,
      screenshot: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Bug report submitted:', bugReport);
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setBugReport({
        title: '',
        description: '',
        stepsToReproduce: '',
        expectedBehavior: '',
        actualBehavior: '',
        browserInfo: '',
        email: '',
        screenshot: null
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '8px',
    border: '1px solid #ddd'
  };

  return (
    <div className="main-content">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h2>Report a Bug</h2>
        <p style={{ marginBottom: '1.5rem', color: '#555' }}>
          Found something not working correctly? Help us improve YOUR BUDDY by reporting the issue.
        </p>
        
        {submitted && (
          <div style={{
            padding: '1rem',
            background: '#ecfdf5',
            borderRadius: '8px',
            marginBottom: '2rem',
            color: '#065f46',
            borderLeft: '4px solid #10b981'
          }}>
            <strong>Thank you for your report!</strong> Our team will investigate the issue.
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Bug Title *
            </label>
            <input
              type="text"
              name="title"
              placeholder="Brief description of the issue"
              value={bugReport.title}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Detailed Description *
            </label>
            <textarea
              name="description"
              placeholder="Please describe the bug in detail"
              value={bugReport.description}
              onChange={handleChange}
              style={{ ...inputStyle, minHeight: '120px' }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Steps to Reproduce *
            </label>
            <textarea
              name="stepsToReproduce"
              placeholder="1. Go to...\n2. Click on...\n3. Observe that..."
              value={bugReport.stepsToReproduce}
              onChange={handleChange}
              style={{ ...inputStyle, minHeight: '100px' }}
              required
            />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Expected Behavior
              </label>
              <textarea
                name="expectedBehavior"
                placeholder="What should have happened?"
                value={bugReport.expectedBehavior}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: '80px' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Actual Behavior
              </label>
              <textarea
                name="actualBehavior"
                placeholder="What happened instead?"
                value={bugReport.actualBehavior}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: '80px' }}
              />
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Browser & Device Information
            </label>
            <input
              type="text"
              name="browserInfo"
              placeholder="e.g., Chrome 96 on Windows 10, iPhone 13 with iOS 15"
              value={bugReport.browserInfo}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Your Email (for follow-up)
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={bugReport.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Screenshot (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={inputStyle}
            />
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '4px' }}>
              Upload a screenshot to help us understand the issue better.
            </p>
          </div>
          
          <button 
            type="submit" 
            disabled={submitting}
            style={{
              background: submitting ? '#cbd5e1' : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: submitting ? 'default' : 'pointer',
              marginTop: '1rem'
            }}
          >
            {submitting ? 'Submitting...' : 'Submit Bug Report'}
          </button>
        </form>
      </div>
    </div>
  );
}