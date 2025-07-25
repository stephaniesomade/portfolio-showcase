import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {

  const navigate = useNavigate();

  const handleSeeCV = () => {
    navigate('/resume')
  }

  return (
    <div className="title">
      <div className="profile-section">
        <img src="src/assets/me.jpeg" alt="Stephanie Somade" className="title-image" />
        <div className="profile-text">
          <h1>Stephanie<br />Somade</h1>
          <p className="role">Software Engineer</p>
          <button className="cv-btn" onClick={handleSeeCV}>See CV</button>
        </div>
      </div>
      <nav className="profile-nav">
        <a href="#bio">Bio</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <section id="bio" className="bio-section">
        <h2>Bio</h2>
        <p>Welcome to my bio section. Here you can learn more about my background, experience, and passion for software engineering.</p>
      </section>
      <section id="portfolio" className="portfolio-section">
        <h2>Portfolio</h2>
        <p>Explore my portfolio showcasing various projects and technical skills I've developed throughout my career.</p>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Get in touch with me for collaboration opportunities, questions, or just to say hello!</p>
      </section>
    </div>
  );
}
