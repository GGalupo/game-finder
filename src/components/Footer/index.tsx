import { ImHeart } from "react-icons/im";

import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Data loaded from:{" "}
        <a href="MMOBomb.com" rel="noreferrer">
          MMOBomb
        </a>
      </span>
      <span>
        Made with <ImHeart /> by{" "}
        <a href="https://github.com/GGalupo" rel="noreferrer">
          GGalupo
        </a>
      </span>
    </StyledFooter>
  );
};
