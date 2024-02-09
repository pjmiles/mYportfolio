import "../styles/About.css";
import profileImage from "../assets/ponmile_james_adebisi.jpg";
import ReactTyped from "react-typed";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div>
        <img alt="ponmile" src={profileImage} className="my-image" />
      </div>

      <div className="about-header">
        <p className="about-bio">
          Hey, I'm{" "}
          <span>
            <ReactTyped
              strings={["Ponmile"]}
              typeSpeed={200}
              backSpeed={100}
              cursorChar=">"
              showCursor={true}
              loop
            />
          </span>
          ,
          <p>
            A <span>Software Developer</span>. I specialize in crafting
            tailor-made software solutions to address the unique requirements of
            businesses.
          </p>
        </p>
      </div>
    </section>
  );
};

export default About;
