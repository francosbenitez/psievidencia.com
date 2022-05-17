import Papa from "papaparse";
import { useState, useEffect } from "react";
import "./assets/css/default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import PsychologistsDetail from "./views/psychologists-detail";
import Dashboard from "./views/dashboard";

function App() {
  const psychologistsUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQngt5TxTabbOavo5qHaZz5ohs9o_46sWrhQMKT5gJdedIG3Icq0qvuUX1dfdkcrmqNUxzCjOk2egSo/pub?gid=160193944&single=true&output=csv";

  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPsychologists = () => {
    setLoading(true);
    Papa.parse(psychologistsUrl, {
      download: true,
      beforeFirstChunk: function (chunk) {
        var index = chunk.match(/\r\n|\r|\n/).index;
        console.log("index", index);
        var headings = chunk
          .substr(0, index)
          .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

        headings[0] = "date";
        headings[1] = "name";
        headings[2] = "email";
        headings[3] = "gender";
        headings[4] = "registration_type";
        headings[5] = "registration_number";
        headings[6] = "institution";
        headings[7] = "team";
        headings[8] = "province";
        headings[9] = "city";
        headings[10] = "education";
        headings[11] = "therapeutic_model";
        headings[12] = "gender_perspective";
        headings[13] = "specialization";
        headings[14] = "work_population";
        headings[15] = "work_modality";
        headings[16] = "online";
        headings[17] = "prepaid";
        headings[18] = "prepaid_type";
        headings[19] = "invoice";
        headings[20] = "sign_language";
        headings[21] = "session_languages";
        headings[22] = "social_networks";
        headings[23] = "phone_number";
        headings[24] = "additional_data";
        headings[25] = "name_2";
        return headings.join() + chunk.substr(index);
      },
      header: true,

      complete: function (results) {
        results.data.forEach((psychologist, i) => {
          psychologist.id = i + 1;
        });

        results.data.sort(() => Math.random() - 0.5);

        console.log(results.data);

        setPsychologists(results.data);
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  return (
    <div className="App">
      {loading && (
        <p className="grid place-items-center h-screen">Loading...</p>
      )}
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
        <Route
          path="/dashboard"
          element={<Dashboard psychologists={psychologists} />}
        />
      </Routes>
    </div>
  );
}

export default App;
