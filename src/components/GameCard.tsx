import { StyledContainer } from "./styles";

import { Game } from "../types";
import { memo } from "react";

interface GameCardProps {
  game: Game;
}

const GameCardComponent = ({ game }: GameCardProps) => {
  return (
    <StyledContainer>
      <span>{game.title}</span>
    </StyledContainer>
  );
};

export const GameCard = memo(GameCardComponent);
