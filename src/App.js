import Filter from "./components/Filter";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import "./assets/css/default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";

function App() {
  const psychologistsUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSt2QOEjYsYKBqktf8Cg-Bme4L6x3vEZxU-uXD9vefspScTwi_o7UZXjDqGQplAGIjOBN_iLFSvF-ti/pub?gid=0&single=true&output=csv";
  // const psychologistsUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQngt5TxTabbOavo5qHaZz5ohs9o_46sWrhQMKT5gJdedIG3Icq0qvuUX1dfdkcrmqNUxzCjOk2egSo/pub?gid=160193944&single=true&output=csv"

  const [psychologists, setPsychologists] = useState([]);

  const fetchPsychologists = () => {
    Papa.parse(psychologistsUrl, {
      download: true,
      beforeFirstChunk: function (chunk) {
        var index = chunk.match(/\r\n|\r|\n/).index;
        var headings = chunk.substr(0, index).split(",");
        headings[0] = "name";
        return headings.join() + chunk.substr(index);
      },
      header: true,

      complete: function (results) {
        results.data.forEach((item, i) => {
          item.id = i + 1;
        });

        console.log(results.data);

        setPsychologists(results.data);
      },
    });
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  return (
    // <Routes>
    //   <Route path="/" elements={<Home />}>
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
    //   </Route>
    // </Routes>
  );
}

export default App;
