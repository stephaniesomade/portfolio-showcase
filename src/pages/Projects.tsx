import '../styles/Projects.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';

export default function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const goToProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const contact = () => {
    navigate('/contact');
  };

  const home = () => { 
    navigate('/')
  }

  const aboutMe = () => {
    navigate('/aboutme');
  };

  return (
    <div className="projects-container">
      <div className="projects-hero">
        <div className="hero-content">
          <h1>My Projects</h1>
          <p className="hero-subtitle">Explore my portfolio showcasing various projects and technical skills I've developed throughout my career. Each project represents a unique challenge and learning opportunity.</p>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-card" onClick={() => goToProject('weather-app')}>
          <div className="project-image">
            <div className="project-placeholder">🌤️</div>
          </div>
          <div className="project-content">
            <h3>Weather App</h3>
            <p>A modern weather application with real-time data, location-based forecasts, and beautiful UI animations.</p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">OpenWeather API</span>
            </div>
            <div className="project-footer">
              <span className="view-project">View Project →</span>
            </div>
          </div>
        </div>

        <div className="project-card" onClick={() => goToProject('task-manager')}>
          <div className="project-image">
            <div className="project-placeholder">📋</div>
          </div>
          <div className="project-content">
            <h3>Task Management App</h3>
            <p>A collaborative task management application with real-time updates, team collaboration, and progress tracking.</p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express</span>
            </div>
            <div className="project-footer">
              <span className="view-project">View Project →</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Interested in Working Together?</h2>
        <p>I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life!</p>
        <div className="cta-buttons">
          <button className="projects-btn primary" onClick={home}>Get in Touch</button>
          <button className="projects-btn secondary" onClick={aboutMe}>Learn More About Me</button>
        </div>
      </div>
    </div>
  );
}
