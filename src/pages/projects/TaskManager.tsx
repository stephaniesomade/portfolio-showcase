import '../../styles/ProjectDetail.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import tasksImage from '../../assets/tasks.png';
import tasksdbImage from '../../assets/tasksdb.png';

export default function TaskManager() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const backToProjects = () => {
    navigate('/projects');
  };

  const contact = () => {
    navigate('/contact');
  };

  return (
    <div className="project-detail-container">
      <div className="project-header">
        <button className="back-btn" onClick={backToProjects}>
          ← Back to Projects
        </button>
        <div className="project-hero">
          <div className="project-image-large">
            <div className="project-placeholder-large">📋</div>
          </div>
          <div className="project-info">
            <h1>Task Management App</h1>
            <p className="project-description">A collaborative task management application with real-time updates, team collaboration features, and comprehensive progress tracking. Built for teams who need efficient project coordination and workflow management.</p>
            <div className="tech-stack-large">
              <span className="tech-tag-large">React</span>
              <span className="tech-tag-large">Node.js</span>
              <span className="tech-tag-large">MongoDB</span>
              <span className="tech-tag-large">Express</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/stephaniesomade/todolist" className="project-link secondary">View Code</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="content-section">
          <h2>Project Overview</h2>
          <p>This full-stack task management application was designed to streamline team collaboration and project tracking. Built with real-time capabilities, it allows teams to create, assign, and track tasks with instant updates across all connected users. The application features a clean, intuitive interface that makes project management effortless.</p>
        </div>

        <div className="content-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Team Collaboration</h3>
              <p>Assign tasks, add comments, and track progress with full team visibility.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progress Tracking</h3>
              <p>Visual progress indicators, deadlines, and comprehensive project analytics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Access</h3>
              <p>User authentication, role-based permissions, and secure data handling.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Technical Implementation</h2>
          <p>The application follows a modern full-stack architecture with React on the frontend and Node.js/Express on the backend. Socket.io enables real-time communication, while MongoDB provides flexible data storage for tasks, users, and projects. The system is designed for scalability and performance.</p>
          
          <div className="tech-details">
            <div className="tech-detail">
              <h4>Frontend</h4>
              <ul>
                <li>React with Context API</li>
                <li>Responsive CSS Grid layouts</li>
                <li>Custom drag-and-drop interface</li>
              </ul>
            </div>
            <div className="tech-detail">
              <h4>Backend</h4>
              <ul>
                <li>Node.js & Express server</li>
                <li>MongoDB with Mongoose ODM</li>
                <li>JWT authentication system</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Challenges & Solutions</h2>
          <p>The biggest challenge was implementing real-time synchronization while maintaining data consistency across multiple users. I solved this by implementing a robust event-driven architecture with proper conflict resolution and optimistic updates. Additionally, creating an intuitive drag-and-drop interface required careful attention to user experience and accessibility.</p>
        </div>

        <div className="content-section">
          <h2>Project Screenshot</h2>
          <div className="project-screenshot-container">
            <img src={tasksImage} alt="Task Manager Interface" className="project-screenshot" />
          </div>
        </div>

        <div className="content-section">
          <h2>Database Structure</h2>
          <div className="project-screenshot-container">
            <img src={tasksdbImage} alt="Task Manager Database Structure" className="project-screenshot" />
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need a Custom Solution?</h2>
        <p>I specialize in building collaborative applications that bring teams together. Let's discuss your project requirements!</p>
        <div className="cta-buttons">
          <button className="detail-btn primary" onClick={contact}>Get in Touch</button>
          <button className="detail-btn secondary" onClick={backToProjects}>View More Projects</button>
        </div>
      </div>
    </div>
  );
}
