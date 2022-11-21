import './App.css';
import SocialMedia from './components/social-media';
import HowItWorksContent from './components/how-it-works-content';
import WhatIsAdventContent from './components/what-is-advent-content';
import WhyZbraSupportsContent from './components/why-zbra-supports-content';
import JoinWithZbraContent from './components/join-with-zbra-content';
import GetReadyContent from './components/get-ready-content';
import MeetZbraContent from './components/meet-zbra-content';

import logoZbra from './assets/ZBRA_Logo.svg';
import womanzbra from './assets/womanzbra.png';
import advent from './assets/advent.webp';
import closeicon from './assets/icons/close-icon.svg';

function App() {

  const handleClick = () => {
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="navbar">
            <img src={logoZbra} alt="logo zbra" />
            <ul className="web-menu">
              <li>
                <a href="#what-is-advent">O que é?</a>
              </li>
              <li>
                <a href="#how-it-works">Como funciona?</a>
              </li>
              <li>
                <a href="#whyzbrasupports">Porque a ZBRA apoia?</a>
              </li>
              <li>
                <a href="#joinwithzbra">Participe com a ZBRA</a>
              </li>
              <li>
                <a href="#getready">Prepare-se</a>
              </li>
              <li>
                <a href="#meetzbra">Conheça a ZBRA</a>
              </li>
              <li>
                <a href="#meetzbra" className="green-button">FAÇA PARTE</a>
              </li>
            </ul>

            <div className="nav-menu">
              <div className='header-mobile-menu'>
                <img src={logoZbra} alt="logo zbra" />
                <div className="close" onClick={handleClick}>
                  <img src={closeicon} alt="close icon" className='close-icon' />
                </div>
              </div>
              <ul>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#what-is-advent"> O que é? </a>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#how-it-works"> Como funciona? </a>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#whyzbrasupports"> Porque a ZBRA apoia? </a>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#joinwithzbra"> Participe com a ZBRA </a>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#getready"> Prepare-se </a>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#meetzbra"> Conheça a ZBRA</a>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <a href="#meetzbra" className="green-button"> FAÇA PARTE </a>
                </li>
              </ul>
              <div className="social-media social-media-menu">
                <SocialMedia />
              </div>
            </div>
            <div className="hamburger" onClick={handleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>

        
        <div className='center-align zbraplusadvent'>
          <img src={logoZbra} alt="logo zbra" />
          <p> + </p>
          <p className='adventofcode'>Advent of Code</p>
        </div>
      </header>


      <div id="what-is-advent" className='page-section center-align'>
        <h2 className='header-what-is-advent header-section highlight-green'> O QUE É <strong>O ADVENT OF CODE?</strong></h2>
        <div className="advent-content">
          <img src={advent} alt="logo zbra com chapéu do papai noel" />
        </div>
        <WhatIsAdventContent />
      </div>

      <div id="how-it-works">
        <h2 className='howitworkstitle'>COMO <strong>FUNCIONA?</strong></h2>
        <HowItWorksContent />
      </div>

      <div id="whyzbrasupports" className='page-section'>
        <div className='advent-content'>
          <div className='header-section'>
            <h2> PORQUE A </h2>
            <h2 className='highlight-blue'>
              <strong>ZBRA APOIA?</strong>
            </h2>
          </div>
          <WhyZbraSupportsContent />
        </div>
        <div className='adventcontent'>
          <img src={womanzbra} alt="" />
        </div>
      </div>

      <div id="joinwithzbra" className='page-section'>
        <div className="advent-content">
          <div className='header-section'>
            <h2> PARTICIPE </h2>
            <h2 className='highlight-green'><strong>COM A ZBRA</strong></h2>
          </div>
        </div>
        <JoinWithZbraContent />
      </div>

      <div id="getready" className=''>
        <h2> PREPARE-SE </h2>
        <h2><span><strong>COM ANTECEDÊNCIA</strong></span></h2>
        <h3 className='center-align'>
          Uma coisa importante para começar a participação no Advent of Code é a preparação.
        </h3>
        <GetReadyContent />

      </div>

      <div id="meetzbra" className='page-section'>
        <div className='advent-content'>
          <div className='header-section'>
            <h2> CONHEÇA A ZBRA </h2>
            <h2 className='highlight-green'><strong>E CANDIDATE-SE</strong> </h2>
          </div>
        </div>
        <MeetZbraContent />
      </div>

      <footer className='page-section'>
        <img src={logoZbra} alt="logo zbra" />
        <p> DECIFRANDO O PRESENTE PARA CODIFICAR O FUTURO © ZBRA </p>
        <SocialMedia />
      </footer>
    </div>
  );
}

export default App;
