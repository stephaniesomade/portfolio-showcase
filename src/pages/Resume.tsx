import '../styles/Resume.css';
import resumePDF from '../assets/resume.pdf';
import { useState, useEffect } from 'react';

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Stephanie_Somade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>My Resume</h1>
        <button className="download-btn" onClick={handleDownload}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download CV
        </button>
      </div>

      {isMobile ? (
        <div className="mobile-pdf-container">
          <div className="mobile-pdf-preview">
            <div className="pdf-icon">📄</div>
            <h3>Stephanie Somade Resume</h3>
            <p>For the best viewing experience on mobile, please download or open in a new tab.</p>
            <div className="mobile-pdf-actions">
              <button className="mobile-pdf-btn primary" onClick={handleViewPDF}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                View PDF
              </button>
              <button className="mobile-pdf-btn secondary" onClick={handleDownload}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="pdf-viewer">
            <iframe
              src={resumePDF}
              title="Stephanie Somade Resume"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
          <div className="pdf-fallback">
            <p>Can't see the PDF? <a href={resumePDF} target="_blank" rel="noopener noreferrer">Click here to view it in a new tab</a></p>
          </div>
        </>
      )}
    </div>
  );
}