import { FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
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
  return (
    <footer className="footer-section">
      Footer section
      <div>
        {links.map(({ id, icon, href }) => {
          <ul key={id}>
            <Link to={href} className="foot-icon">{icon}</Link>
          </ul>;
        })}
      </div>
    </footer>
  );
};

export default Footer;
