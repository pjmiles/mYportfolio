import { FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
    <footer>
      Footer section
      {/* <div>
        {links.map(({ id, icon, href }) => {
          <ul>
            <a href={href} >{icon}</a>
          </ul>;
        })}
      </div> */}
    </footer>
  );
};

export default Footer;
