
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from "react";
import { IoIosCall, IoMdLocate } from "react-icons/io";
import { IoLocationSharp } from 'react-icons/io5';


const Contact = () => {
  return (
    <div name= "contact" id = "contact"  >
    <div  className="flex items-center justify-center w-full h-full bg-gradient-to-b from-black via-black  to-gray-800 text-white">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl mt-20 mb-10 font-bold border-b-4 border-lime-700 inline-block">
            Get in Touch
          </h1>
        </div>
        <p className="py-8 font-medium text-lg w-1/2">
          I would love to hear from you! <br/>
          Whether it is to collaborate on a project, a job opportunity or just to have a chat, feel free to drop a message!
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <form
              action="https://getform.io/f/049645f9-8dd3-4ead-a466-2039520ded71"
              method="POST"
              className="w-full"
            >
              <div className="mb-4">
                <label className="block text-xl mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  placeholder="Enter your name"
                  className="p-3 w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="p-3 w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  
                  id="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-3 w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button className="text-white font-medium bg-gradient-to-b mb-5 from-lime-500 to-lime-900 px-6 py-3 rounded-md hover:scale-110 duration-300">
                  Let's talk
                </button>
              </div>
            </form>
          </div>

          <div id = "phone"
          className="md:w-1/2 ml-20 rounded-all">
            <div className="bg-lime-700 h-20 mt-16 rounded-lg  p-4 mb-4">
              <div className="flex items-center jsutify-center mb-6">
              <div className="rounded-full bg-white p-2">
                <IoIosCall className="text-3xl text-lime-700" />
                </div>
                <div id="location">
                  <p className="text-2xl ml-10 items-center hover:rounded-md justify-center mt-2 text-white"> +1 551-344-7460</p> 
                </div>
              </div>
            </div>
          
            <div className="bg-lime-700 h-20 mt-16 rounded-lg  p-4 mb-4">
              <div className="flex items-center jsutify-center mb-6">
              <div className="rounded-full bg-white p-2">
                <IoLocationSharp className="text-3xl text-lime-700" />
                </div>
                <div>
                  <p className="text-1xl ml-4 items-center hover:rounded-md justify-centerfont-italic mt-2 text-white"> New York City, New York, United States</p> 
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

