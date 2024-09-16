import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="line"></div>
      <p>
        I'm currently pursuing my BE in Computer Science, specializing in Full
        Stack Development, Enterprise Java, Data structures, web technologies,
        and professional portfolios.
      </p>
      <p>
        With a strong passion for mentoring and a hands-on approach, I guide
        final year students to excel in their projects, providing them with
        practical skills essential for success in the fast-paced tech sector
      </p>

      <h2>Actions I'm Taking</h2>
      <div className="actions">
        <div className="card">
        Problem Solving
        </div>
        <div className="card">
    Web Development
        </div>
        
      </div>
      <div className="actions">
        <div className="card">
        Innovative thing
        </div>
        <div className="card">
        Video Game
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
