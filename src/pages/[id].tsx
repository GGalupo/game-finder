import { useEffect, useState } from "react";

import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";

import { GameDetails } from "../types";

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
        {isLoading ? (
          <span>Carregando...</span>
        ) : (
          <>
            <span>Nome do jogo: {game?.title}</span>
            <span>Publisher: {game?.publisher}</span>
          </>
        )}
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
