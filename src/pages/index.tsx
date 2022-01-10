import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import axios from "axios";

interface Game {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  gameUrl: string;
  releaseDate: string;
}

const Home: NextPage = () => {
  const [gamesList, setGamesList] = useState<Game[]>([]);

  useEffect(() => {
    const getGamesList = async () => {
      try {
        const response = await axios("https://mmo-games.p.rapidapi.com/games", {
          headers: {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
          },
        });

        setGamesList(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    getGamesList();
  }, []);

  console.log(gamesList);
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
    </>
  );
};

export default Home;
