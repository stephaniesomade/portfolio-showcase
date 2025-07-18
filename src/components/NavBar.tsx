import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css'

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         Stephanie Somade [logo here soon]
//       </Link>
//       <div className="nav-links">
//         <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
//           Home
//         </NavLink>
//         <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
//           About
//         </NavLink>
//         <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
//           Projects
//         </NavLink>
//         <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
//           Contact
//         </NavLink>
//       </div>
//     </nav>
//   );
// };
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;