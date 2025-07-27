import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Home.css';
import TaskManager from './projects/TaskManager';
import WeatherApp from './projects/WeatherApp';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleSeeCV = () => {
    navigate('/resume')
  }

  const aboutMe = () => {
    navigate('/aboutme')
  }

  const testimonials = () => {
    navigate('/testimonials')
  }

  const weather = () => {
    navigate('/projects/weather-app')
  }

  const taskmanager = () => {
    navigate('/projects/task-manager')
  }

  const projects = () => {
    navigate('/projects')
  }

  const contact = () => {
    // If we're already on the home page, just scroll
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate home with the contact hash
      navigate('/#contact');
    }
  }

  return (
    <div className="title">
      <div className="profile-section">
        <img src="src/assets/me.jpeg" alt="Stephanie Somade" className="title-image" />
        <div className="profile-text">
          <h1>Stephanie<br />Somade</h1>
          <p className="role">Software Engineer</p>
          <button className="home-btn" onClick={handleSeeCV}>See CV</button>
        </div>
      </div>
      
      <nav className="profile-nav">
        <a href="#bio">Bio</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Me</a>
      </nav>
      
      <section id="bio" className="bio-section">
        <h2>Bio</h2>
        <p>Welcome to my world! I'm a passionate software engineer with a love for creating beautiful, functional applications that make a difference. My journey in tech has been filled with exciting challenges and continuous learning.</p>
        <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.</p>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem'}}>
          <button className="home-btn" onClick={aboutMe}>Learn More About Me</button>
          <button className="home-btn" onClick={testimonials}>See Testimonials</button>
        </div>
      </section>
      
      <section id="portfolio" className="portfolio-section">
        <h2>Portfolio</h2>
        <p>Explore my portfolio showcasing various projects and technical skills I've developed throughout my career. Each project represents a unique challenge and learning opportunity.</p>
        
        <div className="portfolio-grid">
          <div className="project-card" onClick={weather}>
            <h3 style={{color: '#1a1a1a', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '600'}}>Weather App</h3>
            <p style={{color: '#4a4a4a', fontSize: '1rem', lineHeight: '1.6'}}>Description</p>
            <div style={{marginTop: '1rem'}}>
              <span style={{background: '#f1f3f4', color: '#1a1a1a', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem', border: '1px solid rgba(0,0,0,0.1)'}}>React</span>
              <span style={{background: '#f1f3f4', color: '#1a1a1a', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem', border: '1px solid rgba(0,0,0,0.1)'}}>Node.js</span>
              <span style={{background: '#f1f3f4', color: '#1a1a1a', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', border: '1px solid rgba(0,0,0,0.1)'}}>MongoDB</span>
            </div>
          </div>
          
          <div className="project-card" onClick={taskmanager}>
            <h3 style={{color: '#1a1a1a', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '600'}}>Task Management App</h3>
            <p style={{color: '#4a4a4a', fontSize: '1rem', lineHeight: '1.6'}}>A collaborative task management application with real-time updates.</p>
            <div style={{marginTop: '1rem'}}>
              <span style={{background: '#f1f3f4', color: '#1a1a1a', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem', border: '1px solid rgba(0,0,0,0.1)'}}>Node.js</span>
              <span style={{background: '#f1f3f4', color: '#1a1a1a', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem', border: '1px solid rgba(0,0,0,0.1)'}}>Express</span>
              <span style={{background: '#f1f3f4', color: '#1a1a1a', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', border: '1px solid rgba(0,0,0,0.1)'}}>MongoDB</span>
            </div>
          </div>
          
        </div>
          <button className="home-btn" onClick={projects}>Find out more about these Projects</button>
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in discussing technology and innovation. Let's create something amazing together!</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          <div style={{background: 'rgba(255,255,255,0.8)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <h4 style={{color: '#9ca3af', marginBottom: '0.5rem', fontWeight: '600'}}>Email</h4>
            <p style={{color: '#4a4a4a', margin: '0'}}>stephaniesomadee@gmail.com</p>
          </div>
          <div style={{background: 'rgba(255,255,255,0.8)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <h4 style={{color: '#9ca3af', marginBottom: '0.5rem', fontWeight: '600'}}>LinkedIn</h4>
            <p style={{color: '#4a4a4a', margin: '0'}}>linkedin.com/in/stephanie-somade-4342131b1/</p>
          </div>
          <div style={{background: 'rgba(255,255,255,0.8)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <h4 style={{color: '#9ca3af', marginBottom: '0.5rem', fontWeight: '600'}}>GitHub</h4>
            <p style={{color: '#4a4a4a', margin: '0'}}>github.com/stephaniesomade</p>
          </div>
        </div>
      </section>
    </div>
  );
}
