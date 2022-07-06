import "./assets/css/default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import PsychologistsDetail from "./views/psychologists-detail";
import Dashboard from "./views/dashboard";
import ScrollToTop from "./components/global/ScrollToTop";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <ScrollToTop>
      <div className="App">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologists" />
          <Route
            path={"/psychologists/:id"}
            element={<PsychologistsDetail />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </ScrollToTop>
  );
}

export default App;
