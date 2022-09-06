// import { NavLink } from "react-router-dom";
// import Hammburger from "./hammburger/Hammbuger";
import { FaBars } from 'react-icons/fa'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="nav-section container">
        {/* <NavLink className="navbar-brand" to="">
          Ponmile Adebisi
        </NavLink> */}
        {/* <Hammburger /> */}
        <div className="brand-name">Ponmile Adebisi</div>
        <FaBars className="hammburger" />
        <ul className="nav-side">
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
