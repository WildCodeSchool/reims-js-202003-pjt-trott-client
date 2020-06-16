import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import MyMap from './components/Map/MyMap';
import Form from './components/Form/Form';
import StartCreate from './components/Introduction/StartCreate';
import Sms from './components/SmsVerif/SmsVerif';
import LandingPage from './components/LandingPage/LandingPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <MyMap />
          </Route>
          <Route path="/introduction">
            <LandingPage />
          </Route>
          <Route path="/register">
            <StartCreate />
          </Route>
          <Route path="/registerForm">
            <Form />
          </Route>
          <Route path="/SmsVerification">
            <Sms />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
