import { FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
  return (
    <footer className="footer-section">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/ponmileadebisi/"
          target="_blank"
          rel="noreferrer"
          className="foot-icon"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/ponmilejames/"
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
          href="https://twitter.com/adebisiponmile"
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
    </footer>
  );
};

export default Footer;
