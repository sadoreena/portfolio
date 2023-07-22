import React, { Component } from "react";

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = { plainview: false };
    this.handleClick = this.handleClick.bind(this);
  };

  projects = [
    {
      id: 1,
      link: "https://github.com/sadoreena/CSLandingPage",
      name: "CS Landing Page",
      description: "A mockup of a fictional Stanford Computer Science course homepage. Built using HTML and CSS.",
      imageSrc: "../assets/yelp_clone.png"
    },
    {
      id: 2,
      link: "https://github.com/sadoreena/YelpClone",
      name: "Yelp Clone",
      description: "A Yelp clone built with Kotlin, the Google Maps API, and the Yelp API. Takes users to the Yelp page of their selected restaurant.",
      imageSrc: "URL_TO_IMAGE_2"
    }
  ];
  

  handleClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  render() {
    return (
      <div className="work-container" id="my-work">
        <div className="work-title">
          <h1>&lt;/ My Work /&gt;</h1>
        </div>
  
        <div className="project-container">
          {this.projects.map(({ id, imageSrc, link, description, name }) => (
            <div key={id} className="project">
              <img src={imageSrc} alt="project_image" className="project-image" />
              <h2 className="project-name">{name}</h2>
              <p className="project-description">{description}</p>
              <button className="project-button" onClick={() => this.handleClick(link)}>
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
};

export default Work;
