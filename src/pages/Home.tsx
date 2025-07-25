import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {

  const navigate = useNavigate();

  const handleSeeCV = () => {
    navigate('/resume')
  }

  const aboutMe = () => {
    navigate('/aboutme')
  }

  const testimonials = () => {
    navigate('/testimonials')
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
          <div className="project-card">
            <h3 style={{color: '#8b5a6b', marginBottom: '1rem', fontSize: '1.3rem'}}>E-Commerce Platform</h3>
            <p style={{color: '#666', fontSize: '1rem', lineHeight: '1.6'}}>A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.</p>
            <div style={{marginTop: '1rem'}}>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem'}}>React</span>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem'}}>Node.js</span>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem'}}>MongoDB</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3 style={{color: '#8b5a6b', marginBottom: '1rem', fontSize: '1.3rem'}}>Task Management App</h3>
            <p style={{color: '#666', fontSize: '1rem', lineHeight: '1.6'}}>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
            <div style={{marginTop: '1rem'}}>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem'}}>Vue.js</span>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem'}}>Firebase</span>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem'}}>WebSocket</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3 style={{color: '#8b5a6b', marginBottom: '1rem', fontSize: '1.3rem'}}>Data Visualization Dashboard</h3>
            <p style={{color: '#666', fontSize: '1rem', lineHeight: '1.6'}}>An interactive dashboard for data analysis and visualization, featuring custom charts, filters, and export functionality.</p>
            <div style={{marginTop: '1rem'}}>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem'}}>D3.js</span>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', marginRight: '0.5rem'}}>Python</span>
              <span style={{background: '#f0e6f7', color: '#8b5a6b', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem'}}>PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in discussing technology and innovation. Let's create something amazing together!</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          <div style={{background: 'rgba(255,255,255,0.6)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center'}}>
            <h4 style={{color: '#8b5a6b', marginBottom: '0.5rem'}}>Email</h4>
            <p style={{color: '#666', margin: '0'}}>stephaniesomadee@gmail.com</p>
          </div>
          <div style={{background: 'rgba(255,255,255,0.6)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center'}}>
            <h4 style={{color: '#8b5a6b', marginBottom: '0.5rem'}}>LinkedIn</h4>
            <p style={{color: '#666', margin: '0'}}>linkedin.com/in/stephanie-somade</p>
          </div>
          <div style={{background: 'rgba(255,255,255,0.6)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center'}}>
            <h4 style={{color: '#8b5a6b', marginBottom: '0.5rem'}}>GitHub</h4>
            <p style={{color: '#666', margin: '0'}}>github.com/stephaniesomadee</p>
          </div>
        </div>
      </section>
    </div>
  );
}
