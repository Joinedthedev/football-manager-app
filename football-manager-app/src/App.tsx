
import { Stack } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import "./variables.css";
import RosterSection from "./components/RosterSection";


function App() {
  return (
   
      
      <div className="app">
        <Sidebar />
        <RosterSection />
      </div>
  );
}

export default App;
