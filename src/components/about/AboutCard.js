import { StlyedAboutCard } from "./AboutCardStyle";
import { ProfileImage } from "./AboutCardStyle";
import { ProfileText } from "./AboutCardStyle";
import profileImage from "../../images/profileImage.jpg"

const AboutCard = () => {
  return (
  <StlyedAboutCard>
    <ProfileImage src={profileImage}/>
    <ProfileText>
      <h1>About Me</h1>
      <p>My name is Ponmile Adebisi</p>
    </ProfileText>
  </StlyedAboutCard>
  )
};

export default AboutCard;
