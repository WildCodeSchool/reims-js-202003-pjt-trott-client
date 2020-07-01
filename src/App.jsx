import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from './components/Home/Home';
import MyMap from './components/Map/MyMap';
import RegisterForm from './components/Introduction/RegisterForm';
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';
import Rank from './components/Rank/Rank';
import HomeLocation from './components/HomeLocation/HomeLocation';
import Burger from './components/BurgerMenu/Menu';

const client = new ApolloClient({
  uri : 'http://flow-api.fluctuo.com/v1?access_token=g8bGqo424KsGKVRw8wxOZ7oGdWmM4lyL',
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <ApolloProvider client={client}>
              <Burger />
              <MyMap />
            </ApolloProvider>
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
          <Route path="/introduction">
            <LandingPage />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/home">
            <HomeLocation/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
