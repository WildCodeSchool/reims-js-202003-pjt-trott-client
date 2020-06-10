import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Map from './components/Map/Map';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/map">
            <Map/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
