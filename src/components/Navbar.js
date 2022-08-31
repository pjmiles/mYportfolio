import { NavLink } from "react-router-dom";
import Hammburger from "./hammburger/Hammbuger";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <NavLink className="navbar-brand" to="">
          Ponmile Adebisi
        </NavLink>
        <Hammburger />
      </div>
    </nav>
  );
};

export default Navbar;
