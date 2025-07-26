import '../styles/Testimonials.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Testimonials() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const contact = () => {
    navigate('/contact');
  }

  const aboutMe = () => {
    navigate('/aboutme');
  }

  return (
    <div className="testimonials-container">
      <div className="testimonials-hero">
        <div className="hero-content">
          <h1>What People Say</h1>
          <p className="hero-subtitle">Kind words from colleagues, mentors, and collaborators who've worked with me along my journey.</p>
        </div>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            Stephanie.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Erica Boughtwood</h4>
              <p>Head of Commerical Technology, News UK</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            Stephanie.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Ovidiu Stefan-Bokar</h4>
              <p>Head of Commercial Engineering, News UK</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            Stephanie.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>X</h4>
              <p>Mentor, Makers Academy</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            Stephanie.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Helen Van Der Straaten</h4>
              <p>PMO/Mentor, News UK</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            Stephanie.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Daniel Moll Morgan</h4>
              <p>Lead Developer, News UK</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>I'm always excited to connect with new people and explore opportunities for collaboration.</p>
        <div className="cta-buttons">
          <button className="testimonials-btn primary" onClick={contact}>Get in Touch</button>
          <button className="testimonials-btn secondary" onClick={aboutMe}>Learn More About Me</button>
        </div>
      </div>
    </div>
  );
}