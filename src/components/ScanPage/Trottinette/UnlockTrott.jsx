import React from 'react';
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './ResultScan.css';

const UnlockTrott = () => (
  <Animated className="ctn_animated" animationIn="bounce" animationInDuration='500' animationOut="fadeOut" isVisible={true}>
    <div className="container_Content">
      <Link className='times_style' to="/trott?page=2">
        <FontAwesomeIcon icon={faTimesCircle} />
      </Link>
      <p className='txt_padding'>Bien joué , tu n'a plus qu'à appuyer sur le bouton "payer" pour dévérouiller la trottinette !</p>
      <p className='txt_padding'> Bientôt tu pourra consulter ton historique et tes scores, mais il faudra d'abord te faire un compte ;) </p>
      <div className='ctn_link_scan'>
        <Link to="/trott?page=2" className='link_unlock'>Payer</Link>
      </div>
    </div>
  </Animated>
);
export default UnlockTrott;
