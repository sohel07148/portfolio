import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import About from "./component/about"; 
import project from "./component/projects"; 


const Home = () => {
  return (
    <div>
      <div className="hero_container">
        <div className="hero_text">
          <h5>Hello</h5>
          <h2>
            <span>I'm</span> sohel shaikh{" "}
          </h2>
          <p>A front-end developer </p>
        </div>
      </div>
      <About />
      <project />
      

    </div>
  );
};

export default Home;
