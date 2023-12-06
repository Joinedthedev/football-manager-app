import { Stack } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import "./variables.css";
import RosterSection from "./components/RosterSection";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormationOverview from "./components/FormationOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="app">
                <Sidebar />
                <RosterSection />
              </div>
            </>
          }
        />

        <Route
          path="/formationoverview"
          element={
            <>
              <div className="app">
                <Sidebar />
                <FormationOverview/>
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
