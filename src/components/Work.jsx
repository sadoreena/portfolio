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
      description: " A full-stack  tracker application with APIs to add, delete, and update s. The application is built using React, Node.js, Express, and MongoDB."

    },
    {
      id: 2,
      link: "https://github.com/sadoreena/YelpClone",
      name: "Yelp Clone",
      description: "An app built with Vite and React, leverages open API to generate concise summaries of lengthy articles. Users can input links, and the app processes the article and returns a summary"
    },
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

        <div className="grid mt-20 sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">

          {this.projects.map(({ id, src, link, description, name }) => (
            <div key={id} className="project">
              <img src={src} alt="" className="project-image"/>
              <h2 className="project-name">
                {name}
              </h2>
              <p className="project-description">{description}</p>

              <button className="project-button" onClick={() => this.handleClick(link)}>
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Work;
