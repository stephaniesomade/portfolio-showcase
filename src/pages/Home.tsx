import '../styles/Home.css';

export default function Home() {
  return (
    <div className="title">
      <div className="profile-section">
        <img src="src/assets/me.jpeg" alt="Stephanie Somade" className="title-image" />
        <div className="profile-text">
          <h1>Stephanie<br />Somade</h1>
          <p className="role">Software Engineer</p>
          <button className="cv-btn">See CV</button>
        </div>
      </div>
      <nav className="profile-nav">
        <a href="#bio">Bio</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <section id="bio" className="bio-section">
        <h2>Bio</h2>
      </section>
    </div>
  );
}
