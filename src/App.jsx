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
          <Route path="/StartCreate">
            <StartCreate />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
