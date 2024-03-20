// about.js
import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_section">
      <div className="row g-0">
        <div className="col-md-5">
          <div className="about_heading">
            <h2>
              About Me <br /> and my skills
            </h2>
          </div>
        </div>
        <div className="col-md-7">
          <div className="about_text">
            <p>
              <span className="about_hello">Hello!</span> <br /> My name is{" "}
              <span className="about_name">sohel shaikh</span>, a frontend
              designer. With a
              background in Bachelor of Computer Applications (BCA), I bring a
              solid foundation in HTML, CSS, and JavaScript along with a keen
              eye for detail and a strong sense of creativity.
            </p>
           
            <p>
              While I may be new to the industry, I thrive on challenges and am
              dedicated to continuous learning and growth. Currently, I'm
              sharpening my skills through personal projects and online courses,
              always striving to stay updated with the latest trends and best
              practices in frontend design.
            </p>
          </div>
          <div className="skills_section">
          <p>a</p>
          </div>
        </div>
      </div>

      {/*
       */}
    </div>
  );
};

export default About;
