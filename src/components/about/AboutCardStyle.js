// import { render } from "@testing-library/react";
import styled from "styled-components";
// import profileImage from "../../images/profileImage.jpg";

export const StlyedAboutCard = styled.div`
  max-width: 45rem;
  margin: 2rem auto;
  box-shadow: var(--box-shadow);

  @media(max-width: 768px) {
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  padding: 1rem 1rem;
`;

export const ProfileText = styled.div`
  background-color: var(--primary-yellow);
  color: var(--primary-dark);
  font-weight: 600;

  h1 {
    padding: 15px;
    font-size: 20px ;
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
