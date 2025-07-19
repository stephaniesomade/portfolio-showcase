import { NavLink } from "react-router-dom";
import { useState } from "react";
import '../styles/NavBar.css'
import Logo from "./Logo";

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "logo-link active" : "logo-link"}>
        <Logo />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/resume" end className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/aboutme" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink>
      </div>

      <div className="settings-dropdown">
        <button 
          className="settings-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Settings ▼
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <a href="#" onClick={() => setIsDropdownOpen(false)}>Dark Mode</a>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
