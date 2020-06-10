import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <Link to="/map">
    <div className="logoDiv">
      <img
        src="https://www.zupimages.net/up/20/24/jw9z.png"
        alt="logo Trott"
        className="logo"
      />
    </div>
  </Link>
);


export default Home;
