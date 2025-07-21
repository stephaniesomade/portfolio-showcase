import { NavLink } from "react-router-dom";
import '../styles/SubNavBar.css'

function SubNavBar() {
  return (
    <nav className="subnavbar">
      <div className="subnav-links">
        <NavLink to="/resume" end className={({ isActive }) => isActive ? "active" : ""}>Bio</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Contact Me</NavLink>
      </div>
    </nav>
  );
}
export default SubNavBar;
