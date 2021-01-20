import React from 'react';
import { Display } from './features/display/Display';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContent } from './components/Content';

function App() {
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