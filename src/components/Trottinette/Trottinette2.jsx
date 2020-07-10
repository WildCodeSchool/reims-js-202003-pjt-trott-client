import React from 'react';
import troot1 from "../../Image/bird.jpg";
import { Link } from 'react-router-dom';

const Trottinette2 = () => (
  <div className="container_Content">
    <h1 className="title_troot">Trottinette</h1>
    <img className='Preview_troot' src={troot1} alt="gift" />
    <p>Marque : <strong>Bird</strong></p>
    <p>Autonomie : <strong>65%</strong></p>
    <p>Prix : <strong>2€</strong></p>
    <Link to="/register" className='link_button'>Déverouillez</Link>
  </div>
);

export default Trottinette2;