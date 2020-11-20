import React from 'react';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Body />
    </div>
  );
}

export default App;
