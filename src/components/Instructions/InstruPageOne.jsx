import React from 'react';
import { Link } from 'react-router-dom';

import trott from '../../Image/TROTT.png';
import Mob from '../../Image/1.png';
import trot from '../../Image/2.png';
import Bike from '../../Image/3.png';

const InstruPageOne = () => {
  return (
    <div className='Background_Landing'>
      <img className='TrottLanding_Logo' src={trott} alt="LOGO" />
      <div className='Text_container'>
        <p className='Text_Form Text'>Trouve les vehicules disponibles autour de toi avec une seule application</p>
      </div>
      <div className='Img_container'>
        <img src={trot} alt="" />
        <img src={Bike} alt="" />
        <img src={Mob} alt="" />
      </div>
      <div className='Text_container margin_text'>
        <p className='Text_Form Text'>Filtre par type de vehicules, prix, marque, autonomie, distance,ect.</p>
      </div>
      <div>
        <Link className="link_as_button" to="/instructions?page=2">Swipe</Link>
      </div>
    </div>
  );
}

export default InstruPageOne;
