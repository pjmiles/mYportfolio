import { StlyedAboutCard } from "./AboutCardStyle";
import { ProfileImage } from "./AboutCardStyle";
import { ProfileText } from "./AboutCardStyle";
import profileImage from "../../images/profileImage.jpg";

const AboutCard = () => {
  return (
    <StlyedAboutCard>
      <ProfileImage src={profileImage} />
      <ProfileText>
        <h1>About Me</h1>
        <p>
          My name is Ponmile Adebisi, a Software Engineer who is creative and
          innovative. I have fundamental knowledge of software design and
          development including front-end and back-end technologies. I am
          currently learning Typescript, ReactJS and ExpressJS alongside other
          frontend and backend technologies. My goal is to gain a good
          understanding of current systems, and to be able to build on that as
          things inevitably change.
        </p>
      </ProfileText>
    </StlyedAboutCard>
  );
};

export default AboutCard;
