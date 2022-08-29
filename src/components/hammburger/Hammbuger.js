import { useState } from "react";
import StyledLinks from "../NavLinks";
import StyledHammburger from "./HammburgerStyle";
const Hammburger = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledHammburger open={open} onClick={handleToggle}>
        <span />
        <span />
        <span />
      </StyledHammburger>
      <StyledLinks open={open} />
    </>
  );
};

export default Hammburger;
