import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import About from "./component/about"; 
import Project from "./component/projects";
import Home from "./home";
import Contact from "./contact";
import Skills from "./skills";

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} /> 
            <Route path="project" element={<Project />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
