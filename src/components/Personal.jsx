import React, { useState } from "react";
import travel1 from "../assets/travel1.jpg";
import saree from "../assets/saree.jpg";
import dogs from "../assets/dogs.jpg";

const Personal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const images = [
    {
      src: travel1,
      text: "When I'm not immersed in code, you'll find me exploring new horizons and experiencing diverse cultures.",
    },
    {
      src: dogs,
      text: "I take the \"Work hard and pet dogs that you meet on your vacation harder\" quote very seriously! ",
    },
    {
      src: saree,
      text: "Just like draping a saree, I strive to weave creativity, passion, and authenticity into my work.",
    },
  ];

  return (
    <div>
      <div name="about" className="h-full w-full py-5 bg-gradient from-gray-600 to-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative m-4 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className={`w-45 sm:w-64 h-auto rounded-lg transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-50" : "opacity-100"
                  }`}
                />
                {activeIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg font-medium text-center text-white px-4">
                      {image.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
