import type { NextPage } from "next";
import Head from "next/head";
import About from "./components/About";

const Home: NextPage = () => {
  return (
    <div className="dark">
      <Head>
        <title>Portofolio</title>
        <meta
          name="description"
          content="This is Andika Rizki Fadhila Portofolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="transition-colors duration-1000">
        <div className="dark:bg-Navy w-full min-h-min h-screen">
          <About />
        </div>
      </main>
    </div>
  );
};

export default Home;
