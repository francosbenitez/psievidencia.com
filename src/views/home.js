import React from "react";
import Filter from "../components/Filter";

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
        <Filter psychologists={psychologists} />
      </div>
      <footer className="bottom-0 fixed bg-white w-full p-8 text-center">
        To be part of this collection, fill your data in{" "}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/spreadsheets/d/1xMzAnbQcJ880iswR2yszPpZkD4i3pn_3GejthV1R68s/edit#gid=0"
        >
          this Google Sheet
        </a>
        .
      </footer>
    </>
  );
};

export default Home;
