import React from 'react';
import troot from "../../Image/lime-bordeaux-1-1024x768.jpg";
import { Link } from 'react-router-dom';

const Trottinette1 = () => (
  <div className="container_Content">
    <h1 className="title_troot">Trottinette</h1>
    <img className='Preview_troot' src={troot} alt="gift" />
    <p>Marque : <strong>Lime</strong></p>
    <p>autonomie : <strong>87%</strong></p>
    <p>Prix : <strong>1.9€</strong></p>
    <Link to="/register" className='link_button'>Déverouillez</Link>
  </div>
);

export default Trottinette1;