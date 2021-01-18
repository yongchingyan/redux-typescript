import React from 'react';
import svglogo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Display } from './features/display/Display';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContent } from './components/Content';

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
      <Display />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;