import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import trott from '../../Image/TROTT.png';

const Home = () => (
  <Link to="/instructions">
    <figure className="logoDiv">
      <img src={trott} alt="LOGO" />
    </figure>
  </Link>
);

export default Home;
