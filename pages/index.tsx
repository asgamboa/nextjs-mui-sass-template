import Head from "next/head";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='title' content='Home page' />
        <meta name='description' content='This is the home page' />
      </Head>

      <header>
        <h1>Header</h1>
      </header>

      <main>
        <h1>Main</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Home;
