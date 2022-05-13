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
    <div className="mt-20 mx-auto">
      <Filter psychologists={psychologists} />
    </div>
  );
}

export default App;
