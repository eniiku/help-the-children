import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Help the Children</title>
        <meta
          name="description"
          content="Charity Organization designed to help children in need"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
    </div>
  );
};

export default HomePage;
