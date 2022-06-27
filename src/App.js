import { useState, useEffect } from "react";
import "./assets/css/default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import PsychologistsDetail from "./views/psychologists-detail";
import Dashboard from "./views/dashboard";
import ScrollToTop from "./components/ScrollToTop";
import PsychologistsService from "./services/PsychologistsService";
import useDebounce from "./hooks/useDebounce";
import Sidebar from "./components/Sidebar";

function App() {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [pagination, setPagination] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const debouncedName = useDebounce(name, 1000);

  const fetchPsychologists = async (name, specializations) => {
    setLoading(true);
    const data = (await PsychologistsService.index(1, name, specializations))
      .data;
    setPsychologists(data.results);
    setLoading(false);
  };

  const fetchMorePsychologists = async (name, specializations) => {
    setLoading(true);
    const data = (
      await PsychologistsService.index(pagination, name, specializations)
    ).data;
    setPsychologists((psychologists) => psychologists.concat(data.results));
    setLoading(false);
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  const handleUpdate = (id) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOptions) => selectedOptions.id !== id)
    );
  };

  const handleAdd = (value) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const selectedIds = selectedOptions.map((item) => item.id);
    fetchPsychologists(debouncedName, selectedIds);
  }, [debouncedName, selectedOptions]);

  useEffect(() => {
    if (pagination > 1) {
      const selectedIds = selectedOptions.map((item) => item.id);
      fetchMorePsychologists(debouncedName, selectedIds);
    }
  }, [pagination]);

  return (
    <ScrollToTop>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                psychologists={psychologists}
                loading={loading}
                handlePagination={handlePagination}
                handleUpdate={handleUpdate}
                selectedOptions={selectedOptions}
                handleAdd={handleAdd}
                handleNameChange={handleNameChange}
              />
            }
          />
          <Route path="/psychologists" />
          <Route
            path={"/psychologists/:id"}
            element={<PsychologistsDetail />}
          />
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
