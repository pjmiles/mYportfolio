// import { render } from "@testing-library/react";
import styled from "styled-components";
// import profileImage from "../../images/profileImage.jpg";

export const StlyedAboutCard = styled.div`
  max-width: 50rem;
  margin: 4rem auto;
  box-shadow: var(--box-shadow);
  display: flex;

  @media screen and (max-width: 768px){
    background: var(--primary-dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  padding: 1rem 1rem;
  margin-top: 30px;
`;

export const ProfileText = styled.div`
  background-color: var(--primary-yellow);
  color: var(--primary-dark);
  font-weight: 600;

  h1 {
    padding: 15px;
    font-size: 25px;
    font-weight: 600;
  }

  p {
    padding: 15px;
  }
`

// render(
//   <StlyedAboutCard>
//     <ProfileImage />
//   </StlyedAboutCard>
// );
