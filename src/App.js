import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import './styles.css'
import background from './assets/background.png'
import dots from './assets/dots.png'
import playButton from './assets/play-button.png'
import areaCodes from './assets/areaCodes.png'
import checkers from './assets/checkers.png'
import figma from './assets/figma.png'
import figmaFolder from './assets/figma user.png'
import bookFolder from './assets/book collector.png'
import introvert from './assets/extreme introvert.png'
import junior from './assets/junior @ stanford.png'
import moveieFolder from './assets/movie-goer.png'
import musicFolder from './assets/music lover.png'
import pset from './assets/pset #347.png'

function App() {

  /* making elements draggable */
  const [elementPositions, setElementPositions] = useState({});

  useEffect(() => {
    const draggableElements = document.querySelectorAll('.draggable-element');

    draggableElements.forEach((element) => {
      makeElementDraggable(element);
    });
  }, []);

  const makeElementDraggable = (element) => {
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;

    element.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialX = e.clientX - currentX;
      initialY = e.clientY - currentY;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      element.style.transform = `translate(${currentX}px, ${currentY}px)`;
    });

    document.addEventListener('mouseup', () => {
      if (!isDragging) return;

      isDragging = false;
      const newPosition = {
        x: currentX,
        y: currentY,
      };

      setElementPositions((prevPositions) => ({
        ...prevPositions,
        [element.id]: newPosition,
      }));
    });
  };

  useEffect(() => {
    const draggableElements = document.querySelectorAll('.draggable-element');

    draggableElements.forEach((element) => {
      const newPosition = elementPositions[element.id];

      if (newPosition) {
        element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
      }
    });
  }, [elementPositions]);

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <link href='https://fonts.googleapis.com/css?family=Manjari' rel='stylesheet' />

      <div className='content'>

        <div className='bio-container draggable-element' id='bio-container'>

          <div className='banner'>
            <img src={dots} alt="three dots" />
            <div> BIO.DMG </div>
          </div>

          <div className='bio-content'>
            <div> </div>
            <div className='user-name'> Sadorian Robertson </div>
            <div className='user-pronouns'> she/her </div>
            <div className='user-description'> Designer & Developer @ Stanford </div>
            <div className='user-bio'>  Empathetic designer and developer based in the Bay Area! When I'm not creating, I enjoy horror movies, cat cafes, and all things pink. </div>
          </div>

          <div className='bio-footer'>
            <a href="https://www.linkedin.com/in/sadorian-robertson/" target="_blank" rel="noreferrer">Visit my LinkedIn profile!</a>
            <div className='country'> United States </div>
          </div>

        </div>

        <div className='music-container draggable-element' id='music-container'>

          <div className='banner'>
            <img src={dots} alt="three dots" />
            <p> Stuck in My Head Rn </p>
            <img src={playButton} alt="play button" />
          </div>

          <div className='music-content'>
            <img src={areaCodes} alt="album cover for Kali's Area Codes" style={{ border: "5px solid black", borderRadius: "50%" }} />
            <div className='song-info'>
              <div className='song-title'> Area Codes </div>
              <div className='song-artist'> Kali </div>
              <div> play settings placeholder </div>
            </div>
          </div>

        </div>

        <div className='todo-container draggable-element' id='todo-container' style={{ backgroundColor: "#FF5C5C" }}>

          <div className='banner'>
            <img src={dots} alt="three dots" />
            <div> To-Do This Week </div>
          </div>

          <div className='todo-list'>
            <ul>
              <li> water plants </li>
              <li> feed fish </li>
              <li> finish pset </li>
              <li> take over world </li>
            </ul>

          </div>

        </div>

        <div className='name-pointer draggable-element' id='name-pointer' style={{ backgroundColor: "#F6E368" }}>
          <div> Sadorian Robertson </div>
        </div>

        <div className='desktop-icons'>
          <div className="draggable-element">
            <img src={checkers} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={figma} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={pset} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={introvert} alt="alt" />
          </div>
        </div>

        <div className='desktop-icons'>
          <div className="draggable-element">
            <img src={junior} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={figmaFolder} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={moveieFolder} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={bookFolder} alt="alt" />
          </div>

          <div className="draggable-element">
          <img src={musicFolder} alt="alt" />
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
