import { Link } from "react-router-dom";
import Hammburger from "./hammburger/Hammbuger";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <Link className="navbar-brand" to="">
          Ponmile Adebisi
        </Link>

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
