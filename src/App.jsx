import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import MyMap from './components/Map/MyMap';
import RegisterForm from './components/Introduction/RegisterForm';
import LandingPage from './components/LandingPage/LandingPage';
import Rank from './components/Rank/Rank';
import Burger from './components/BurgerMenu/Menu';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Burger />
            <MyMap />
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
          <Route path="/introduction">
            <LandingPage />
          </Route>
          <Route path="/register">
            <RegisterForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
