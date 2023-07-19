import './App.css';
import NavBar from './components/NavBar.jsx';
import Contact from './components/Contact';
import About from './components/About';
import './styles.css'


function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Manjari' rel='stylesheet' />
      <NavBar />
      <div className="divider"></div>

      <div className='welcome'>

        <div className='name'>
          SADORIAN <br /> ROBERTSON </div>
        <div className='caption'>
          DESIGNER &  <br /> DEVELOPER
        </div>

        <div className='description'>
          Empathetic designer and developer based in the Bay Area! As a designer, my top priority 
          is creating accessible, interactive, and impactful designs for all your community's needs.
        </div>

      </div>
      <div className="divider"></div>
      <About/>
      <div className="divider"></div>
      <Contact/>
    </div>
  );
}

export default App;
