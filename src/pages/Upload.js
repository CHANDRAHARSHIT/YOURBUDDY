import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const documentTypes = ["PYQ", "Notes", "Mid-Sem Papers", "Books", "Internal Exam Papers", "Assignments"];

export default function Upload() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documentType: 'PYQ',
    college: '',
    course: '',
    subject: '',
    yearOrSemester: '',
    file: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'file' && files && files[0]) {
      // Create a preview for PDF or image files
      const file = files[0];
      setFormData(prev => ({ ...prev, file }));
      
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl('');
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 200);
    
    // Simulate API call
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setTimeout(() => {
        alert('Resource uploaded successfully!');
        navigate('/browse');
      }, 500);
    }, 3000);
  };

  return (
    <div className="main-content">
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
        <h2>Upload Study Resource</h2>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Share your study materials with the community. All uploads will be reviewed before publishing.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Document Type
            </label>
            <select 
              name="documentType" 
              value={formData.documentType}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              required
            >
              {documentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              College/University
            </label>
            <input 
              type="text"
              name="college"
              placeholder="e.g. Delhi University"
              value={formData.college}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Course
            </label>
            <input 
              type="text"
              name="course"
              placeholder="e.g. B.Tech CSE"
              value={formData.course}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Subject
            </label>
            <input 
              type="text"
              name="subject"
              placeholder="e.g. Data Structures"
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Year/Semester
            </label>
            <input 
              type="text"
              name="yearOrSemester"
              placeholder="e.g. 3rd Year or 5th Semester"
              value={formData.yearOrSemester}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Upload File (PDF preferred)
            </label>
            <input 
              type="file"
              name="file"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              required
            />
          </div>
          
          {previewUrl && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Preview:</p>
              {previewUrl.includes('application/pdf') ? (
                <div style={{ 
                  background: '#f3f4f6', 
                  padding: '2rem',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <span>PDF document selected</span>
                </div>
              ) : (
                <img 
                  src={previewUrl} 
                  alt="Document preview" 
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '300px',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                  }}
                />
              )}
            </div>
          )}
          
          {isUploading && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${uploadProgress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isUploading}
            style={{
              background: isUploading ? '#cbd5e1' : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isUploading ? 'default' : 'pointer',
              marginTop: '1rem'
            }}
          >
            {isUploading ? 'Uploading...' : 'Upload Resource'}
          </button>
        </form>
      </div>
    </div>
  );
}