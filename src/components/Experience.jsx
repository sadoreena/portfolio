import React, { useState } from 'react';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const skills = [
    { name: "Java", rating: 90 },
    { name: "Python", rating: 65 },
    { name: "Javascript", rating: 70 },
    { name: "Typescript", rating: 60 },
    { name: "React", rating: 65 },
    { name: "SQL", rating: 85 },
    { name: "HTML", rating: 80 },
    { name: "CSS", rating: 80 },
    { name: "Node.js", rating: 60 },
    { name: "Git", rating: 80 },
    { name: "MongoDB", rating: 60 },
    { name: "AWS, Azure, GCP", rating: 60 },
    { name: "Docker", rating: 60 },
    { name: "Kubernetes", rating: 60 },
    { name: "Spring", rating: 60 },
    { name: "REST APIs", rating: 60 }

    // Add more skills as needed
  ];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  let workIconStyles = { background: "#4d7c0f" };
  let schoolIconStyles = { background: "#4d7c0f" };

  return (
    <div id = "experience" name="experience" className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800">     
      
      <div className="text-center">
                <h1 className="text-5xl mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">Experience</h1>
       </div>

      <div className="tabs mt-10 text-black bg-black">
      <div className={`tab ${activeTab === "experience" ? "active" : ""}`} onClick={() => handleTabChange("experience")}>Experience</div>
       
        <div className={`tab ${activeTab === "skills" ? "active" : ""}`} onClick={() => handleTabChange("skills")}>Skills</div>
      </div>
      

...
      {activeTab === "experience" && (
        <div className="tab-content">
           
              
              <div className='h-full py-4'>
                <VerticalTimeline>
                  {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

                    return (
                      <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                      >
                        <div className="bg-lime-700 p-2 rounded-md text-white">
                          <h3 className="first-letter:vertical-timeline-element-title font-semibold text-md">{element.title}</h3>
                          <i><h6 className="vertical-timeline-element-subtitle text-sm">{element.location}</h6></i>
                        </div>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>
          
      )}

{activeTab === "skills" && (
  <div className="tab-content">
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-2 gap-32 px-16">
        <ul className="text-white">
          {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
            <li key={index} className="flex items-center text-xl mb-4">
              <span className="mr-12 px-3 w-20">{skill.name}</span>
              <div className="w-64 h-4 mb-6 mt-5 bg-gray-700 rounded overflow-hidden">
                <div
                  className={`bg-lime-500 h-full fill-animation-${index}`}
                  style={{
                    width: `${skill.rating}%`,
                    animationDuration: `${(skill.rating / 100) * 1}s`, // Adjust the animation duration based on skill rating
                  }}
                ></div>
              </div>
              <span>{/* Additional content here */}</span>
            </li>
          ))}
        </ul>
        <ul className="text-white">
          {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
            <li key={index} className="flex items-center text-xl mb-4">
              <span className="mr-16 px-3 w-20">{skill.name}</span>
              <div className="w-64 h-4 mb-6 mt-5 bg-gray-700 rounded overflow-hidden">
                <div
                  className={`bg-lime-500 h-full fill-animation-${index}`}
                  style={{
                    width: `${skill.rating}%`,
                    animationDuration: `${(skill.rating / 100) * 1}s`, // Adjust the animation duration based on skill rating
                  }}
                ></div>
              </div>
              <span>{/* Additional content here */}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}


</div>
);
};

export default Experience;
