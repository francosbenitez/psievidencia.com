import { useState, useEffect } from "react";
import "./assets/css/default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import PsychologistsDetail from "./views/psychologists-detail";
import Dashboard from "./views/dashboard";
import ScrollToTop from "./components/ScrollToTop";
import PsychologistsService from "./services/PsychologistsService";

function App() {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(1);

  const fetchPsychologists = async () => {
    setLoading(true);
    setPagination((pagination) => pagination + 1);

    const data = (await PsychologistsService.index(pagination)).data;

    setPsychologists((psychologists) => psychologists.concat(data.results));
    setLoading(false);
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  const handlePagination = () => {
    fetchPsychologists();
  };

  return (
    <ScrollToTop>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                psychologists={psychologists}
                loading={loading}
                handlePagination={handlePagination}
              />
            }
          />
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
    </ScrollToTop>
  );
}

export default App;
