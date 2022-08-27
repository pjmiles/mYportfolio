import { useState } from "react";
import StyledHammbuber from "./Hammburger.styled";
const Hammburger = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledHammbuber open={open} onClick={handleToggle}>
      <span />
      <span />
      <span />
    </StyledHammbuber>
  );
};

export default Hammburger;
