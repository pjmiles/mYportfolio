// import { NavLink } from "react-router-dom";
// import Hammburger from "./hammburger/Hammbuger";
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import '../styles/Navbar.css'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="navbar ">
      <div className="nav-section container">
        <div className="brand-name">Ponmile Adebisi</div>
        <FaBars className="hammburger" />
        <ul className="nav-side">
          <li className="nav-item"><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : 'nav-item'}>About</a></li>
          <li className="nav-item"><a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : 'nav-item'}>Skills</a></li>
          <li className="nav-item"><a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : 'nav-item'}>Projects</a></li>
          <li className="nav-item"><a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : 'nav-item'}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
