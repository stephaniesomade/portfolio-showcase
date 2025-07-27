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
            Stephanie Somade is an emerging talent at News UK, who has joined News UK as an apprentice, and is working on developing herself and her career. As her mentor I can see she is actively seeking to improve and I'm immensely proud to work with her on this journey. Her 'can do' attitude and her engineering skills pushes her to greater strengths each day and she is an amazing asset at News UK.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Helen Van Der Straaten</h4>
              <p>Head of Tech PMO/VMO, News UK</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            Steph has become a core member of our team since joining as an apprentice almost a year ago. She is enthusiastic and proactive when it comes to picking up more work, takes initiative when blocked by reaching out to other team members, and is always willing to take on more challenging projects/pieces of work.
          </p>
            <p className='testimonial-text'> I hope that Steph will continue to challenge herself by taking on more and more complex features. She has thrown herself into learning as much as she can and has contributed a lot to our team's delivery. Steph has also become a great supporter for our other apprentices, giving guidance when they need help, pair programming etc. All in all, Steph is a very capable junior engineer and is a pleasure to work with.</p>
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
          Stephanie has shown a keen eye for detail and quality growing in her ability during her time so far within the Commercial Tech team taking on new challenges and handling new design pattern concepts across different projects with confidence.
          </p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Daniel Moll Morgan</h4>
              <p>Lead Developer, News UK</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="quote-mark">"</div>
        <p className="testimonial-text">
          Since joining the Commercial Engineering team, Stephanie has exhibited commitment to her role as an apprentice and has shown a genuine passion for learning and growth in the field. During her apprenticeship, Stephanie has contributed to the team and consistently exceeded expectations. One of her most commendable attributes is her strong problem-solving skills. She has repeatedly demonstrated her ability to tackle complex technical challenges with creativity and precision. 
        </p>
          <p className='testimonial-text'>Stephanie has not only excelled in her technical role but has also actively contributed to the growth and success of our team. Her leadership potential is evident in her mentorship of other junior team members. Stephanie’s remarkable technical skills, and her commitment to fostering a positive and inclusive work environment makes her an outstanding candidate for this recognition. I am confident that Stephanie will continue to achieve great things in her software engineering career.</p>
          <p className='testimonial-text'>She has shown enthusiasm for learning new technologies and programming libraries and frameworks, such as Angular and Redux-sagas which has had a positive impact on the team. Stephanie has also been a wonderful team player, always willing to collaborate, share knowledge, and offer support to her colleagues. Her communication, adaptability, and professionalism make her a joy to work with. </p>
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
            Stephanie is a truly outstanding apprentice; from our first meeting, she demonstrated a number of skills that she has utilised on her journey to success, showcasing her proactivity, organisation and dedication to software engineering.
            Stephanie’s employer took the decision to rotate their apprentices, beginning a carousel of learning that many apprentices would find daunting, but not Stephanie. Whether the work was front-end, back-end or full stack, Stephanie took each and every opportunity to learn and evidence her abilities through meaningful, high-quality work. This approach earned her positive feedback in each team but especially so in her last rotation where Stephanie’s logical mind and aptitude for problem solving were a perfect match for the team’s projects. 
          </p>
            <p className="testimonial-text">Indeed, her line manager in this team was astounded at the complexity of work Stephanie took on, explaining that it would typically take a senior engineer at least six months to get to grips with the learning curve in this team. Stephanie relished and rose to that challenge, working independently on tickets in just a few short weeks.
            Stephanie is especially adept at finding different ways to learn, whether through independent research and application or by shadowing a colleague, Stephanie is consistently looking to learn and grow as a developer. Indeed, Stephanie had to be particularly proactive in managing her learning when she found one of the teams in her workplace was not set up to work with apprentices due to a number of constraints around resourcing and workflow. This was right at the beginning of her placement period and again, many apprentices would have found this challenging or expected their training provider to resolve the situation for them. Instead, Stephanie displayed resilience, recognised that her team were facing challenges and contributed as much as she possibly could in that rotation. </p>
            
            <p className="testimonial-text">In her next rotation, Stephanie advocated for her own learning and ensured her team mates were aware of her development needs for her apprenticeship, proactively seeking out as much shadowing and pairing as possible.
            As a young professional, Stephanie conducts herself with dedication and passion for her new field. She always prepares for her meetings in advance and is quick to call attention to the support of her colleagues when successful. Stephanie recognises that development is a collaborative field and she is perfectly placed to excel in her future career.
            .</p>
          <div className="testimonial-author">
            <div className="author-info">
              <h4>Natalie Rossiter</h4>
              <p>Placement Coach, Makers Academy</p>
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