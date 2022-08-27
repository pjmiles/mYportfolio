import styled from "styled-components";

const StyledHammbuber = styled.span`
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 12px;
  right: 20px;
  z-index: 20;
  cursor: pointer;

  /* Hammburger query to show on mobile view only */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  /* Hammburger styling including passing the open function when clicked */
  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#800080" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    /* to translate the upper div and lower div of the hammburger to X on clicked */
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default StyledHammbuber;
