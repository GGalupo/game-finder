import { useEffect, useState } from "react";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import axios from "axios";

import { GameCard } from "../components/GameCard/GameCard";
import { Loading } from "../components/Loading/Loading";

import { Game } from "../types";

import { StyledContainer } from "../styles/container";
import {
  StyledDividerText,
  StyledExploreText,
  StyledPageTitle,
  StyledSearchInputContainer,
} from "../styles/homePage";
import { FaSearch } from "react-icons/fa";

interface HomeProps {
  apiKey: string;
}

const Home: NextPage<HomeProps> = ({ apiKey }) => {
  const [gamesList, setGamesList] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    let mounted = true;

    const getGamesList = async () => {
      try {
        const data = await axios
          .get<Game[]>("https://mmo-games.p.rapidapi.com/games", {
            headers: {
              "x-rapidapi-host": "mmo-games.p.rapidapi.com",
              "x-rapidapi-key": apiKey,
            },
          })
          .then((response) => response.data);

        const formattedData = data
          .map((item) => {
            return {
              id: item.id,
              title: item.title,
              thumbnail: item.thumbnail,
              short_description: item.short_description,
              release_date: new Date(item.release_date)
                .getFullYear()
                .toString(),
            };
          })
          .sort((a, b) => (a.title > b.title ? 1 : -1));

        if (mounted) setGamesList(formattedData);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    getGamesList();

    return () => {
      mounted = false;
    };
  }, [apiKey]);

  const filterSearchedGames = (game: Game) => {
    if (search === "") return true;

    return game.title.toLocaleLowerCase().includes(search.toLowerCase());
  };

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

      <StyledContainer>
        <StyledPageTitle>
          Game Finder
          <br />
          <span>Find the best games to play!</span>
        </StyledPageTitle>

        <StyledSearchInputContainer>
          <FaSearch className="icon" />
          <input
            type="search"
            placeholder="Search for a game..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </StyledSearchInputContainer>

        <StyledDividerText>or</StyledDividerText>

        <StyledExploreText>
          {search !== "" ? "Search results" : "Explore"}
        </StyledExploreText>
        {isLoading ? (
          <Loading />
        ) : (
          gamesList
            .filter(filterSearchedGames)
            .map((game) => <GameCard key={game.id} game={game} />)
        )}
      </StyledContainer>
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
