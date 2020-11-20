import React from 'react';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import BodyHeader from './components/BodyHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <BodyHeader />
    </div>
  );
}

export default App;
