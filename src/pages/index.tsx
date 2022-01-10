import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
