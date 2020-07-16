import React from 'react';
import { Link } from 'react-router-dom';

import trott from '../../Image/TROTT.png';
import Mob from '../../Image/1.png';
import trot from '../../Image/2.png';
import Bike from '../../Image/3.png';

function InstruPageOne() {
  return (
    <div className="bg_instruPageOne">
      <div className="instru_upperBlock">
        <img className="TrottLanding_Logo" src={trott} alt="LOGO" />
        <div className="Text_container">
          <p className="Text_Form Text">Trouve les vehicules disponibles autour de toi avec une seule application</p>
        </div>
        <div className="img_container">
          <img src={trot} alt="" />
          <img src={Bike} alt="" />
          <img src={Mob} alt="" />
        </div>
        <div className="Text_container margin_text">
          <p className="Text_Form Text">Filtre par type de vehicules, prix, marque, autonomie, distance,ect.</p>
        </div>
      </div>
      <div className="linkButton_block">
        <Link className="link_button" to="/instructions?page=2">swipe</Link>
      </div>
    </div>
  );
}

export default InstruPageOne;
