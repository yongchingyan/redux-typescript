import React from 'react';
import svglogo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Display } from './features/display/Display';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

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
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
