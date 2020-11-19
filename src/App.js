import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
    </div>
  );
}

export default App;
