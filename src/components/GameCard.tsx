import { memo } from "react";

import Image from "next/image";

import { Game } from "../types";

import { StyledContainer } from "./styles";
import Link from "next/link";

interface GameCardProps {
  game: Game;
}

const GameCardComponent = ({ game }: GameCardProps) => {
  return (
    <StyledContainer>
      <Link href={`/${game.id.toString()}`}>
        <a>
          <Image
            src={game.thumbnail}
            alt={game.title}
            width={365}
            height={206}
            className="thumb"
          />

          <div>
            <h2>{game.title}</h2>
            <time>{game.release_date}</time>
            <p>{game.short_description}</p>
          </div>
        </a>
      </Link>
    </StyledContainer>
  );
};

export const GameCard = memo(GameCardComponent);
