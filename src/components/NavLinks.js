import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 18px;
    font-size: 16px;
    text-decoration: none;
  }

  a {
    text-decoration: none; //to remove default text decoration associated with Link
  }

  a:hover {
    border-bottom: 0.1875rem solid var(--secondary-shadow);
  }

  @media (max-width: 768px) {
    position: fixed;
    flex-flow: column nowrap;
    background: #443355;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 50px;
    padding-left: 50px;
    opacity: 0.8;

    a {
      color: #fcfcfc;
      text-decoration: none;
    }
  }
`;

const NavLinks = ({ open }) => {
  return (
    <NavItems open={open}>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </NavItems>
  );
};

export default NavLinks;
