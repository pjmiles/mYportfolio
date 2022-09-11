import { HashLink as NavLink } from "react-router-hash-link";
// import Hammburger from "./hammburger/Hammbuger";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navbar ">
      <div className="nav-section container">
        <div className="brand-name">Ponmile Adebisi</div>
        <FaBars className="hammburger" />
        <ul className="nav-side">
          <li className="nav-item">
            <NavLink
              to="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : "nav-item"}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="#skills"
              onClick={() => setActiveNav("#skills")}
              className={activeNav === "#skills" ? "active" : "nav-item"}
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="#projects"
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : "nav-item"}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : "nav-item"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
