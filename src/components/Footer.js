import { FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
const links = [
  {
    id: 1,
    icon: <FaFacebookF />,
    href: "https://web.facebook.com/oluwaponmile.j.adebisi/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    href: "https://github.com/pjmiles",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    href: "https://github.com/pjmiles",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    href: "https://github.com/pjmiles",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
  return (
    <footer className="footer-section">
      <div className="footer-icons">
        <a
          href="https://web.facebook.com/oluwaponmile.j.adebisi/"
          target="_blank"
          rel="noreferrer"
          className="foot-icon"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://web.facebook.com/oluwaponmile.j.adebisi/"
          target="_blank"
          rel="noreferrer"
          className="foot-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/pjmiles"
          target="_blank"
          rel="noreferrer"
          className="foot-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/pjmiles"
          target="_blank"
          rel="noreferrer"
          className="foot-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://web.facebook.com/oluwaponmile.j.adebisi/"
          target="_blank"
          rel="noreferrer"
          className="foot-icon"
        >
          <FaFacebookF />
        </a>
        <p className="footer-text">
          Copyright &copy; {yearTxt} - Created by Ponmile Adebisi
        </p>
      </div>

      {/* <div>
        {links.map(({ id, icon, href }) => {
          <ul key={id}>
            <Link to={href} className="foot-icon">{icon}</Link>
          </ul>;
        })}
      </div> */}
    </footer>
  );
};

export default Footer;
