import React from "react";
import expense from "../assets/portfolio/expense.png";
import article from "../assets/portfolio/article.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: expense,
      demoLink: "https://drive.google.com/file/d/1xe6RiPamYHGy0AeMe_d59joj0MTtWz8e/view?usp=drive_link",
      codeLink: "https://github.com/supreeta-anand-byatnal/Coin-Tracker",
      name:"Coin Tracker",
      description: " A full-stack expense tracker application with APIs to add, delete, and update expenses. The application is built using React, Node.js, Express, and MongoDB."
      
    },
    {
      id: 2,
      src: article,
      demoLink: "https://article-summarizer-gpt4.netlify.app/",
      codeLink: "https://github.com/supreeta-anand-byatnal/Article-Summarizer",
      name:"Article Summarizer",
      description: "An app built with Vite and React, leverages open API to generate concise summaries of lengthy articles. Users can input links, and the app processes the article and returns a summary"
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <div
      name="portfolio" 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl animate-slide-from-left mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">
            Portfolio
          </h1>
        </div>

        <div className="grid mt-20 sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, description,name}) => (
            <div key={id} className="shadow-md shadow-lime-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
                <h2 className="text-center mt-7 text-lime-600 text-lg font-semibold mb-2">
                  {name}
                </h2>
                <p className="text-center text-gray-300">{description}</p>
              
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 text-lime-600 font-semibold hover:scale-105"
                  onClick={() => handleClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200  text-lime-600 font-semibold hover:scale-105"
                  onClick={() => handleClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
