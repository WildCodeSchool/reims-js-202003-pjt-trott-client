import React from 'react';
import { Link } from 'react-router-dom';

import './ResultScan.css';

const ResultScan = () => (
  <div className="container_Content">
    <p className='txt_padding'>Le déverrouillage n'est malheureusement pas encore disponible pour les Trottinettes BlaBlaRide !</p>
    <p className='txt_padding'>Tu veux pouvoir Déverouiller leurs Trottinettes sur notre app ? Alors appuies sur le poce bleu !</p>
    <p>#PoceBleu</p>
    <Link to="/register" className='link_unlock'>Dévérouillez</Link>
  </div>
);

export default ResultScan;