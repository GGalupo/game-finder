import { useEffect, useState } from "react";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import axios from "axios";

import { GameCard } from "../components/GameCard";

import { Game } from "../types";

interface HomeProps {
  apiKey: string;
}

const Home: NextPage<HomeProps> = ({ apiKey }) => {
  const [gamesList, setGamesList] = useState<Game[]>([]);

  useEffect(() => {
    const getGamesList = async () => {
      try {
        const response = await axios("https://mmo-games.p.rapidapi.com/games", {
          headers: {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        });

        setGamesList(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    getGamesList();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Game Finder</title>
        <meta
          name="description"
          content="Busque por novos jogos para se divertir!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {gamesList.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const apiKey = process.env.RAPIDAPI_KEY!;

  return {
    props: {
      apiKey,
    },
  };
};
