import { useEffect, useState } from "react";

import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";

import { GameDetails } from "../types";

import { StyledContainer } from "../styles/container";
import Image from "next/image";
import { StyledFailedContainer, StyledPageContainer } from "../styles/gamePage";
import Link from "next/link";

interface GameProps {
  apiKey: string;
}

const Game: NextPage<GameProps> = ({ apiKey }) => {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<GameDetails | undefined>(undefined);

  useEffect(() => {
    let mounted = true;

    const getGameData = async () => {
      try {
        const data = await axios
          .get<GameDetails>(`https://mmo-games.p.rapidapi.com/game?id=${id}`, {
            headers: {
              "x-rapidapi-host": "mmo-games.p.rapidapi.com",
              "x-rapidapi-key": apiKey,
            },
          })
          .then((response) => response.data);

        if (mounted) setGame(data);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    getGameData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>{game && `${game.title} | `}Game Finder</title>
      </Head>

      <main>
        <StyledContainer>
          {isLoading ? (
            <span>Carregando...</span>
          ) : game ? (
            <StyledPageContainer>
              <div>
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  width={365}
                  height={206}
                />
                <h1>{game?.title}</h1>
                <time>
                  {new Date(game.release_date).getFullYear().toString()}
                </time>
                <span>Publisher: {game.publisher}</span>
                <span>Developer: {game.developer}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: game?.description! }} />

              <button>
                <a href={game.game_url} target="_blank" rel="noopener">
                  Play now!
                </a>
              </button>
            </StyledPageContainer>
          ) : (
            <StyledFailedContainer>
              <h1>Failed to load game data.</h1>
              <button>
                <Link href="/">
                  <a>Return to home page</a>
                </Link>
              </button>
            </StyledFailedContainer>
          )}
        </StyledContainer>
      </main>
    </>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = async () => {
  const apiKey = process.env.RAPIDAPI_KEY!;

  return {
    props: {
      apiKey,
    },
  };
};
