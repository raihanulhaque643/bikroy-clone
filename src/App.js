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
import PostAdForm from './components/PostAdForm';
import AllAds from './components/AllAds';
import AdDetails from './components/AdDetails';

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

      <Route path="/post-ad-form/:category/:subcategory">
      {
        localStorage.getItem('email') ? 
        <PostAdForm /> :
        <Redirect to="/" />
      }
      </Route>

      <Route path="/all-ads">
        <AllAds /> 
      </Route>

      <Route path="/ad-details/:uniqueAdId">
        <AdDetails /> 
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
