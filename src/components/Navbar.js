// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import Hammburger from "./hammburger/Hammbuger";
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ponmile Adebisi
        </a>

        <Hammburger />

        <div className="collapse navbar-collapse">
          {/* <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item"><a className="nav-link" href="#">About me</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Experiences</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contacts</a></li>
        </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
