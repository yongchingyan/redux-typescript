import React from 'react';
import svglogo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Display } from './features/display/Display';
import './App.css';
import './css/footer.css';
import './css/header.css';
import logoSmall from './asset/logo-small.png';
import logo from './asset/logo.png';

interface Pos {
  x: number;
  y: number;
}

function App() {

  const pos: Pos = { x:1, y:2 };

  let printPos = (pos: Pos): void => {
    console.log(pos.x, pos.y)
  } 

  printPos(pos);  

  return (
    <div className="App">
      <header id="header-wrapper">
        <img id="header-logo" src={logo} alt="company logo"/>
        <div id="header-auth">
          <button id="signup-button"> Sign up </button>
          <button id="login-button"> Login </button>
        </div>
        <div id="header-nav">
          <ul id="nav-games">
            <li>Home</li>
            <li>RPG</li>
            <li>Arcade</li>
            <li>Brain Games</li>
          </ul>
          <ul id="nav-support">
            <li>Support</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </header>
      <div id="content">
        <Display />
        <div id="content-wrapper"></div>
        <div id="content-wrapper"></div>
      </div>
      <div className="App-header">
        <img src={svglogo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>
      <footer id="footer">
        <div id="footer-wrapper">
          <img src={logoSmall} alt="company-logo-small"/>
          <div>
            <ul>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>The Group</li>
              <li>Affliates</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Information</li>
              <li>Terms & Conditions</li>
              <li>Payment methods</li>
              <li>Bonus Terms</li>
              <li>Responsible Gaming</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
