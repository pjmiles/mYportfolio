import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/pjmiles_logo.jpg"
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [displayMenu, setDisplayMenu] = useState(false);
  const handleToggle = () => {
    setDisplayMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setDisplayMenu(false)
  }

  return (
    <nav className="navbar ">
      {/* <h1 className="brand-name">Ponmile Adebisi</h1> */}
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo-image"/>
      </div>
      <ul className={`${displayMenu ? "show" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="#about"
            onClick={() => setActiveNav("#about") `${closeMenu()}`}
            className={activeNav === "#about" ? "active" : "nav-item"}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="#skills"
            onClick={() => setActiveNav("#skills")  `${closeMenu()}`}
            className={activeNav === "#skills" ? "active" : "nav-item"}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="#projects"
            onClick={() => setActiveNav("#projects") `${closeMenu()}`}
            className={activeNav === "#projects" ? "active" : "nav-item"}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="#contact"
            onClick={() => setActiveNav("#contact") `${closeMenu()}`}
            className={activeNav === "#contact" ? "active" : "nav-item"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="burger-menu">
        <span onClick={handleToggle}>
          {displayMenu ? (<FaBars className="hammburger" />): (<FaBars className="hammburger" />)}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
