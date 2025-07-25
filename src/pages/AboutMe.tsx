import '../styles/AboutMe.css';
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
  const navigate = useNavigate();

  const contact = () => { 
    navigate('/contact')
  }
  const projects = () => { 
    navigate('/projects')
  }

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1>I'm Stephanie.</h1>
          <p className="hero-subtitle">A passionate software engineer who loves creating beautiful digital experiences with robust capabilities.</p>
        </div>
        <div className="hero-image">
          <img src="src/assets/me-aboutme.png" alt="Stephanie Somade" className="profile-image" />
        </div>
      </div>

      <div className="interests-section">
        <div className="interests-grid">
          <div className="interests-card">
            <h3>What I Love Building</h3>
            <div className="tag-container">
              <span className="tag">Web Applications</span>
              <span className="tag">User Interfaces</span>
              <span className="tag">Infrastructure</span>
              <span className="tag">Data Visualizations</span>
              <span className="tag">API Integrations</span>
              <span className="tag">Programmatic Advertising</span>
              <span className="tag">Mobile Apps</span>
            </div>
          </div>
          <div className="interests-card">
            <h3>Technologies I Adore</h3>
            <div className="tag-container">
              <span className="tag">React & TypeScript</span>
              <span className="tag">Node.js & Express</span>
              <span className="tag">Redux Saga</span>
              <span className="tag">AWS</span>
              <span className="tag">Python</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Ruby</span>
            </div>
          </div>
        </div>
      </div>

      <div className="story-section">
        <h2>My Story</h2>
        <div className="story-grid">
          <div className="story-card">
            <div className="story-icon">🌱</div>
            <h3>The Beginning</h3>
            <p>My journey into tech started with law. My love for Software Patent Protection (IP) Law led me to code. I gave myself the task of learning Ruby to showcase my interest in IP. The idea of bringing an idea to life was magical.</p>
          </div>
          <div className="story-card">
            <div className="story-icon">🚀</div>
            <h3>Growing</h3>
            <p> I dove deep into Codecademy and FreeCodeCamp, each lesson taught me something new. Just three weeks into learning I caught wind of Makers & software apprenticeships and felt there was no harm in applying. Fast forward 2 years later I had completed my apprenticeship and beginning my junior role. </p>
          </div>
          <div className="story-card">
            <div className="story-icon">💫</div>
            <h3>Today</h3>
            <p>Now I'm focused on creating user-centered applications that make a real difference. I believe, just like law, you are tasked with finding a solution to a problem a stakeholder cannot solve themselves. Nothing is more rewarding than to deliver this solution.</p>
          </div>
        </div>
      </div>

      <div className="journey-section">
        <div className="journey-content">
          <h2>The Full Journey</h2>
          <div className="journey-story">
            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">01</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>The Spark ⚡</h3>
                <p>It actually began in secondary school - didn't do Computing GCSE because it was just boys - felt discouraged.</p>
                <p>Fast forward 6 years, I felt uninspired trying to get into law. I worked in the courts, I liked the exposure but felt like potentially law wasn't best suited for me. I had seen a few TikToks about coding and saved them but had no real desire to follow back on it.</p>
                <p>I decided after my third failed interview that I would try to showcase my passion for IP. After brainstorming I decided let me learn a little HTML and CSS.</p>
                <p>I started on FreeCodeCamp and loved the little lessons, I got my certificate in 2 weeks.</p>
                <p>Mentioned to a friend and they mentioned the Makers' pathway </p>
                <p>I remember dismissing it, assuming it may be another hobby that goes nowhere. But with a little convinving I thought what do I have to lose by applying?</p>
                <p>Then they got back to me with so much enthusiasm and I was shocked at their faith in me. After all those failed interviews it felt gratifying. Small part of me had always doubted law and a bigger part of me felt like I had just found something that I could actually be good at.</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">02</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>Diving Deep 🏊‍♀️</h3>
                <p>I bought my first monitor and decided this would be my invest myself. I learnt in my spare time and got immersed in getting the certificate</p>
                <p>Makers kept in close contact with me and taught me to learn Ruby and share my Codecademy profile</p>
                <p>Makers asked for my CV and were proactive in passing me through the stages</p>
                <p>From my first appplication to my first interview via Makers, it was about 2 months. It all happened quickly and everything in me felt like I was on the right path - maybe Law was so difficult and I felt uninspired because it wasn't for me!</p>
                <p>With my first interview via Makers, I got the job!</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">03</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>First Steps into the Real World 👩‍💼</h3>
                <p>I began the bootcamp and then started rotations at my first role with News UK. It was challenging, confronting and scary.</p>
                <p>I was thrown in the deep end - I worked with designers and saw how code affected real daily workflows.</p>
                <p>The highlight was having the team acknowledge how I contributed.</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">04</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>Growing & Learning 📈</h3>
                <p>This is also when I discovered my love for mentoring. Helping junior developers navigate their own journeys reminded me why I fell in love with coding in the first place. There's something magical about that moment when someone's face lights up because they finally understand a concept.</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">05</span>
                <div className="chapter-line last"></div>
              </div>
              <div className="chapter-content">
                <h3>Where I Am Today 🌟</h3>
                <p>Today, I'm focused on building applications that don't just work well, but feel delightful to use. I believe that good software should be invisible - it should just make people's lives easier without them having to think about it.</p>
                <p>Worked well, worked with apprentice, worked with the team, collabored across teams, worked on everything from The Times front end, to wordpress, to middleware, to AWS, to infra, to Sun Ads etc.  </p>
                <p>Nomindated in team </p>
                <p>Promotion in the coming weeks </p>
                <div className="journey-quote">
                  <blockquote>
                    "The best code I've ever written isn't the most clever or complex - it's the code that made someone's day a little bit easier."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts-section">
        <h2>Fun Facts About Me</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-emoji">☕</div>
            <p>I can't code without my morning coffee ritual - it's practically a debugging tool!</p>
          </div>
          <div className="fact-card">
            <div className="fact-emoji">🎨</div>
            <p>I'm secretly obsessed with colouring with alcohol markers.</p>
          </div>
          <div className="fact-card">
            <div className="fact-emoji">📚</div>
            <p>I love a good programming books but honestly learn most things by breaking stuff and fixing it.</p>
          </div>
          <div className="fact-card">
            <div className="fact-emoji">🌙</div>
            <p>My best coding happens at 2 AM when the world is quiet and ideas flow freely.</p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>What Drives Me</h2>
        <div className="values-content">
          <div className="value-item">
            <h4>💡 Innovation</h4>
            <p>I believe in pushing boundaries and finding creative solutions to complex problems. No such thing as no!</p>
          </div>
          <div className="value-item">
            <h4>🤝 Collaboration</h4>
            <p>The best projects happen when diverse minds come together to build something amazing.</p>
          </div>
          <div className="value-item">
            <h4>🌍 Impact</h4>
            <p>Technology should make the world a little bit better, one line of code at a time.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Let's Create Something Beautiful Together!</h2>
        <p>I'm always excited to collaborate on projects that challenge me and make a difference.</p>
        <div className="cta-buttons">
        <button className="about-btn primary" onClick={contact}>Get in Touch</button>
        <button className="about-btn secondary" onClick={projects}>See my work</button>
        </div>
      </div>
    </div>
  );
}