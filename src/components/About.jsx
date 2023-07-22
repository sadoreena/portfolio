import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { plainview: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ plainview: !prevState.plainview }));
    console.log("plainview button clicked")
    console.log(this.state.plainview)
  }

  render() {
    return (
      <div className="about-container" id="about-me">
        <div className="about-title">
          <h1>&lt;/ About Me /&gt;</h1>
        </div>

        {this.state.plainview === false ? (
          /* not in Plainview */
          <div className="about-box">
            <p>
              let Sadorian = &#123;<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;education: "Stanford University",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;major: "Design (AI and User Experience)",<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;relevant_coursework: [<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Methodology",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Abstractions",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Android Programming Workshop",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cross-Platform Development",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Coding for Social Good",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Web Applications",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Visual Frontiers"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;]<br />
              &#125;;
            </p>
          </div>
        ) : (
          <div className="about-box">
            <p>
              let Sadorian = &#123;<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;education: "Stanford University",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;major: "Design (AI and User Experience)",<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;relevant_coursework: [<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Methodology",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Abstractions",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Android Programming Workshop",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cross-Platform Development",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Coding for Social Good",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Web Applications",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Visual Frontiers"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;]<br />
              &#125;;
            </p>
          </div>
        )}
        <button className="switch" onClick={this.handleClick}>
          Switch to Plainview
        </button>
      </div>
    );
  }
}

export default About;
