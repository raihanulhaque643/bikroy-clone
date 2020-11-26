import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch
} from "react-router-dom";

import Header from './components/Header';
import Showcase from './components/Showcase';
import Body from './components/Body';
import Footer from './components/Footer';
import Authentication from './components/Authentication';
import PostAd from './components/PostAd';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Switch>
      <Route path="/home">
        <Showcase />
        <Body />
      </Route>
      <Route path="/auth">
        <Authentication />
      </Route>
      <Route path="/post-ad">
      {
        localStorage.getItem('email') ? 
        <PostAd /> :
        <Redirect to="/" />
      }
      </Route>
      <Route path="/">
      <Redirect to="/home" />
      </Route>
    </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
