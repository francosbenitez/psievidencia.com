import React from "react";
import Filter from "../components/Filter";

const Home = ({ psychologists }) => {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <Filter psychologists={psychologists} />
      <div className="text-center w-full mt-auto">
        To be part of this collection, fill your data in{" "}
        <a
          className=""
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/spreadsheets/d/1xMzAnbQcJ880iswR2yszPpZkD4i3pn_3GejthV1R68s/edit#gid=0"
        >
          this Google Sheet.
        </a>
      </div>
    </div>
  );
};

export default Home;
