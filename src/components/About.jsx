import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>&lt;/ About Me /&gt;</h1>
      </div>
      <div className="about-box">
        <p>
          let Sadorian = {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;education: "Stanford University",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;major: "Design (AI and User Experience)",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;relevant_coursework: [<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Methodology",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Abstractions",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Android Programming Workshop",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cross-Platform Development",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Coding for Social Good",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Web Applications",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Visual Frontiers"<br />
          &nbsp;&nbsp;&nbsp;&nbsp;]<br />
          {"};"}
        </p>
      </div>
      <button className="switch" > Switch to Plainview </button>
    </div>
  );
};

export default About;
