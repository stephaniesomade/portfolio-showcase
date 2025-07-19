import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/resume" end className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/aboutme" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;