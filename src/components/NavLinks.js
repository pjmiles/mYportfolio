import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinks = ({ open }) => {
  const NavItems = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 18px;
      font-size: 20px;
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
      padding-top: 60px;
      padding-left: 50px;

      a {
        color: #fcfcfc;
      }
    }
  `;
  return (
    <NavItems open={open}>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="">Skills</Link>
      </li>
      <li>
        <Link to="">Projects</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>
    </NavItems>
  );
};

export default NavLinks;
