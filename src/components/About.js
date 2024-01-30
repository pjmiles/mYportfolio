import "../styles/About.css";
import profileImage from "../assets/ponmile_james_adebisi.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div>
         <img alt="ponmile" src={profileImage} className="my-image" />
      </div>

      <div className="about-header">
        <p className="about-bio">
          Hey, I'm <span>Ponmile.</span>,
        <p>A Software Developer. I provide custom solutions to Business needs.</p>
        </p>
      </div>
    </section>
  );
};

export default About;
