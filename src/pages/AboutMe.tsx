import '../styles/AboutMe.css';
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
  const navigate = useNavigate();

  const contact = () => {
    navigate('/#contact')
  }
  const projects = () => {
    navigate('/projects')
  }

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content" id="aboutme-title">
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
                <p>It's funny how paths diverge. My journey into the world of tech didn't begin with a childhood fascination or a clear career goal. It started with a quiet discouragement in secondary school. I distinctly remember sidestepping the Computing GCSE, largely because it felt like an overwhelmingly male-dominated space. That is a decision that, looking back, was a missed opportunity born from societal pressures rather than genuine disinterest.</p>
                <p>Fast forward six years, and I found myself adrift, grappling with a sense of uninspiration as I navigated the complexities of climbing the corporate ladder. I had completed my law degree and began working in the courts. It offered invaluable exposure, and there were aspects of the legal field I genuinely appreciated.</p>
                <p>Yet, deep down, there was a growing realisation that despite the intellectual challenge, law might not be the career best suited to my strengths. It was a comfortable discomfort, a path I felt I should pursue rather than one that truly ignited me.</p>
                <p>During this period, a seemingly casual habit began to plant a seed: I'd found myself saving countless TikToks about coding. They were just snippets, glimpses into a world that felt both alien, but at the time, there was no real, burning desire to follow up on them. They just existed in my saved folder, a digital curiousity.</p>
                <p>The real turning point arrived after a series of setbacks. My third failed interview in the legal field hit hard, but it also became a catalyst. It pushed me to confront that nagging feeling and I actively sought a way to showcase my genuine passion for Intellectual Property (IP). After brainstorming, the idea clicked: to truly understand the digital landscape of IP, perhaps I needed to learn the very language it was built upon. So, I decided to teach myself a little HTML and CSS. An innocent quest.</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">02</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>Diving Deep 🏊‍♀️</h3>
                <p>I dove into FreeCodeCamp, I found myself captivated by the little lessons. With the immediate feedback and the tangible results of my code on screen, I pushed myself and I earned my certificate in a mere two weeks. I knew I loved learning but this felt different. It was really quite... fun?</p>
                <p>Mentioning this newfound enthusiasm to a friend casually led to them introducing me to the Makers' pathway. Initially I remember dismissing it. The cynical voice in my head told me this was just another fleeting hobby, another rabbit hole that would ultimately lead to nowhere.</p>
                <p>Like many other people, I'd started so many things, only to let them fizzle out. But with a little gentle yet persistent convincing, a push from someone who saw potential I hadn't yet fully embraced, a different thought began to emerge: "What do I truly have to lose by simply applying?"</p>
                <p>The response from Makers was astonishing. They got back to me with such genuine enthusiasm and unwavering faith in my potential. After the string of rejections I had faced, their belief in me felt incredibly gratifying. A much bigger part of me, one I hadn't truly listened to before, surged with the certainty that I had finally, truly, found something I could not only be good at, but something I was genuinely passionate about.</p>
                <p>It felt like coming home.</p>
                <p>After finding that spark, I committed. I remember buying my very first monitor and a solid keyboard. Though only £100, for me it really was a tangible investment. An investment into myself, an investment into my journey. An investment into my capability. A declaration to myself that 'this is it, I'm doing this for real, there's no turning back'. I started learning before work, after work, during my lunch breaks, on the weekend, just completely immersing myself.</p>
                <p>Makers were awesome. They kept in close contact and pushed me through the stages.</p>
                <p>Things moved fast. From my first application to the confirmation of my first interview via Makers, it took about two months.
                </p>
                <p>As crazy at it sounds, I got the job!</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">03</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>First Steps into the Real World 👩‍💼</h3>
                <p>My first role at News UK started with a bootcamp, then team rotations. It was challenging, quite confronting, and definitely scary at times.</p>
                <p>Working with designers, across different teams and with senior software engineers, I quickly saw how code directly impacted daily work. That immediate connection made it all click. </p>
                <p>I was definitely thrown in the deep end, but in the best possible way. I got to work hand-in-hand with talented people and truly see how the code I was writing directly impacted real daily workflows. It wasn't just abstract concepts anymore; it was tangible, immediate, and impactful. It was the first time I could see I was a part of something much bigger.</p>
                <p>Right away, I got into the rhythm of making regular releases, which was a huge part of understanding the real-world dev cycle. I also started pushing myself to contribute to team strategy conversations, really getting into the deeper 'why' behind what we were building. I was completely immersing myself in the fast-paced world of ad tech, soaking it all in. The biggest highlight? Having the team genuinely acknowledge how I contributed, even as a newbie.</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">04</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>Making My Mark 🎯</h3>
                <p>As I settled in and grew more confident, I got to dive into some big projects. One of my proudest moments was building a new platform specifically for a non-tech team. It meant they could make changes that usually required digging into GitHub, but without ever having to touch GitHub themselves which was a huge win for their workflow and efficiency.</p>
                <p>Another massive project involved creating a whole new distribution for a sub-brand. This was a proper deep dive! I worked on everything from setting up new ad slots and changing ad text on the front-end, through the middleware, and right into the backend. That included getting hands-on with AWS, Docker, setting up subdomains, and managing the entire distribution process. What's cool is, I did all of this as an apprentice, which felt pretty awesome.</p>
                <p>And honestly, all that hard work really paid off in an unexpected way. I was even nominated for the BUPA Apprentice of the Year award in 2024 and featured in Student Circuit for my journey into tech. That felt like such a huge moment of validation, truly confirming that I was on the right track and making a real impact.</p>
              </div>
            </div>



            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">05</span>
                <div className="chapter-line"></div>
              </div>
              <div className="chapter-content">
                <h3>Growing & Learning 📈</h3>
                <p>After my promotion as a junior software engineer, I unexpectedly discovered a real love for mentoring. Working closely with apprentices and helping them navigate their own learning journeys has been incredibly rewarding.</p>
                <p>Seeing them overcome challenges, just like I did, constantly reminds me why I fell in love with coding in the first place, that pure satisfaction of solving a problem.</p>
                <p>When a tricky concept finally clicks for someone, and you see their face light up with understanding, it is just incredibly cool. It's a powerful reminder of how rewarding it is to break down complex ideas and help someone else unlock their own potential. That's a huge part of what drives me now.</p>
              </div>
            </div>

            <div className="journey-chapter">
              <div className="chapter-marker">
                <span className="chapter-number">05</span>
                <div className="chapter-line last"></div>
              </div>
              <div className="chapter-content">
                <h3>Where I Am Today 🌟</h3>
                <p>Looking back at where I started, it's wild to think how far I've come. Today, I'm fully immersed as a Junior Full-stack Software Engineer with a promotion pending. That initial spark, the frustration with law, the 'aha!' moments with code. It all led me here.</p>
                <p>Today, I'm focused on building applications that don't just work well, but feel delightful to use. I believe that good software should be invisible - it should just make people's lives easier without them having to think about it.</p>
                <p>I contribute to production-ready code that directly impacts revenue. My role spans both frontend and backend development (Prebid, bidding, etc) that gets injected into high-traffic news sites such as The Sun and The Times. I am trusted to independently deliver work, review code, and collaborate cross-functionally with stakeholders.</p>
                <p>I've been able to contribute to the team in a number of ways. For example I have optimised JavaScript to reduce main thread blocking, leading to a reduction of 1850ms in load time. Additionally I have rolled out a Lambda-based dynamic floor pricing system, integrating it into the ad stack and collaborating cross-functionally with product and QA teams.</p>
                <p>I helped delivered end to end the transition to cookie-less tracking alternatives for key advertising partners, ensuring full GDPR compliance and maintaining data accuracy during the shift.</p>
                <p>Internally, I have been nominated twice for company-wide recognition: Rising Star of the Year 2025 and Team Member of the Year 2025.</p>
                <p>Alongside technical growth, I have been deeply involved in culture and inclusion initiatives. I completed the DEI co-mentoring programme in partnership with Sopra Steria. It is a cross-industry mentoring scheme designed to foster equity and mutual learning across underrepresented groups in tech. This programme was extremely important to me as it directly connects my passion for technology with my commitment to building a more diverse and welcoming industry for everyone.</p>
                <p>I'm constantly eager to learn new tech, explore different ways to solve problems, and contribute to projects that have a real impact. And of course, that passion for helping others, especially new developers, is something I'll always carry forward. My journey has shown me how powerful it is to find what you're truly good at and what truly excites you. I'm just excited to see what's next and keep building.</p>
                <div className="journey-quote">
                  <blockquote>
                    "The best code I've ever written isn't the most clever or complex - it's the code that made someone's day a little bit easier. Honestly, the journey of making that happen is the most rewarding part."
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
            <p>I'm secretly obsessed with colouring with alcohol markers. The only thing that keep me sane outside of gym and code.</p>
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
            <p>I believe in pushing boundaries and finding creative solutions to complex problems. There is no such thing as no!</p>
          </div>
          <div className="value-item">
            <h4>🤝 Collaboration</h4>
            <p>The best projects happen when diverse minds come together to build something amazing. It feels like art.</p>
          </div>
          <div className="value-item">
            <h4>🌍 Impact</h4>
            <p>Technology should make the world a little bit better, one line of code at a time.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <p>I'm always excited to collaborate on projects that challenge me and make a difference.</p>
        <div className="cta-buttons">
          <button className="about-btn primary" onClick={contact}>Get in Touch</button>
          <button className="about-btn secondary" onClick={projects}>See my work</button>
        </div>
      </div>
    </div>
  );
}