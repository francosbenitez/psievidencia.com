import React from "react";
import Filter from "../components/Filter";
import { ReactComponent as Magnifier } from "../assets/icons/magnifier.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";

const Home = ({ psychologists }) => {
  psychologists.forEach(
    (psychologist) =>
      (psychologist.name = psychologist.name
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" "))
  );

  return (
    <>
      <div className="container mx-auto py-28 px-5 sm:px-0">
        <h1 className="text-center font-bold text-5xl">
          <Magnifier className="inline w-12 h-12" /> PsiEvidencia
        </h1>
        <h2 className="text-center text-2xl my-9">
          A web app to help you find the best evidence-based psychologists
        </h2>
        <Filter psychologists={psychologists} />
      </div>
      <footer className="bottom-0 fixed bg-white w-full p-8 text-center">
        To be part of this collection, fill your data in{" "}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
        >
          this Google Forms
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/francosbenitez/psievidencia"
        >
          <span className="underline">Source code</span>{" "}
          <GitHub className="inline w-4 h-4 align-text-bottom" />
        </a>
      </footer>
    </>
  );
};

export default Home;
