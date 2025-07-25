import '../styles/Resume.css';
import resumePDF from '../assets/resume.pdf';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Stephanie_Somade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      
      <div className="pdf-viewer">
        <object
          data={resumePDF}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <embed
            src={resumePDF}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </object>
      </div>
      
      <div className="pdf-fallback">
        <p>Can't see the PDF? <a href={resumePDF} target="_blank" rel="noopener noreferrer">Click here to view it in a new tab</a></p>
      </div>
    </div>
  );
}