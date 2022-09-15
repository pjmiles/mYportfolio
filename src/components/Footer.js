import { FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { ExternalLink } from "react-external-link";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
  return (
    <footer className="footer-section">
      <div className="footer-icons">
        <ExternalLink
          href="https://www.linkedin.com/in/ponmileadebisi/"
          target="_blank"
          className="foot-icon"
        >
          <AiFillLinkedin />
        </ExternalLink>
        <ExternalLink
          href="https://www.instagram.com/ponmilejames/"
          target="_blank"
          className="foot-icon"
        >
          <FaInstagram />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pjmiles"
          target="_blank"
          className="foot-icon"
        >
          <FaGithub />
        </ExternalLink>
        <ExternalLink
          href="https://twitter.com/adebisiponmile"
          target="_blank"
          className="foot-icon"
        >
          <FaTwitter />
        </ExternalLink>
        <ExternalLink
          href="https://web.facebook.com/oluwaponmile.j.adebisi/"
          target="_blank"
          className="foot-icon"
        >
          <FaFacebookF />
        </ExternalLink>
        <p className="footer-text">
          Copyright &copy; {yearTxt} - Created by Ponmile Adebisi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
