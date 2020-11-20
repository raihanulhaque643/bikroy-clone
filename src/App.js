import React from 'react';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
