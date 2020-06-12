import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
import LandingPage from './components/LandingPage/LandingPage';
import Form from './components/Form/Form';
import Sms from './components/Sms_Verif/Sms_Verif';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/landingPage">
            <LandingPage />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/sms_de_verification">
            <Sms />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
