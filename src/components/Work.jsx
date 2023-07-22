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
      description: "A mockup of a fictional Stanford, Computer Science course homepage. Made with HTML and CSS.",
      imageSrc: require("../assets/landing.png")
    },
    {
      id: 2,
      link: "https://github.com/sadoreena/YelpClone",
      name: "Yelp Clone",
      description: "A Yelp clone that takes users to the Yelp page of their selected restaurant. Made with Kotlin, the Google Maps API, and the Yelp API. ",
      imageSrc: require("../assets/yelp.png")
    },
    {
      id: 3,
      link: "https://github.com/sadoreena/weather-app",
      name: "Weather App",
      description: "A local weather widget that reports real-time data using the OpenWeatherMap API. Made with Tkinter.",
      imageSrc: require("../assets/weather.png")
    },
    {
      id: 2,
      link: "https://github.com/sadoreena/weather-app",
      name: "Tip Calculator",
      description: "A small tip calculator to calculate the total bill. Made with Kotlin.",
      imageSrc: require("../assets/tip.png")
    }
  ];
  

  handleClick = (link) => {
    window.open(link, "_blank");
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
              <img src={imageSrc} alt="project cover" className="project-image" />
  
              <div className="project-details">
                <h2 className="project-name">{name}</h2>
                <p className="project-description">{description}</p>
                <button className="project-button" onClick={() => this.handleClick(link)}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
};

export default Work;
