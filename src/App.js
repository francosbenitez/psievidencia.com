import Filter from "./components/Filter";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import "./assets/css/default.css";

function App() {
  const psychologistsUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSt2QOEjYsYKBqktf8Cg-Bme4L6x3vEZxU-uXD9vefspScTwi_o7UZXjDqGQplAGIjOBN_iLFSvF-ti/pub?gid=0&single=true&output=csv";

  const [psychologists, setPsychologists] = useState([]);

  const fetchPsychologists = () => {
    Papa.parse(psychologistsUrl, {
      download: true,
      header: true,

      complete: function (results) {
        console.log(results.data);
        setPsychologists(results.data);
      },
    });
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  return (
    <div className="container mt-20 mx-auto">
      <Filter psychologists={psychologists} />

      <div className="text-center w-full">
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
}

export default App;
