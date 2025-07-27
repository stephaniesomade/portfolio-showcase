import '../../styles/ProjectDetail.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import weatherImage from '../../assets/weather.jpeg';

export default function WeatherApp() {
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
            <div className="project-placeholder-large">🌤️</div>
          </div>
          <div className="project-info">
            <h1>Weather App</h1>
            <p className="project-description">A modern weather application with real-time data, location-based forecasts, and beautiful UI animations. Features include current weather conditions, 7-day forecasts, and interactive weather maps.</p>
            <div className="tech-stack-large">
              <span className="tech-tag-large">React</span>
              <span className="tech-tag-large">TypeScript</span>
              <span className="tech-tag-large">OpenWeather API</span>
              <span className="tech-tag-large">CSS Animations</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/stephaniesomade/weather-app" className="project-link secondary">View Code</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="content-section">
          <h2>Project Overview</h2>
          <p>This weather application was built to provide users with accurate, real-time weather information in a beautiful and intuitive interface. The app leverages the OpenWeather API to fetch current conditions and forecasts, presenting the data through smooth animations and responsive design.</p>
        </div>

        <div className="content-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌡️</div>
              <h3>Real-time Data</h3>
              <p>Live weather updates with current temperature, humidity, and atmospheric conditions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Location-based</h3>
              <p>You can search manually for a city temperature worldwide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful UI</h3>
              <p>Smooth animations and responsive design that works across all devices.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Technical Implementation</h2>
          <p>Built with React and TypeScript for type safety and maintainable code. The application uses modern React hooks for state management and implements custom animations using CSS transitions. The OpenWeather API integration provides reliable weather data with proper error handling and loading states.</p>

          <div className="tech-details">
            <div className="tech-detail">
              <h4>Frontend</h4>
              <ul>
                <li>React 18 with TypeScript</li>
                <li>Custom CSS animations</li>
                <li>Responsive design principles</li>
                <li>Modern ES6+ features</li>
              </ul>
            </div>
            <div className="tech-detail">
              <h4>API Integration</h4>
              <ul>
                <li>OpenWeather API</li>
                <li>Geolocation API</li>
                <li>Error handling & fallbacks</li>
                <li>Data caching strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Challenges & Solutions</h2>
          <p>One of the main challenges was handling various weather conditions and presenting them in a visually appealing way. I solved this by creating a comprehensive icon system and implementing smooth transitions between different weather states. Additionally, optimizing API calls and implementing proper error handling ensured a smooth user experience even with poor network conditions.</p>
        </div>

        <div className="content-section">
          <h2>Project Screenshot</h2>
          <div className="project-screenshot-container">
            <img src={weatherImage} alt="Weather App Screenshot" className="project-screenshot" />
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Interested in Similar Projects?</h2>
        <p>I'd love to discuss how we can build something amazing together. Let's connect and explore possibilities!</p>
        <div className="cta-buttons">
          <button className="detail-btn primary" onClick={contact}>Get in Touch</button>
          <button className="detail-btn secondary" onClick={backToProjects}>View More Projects</button>
        </div>
      </div>
    </div>
  );
}
