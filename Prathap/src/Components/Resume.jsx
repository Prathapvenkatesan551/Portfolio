import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="line"></div>
      <br />
      <div className="head1">
        <h1>Education</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="box">
              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2021-2025 Batch
                  </div>
                  <h3>Bachelor's Degree</h3>
                  <p>
                    The BE computer science colleges in Bangalore teach the
                    basics of computer programming and networking and comprise a
                    plethora of course content. They study programming
                    languages, program design, computation, design and
                    development of algorithms, computer software and hardware.
                  </p>
                </div>
              </div>

              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2019-2021 Batch
                  </div>
                  <h3>Higher Secondary 12th</h3>
                  <p>
                    The BE computer science colleges in Bangalore teach the
                    basics of computer programming and networking and comprise a
                    plethora of course content. They study programming
                    languages, program design, computation, design and
                    development of algorithms, computer software and hardware.
                  </p>
                </div>
              </div>

              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2018-2019 Batch
                  </div>
                  <h3>SSLC - 10th</h3>
                  <p>
                    The BE computer science colleges in Bangalore teach the
                    basics of computer programming and networking and comprise a
                    plethora of course content. They study programming
                    languages, program design, computation, design and
                    development of algorithms, computer software and hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="head1">
        <h1>Projects</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />

      <div className="projects">
        <div className="projectCard">
          <h3>Market Place</h3>
          <label htmlFor="">eaaa</label>
          <label htmlFor="">eaaa</label>
          <label htmlFor="">eaaa</label>
          <label htmlFor="">eaaa </label>
          <label htmlFor="">eaaa </label>
          <label htmlFor="">eaaa </label>
          <label htmlFor="">eaaa </label>
        </div>
        <div className="projectCard">
          <h3>Market Place</h3>
          <label htmlFor="">eaaa</label>
          <label htmlFor="">eaaa</label>
          <label htmlFor="">eaaa</label>
          <label htmlFor="">eaaa </label>
          <label htmlFor="">eaaa </label>
          <label htmlFor="">eaaa </label>
          <label htmlFor="">eaaa </label>
        </div>
      </div>

      <br />
      <div className="head1">
        <h1>Technical Skills</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />
      <div className="Tech-skills">
        <div className="skill">
          <img src="java8.png" alt="" className="skillimage" />
          <h2>Java 8</h2>
        </div>
        <div className="skill">
          <img src="springboot.png" alt="" className="skillimage" />
          <h2>Spring Boot</h2>
        </div>
        <div className="skill">
          <img src="react.png" alt="" className="skillimage" />
          <h2>React JS</h2>
        </div>
        <div className="skill">
          <img src="mysql.png" alt="" className="skillimage" />
          <h2>My Sql</h2>
        </div>
        <div className="skill">
          <img src="javascript.png" alt="" className="skillimage" />
          <h2>Java Script</h2>
        </div>
        <div className="skill">
          <img src="dsa.png" alt="" className="skillimage" />
          <h2>Data Structures</h2>
        </div>
      </div>
    </div>
  );
};

export default Resume;
