import Papa from "papaparse";
import { useState, useEffect } from "react";
import "./assets/css/default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import PsychologistsDetail from "./views/psychologists-detail";

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
        results.data.forEach((psychologist, i) => {
          psychologist.id = i + 1;
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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home psychologists={psychologists} />} />
        <Route path="/psychologists">
          {psychologists.map((psychologist) => (
            <Route
              key={psychologist.id}
              path={"/psychologists/" + psychologist.id}
              element={<PsychologistsDetail psychologist={psychologist} />}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
