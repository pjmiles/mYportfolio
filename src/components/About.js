import "../styles/About.css";
import profileImage from "../images/profileImage.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="text">Hi, I'm Ponmile</h1>
          <br />I love building amazing app
          <p className="about-bio">
            I specializes in react and love building stidis hdsn sjdvg\sjs bvgs
            dsdvsghd nmkvhjs sjksvhdjks sdjvhjks sjkfhvsjkd shj shjk
          </p>
        </div>
        <div className="hero-image">
          <img alt="ponmile" src={profileImage} className="my-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
