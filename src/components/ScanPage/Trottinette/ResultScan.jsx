import React from 'react';
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './ResultScan.css';

const ResultScan = () => (
  <Animated className="ctn_animated" animationIn="bounce" animationInDuration='500' animationOut="fadeOut" isVisible={true}>
    <div className="container_Content">
      <Link className='times_style' to="/trott?page=2">
        <FontAwesomeIcon icon={faTimesCircle} />
      </Link>
      <p className='txt_padding'>Le déverrouillage n'est malheureusement pas encore disponible pour les trottinettes BlaBlaRide !</p>
      <p className='txt_padding'>Tu veux pouvoir déverrouiller leurs trottinettes sur notre app ? Alors appuies sur le poce bleu !</p>
      <p className='PoceBleu'>#PoceBleu</p>
      <div className='ctn_link_scan'>
        <Link to="/trott?page=2" className='link_unlock'>retour</Link>
      </div>
    </div>
  </Animated>
);

export default ResultScan;
