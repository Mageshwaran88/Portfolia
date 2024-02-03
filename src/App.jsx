import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="headcontainer">
          <h1>MageshDev</h1>
        </div>
        <div className="navbar">
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/skills" className="link">Skills</Link>
          <Link to="/projects" className="link">Projects</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
