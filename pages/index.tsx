import type { NextPage } from "next";
import Head from "next/head";
import TheHeader from "../components/home/TheHeader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>PsiEvidencia</title>
      </Head>
      <div className="container mx-auto py-28 px-5 sm:px-0">
        <TheHeader />
      </div>
    </>
  );
};

export default Home;
