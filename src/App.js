import PsychologistsFilter from "./components/PsychologistsFilter";
import PsychologistsCards from "./components/PsychologistsCards";
import Papa from "papaparse";
import { useState } from "react";

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

  return (
    <div className="App">
      <PsychologistsFilter />
      <button onClick={fetchPsychologists}>Fetch Psychologists</button>
      <PsychologistsCards psychologists={psychologists} />
    </div>
  );
}

export default App;
