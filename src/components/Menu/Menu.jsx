import React from 'react';
import './Menu.css';

const Menu = () => (
  <div>
    <h2>Mon profil</h2>
    <div>
      <fieldset>classement</fieldset>
      <fieldset>courses</fieldset>
      <fieldset>km réalisés</fieldset>
      <fieldset>arbres plantés</fieldset>
    </div>
    <div className="ElementBaseline">
      <img className="userIcon" src="https://cdn.onlinewebfonts.com/svg/img_235012.png" alt="usericon" />
      <p className="paragraphBaseline">Mes infos</p>
    </div>
    <div className="ElementBaseline">
      <img className="userIcon" src="https://cdn.onlinewebfonts.com/svg/img_235012.png" alt="usericon" />
      <p className="paragraphBaseline">Historique</p>
    </div>
    <div className="ElementBaseline">
      <img className="userIcon" src="https://cdn.onlinewebfonts.com/svg/img_235012.png" alt="usericon" />
      <p className="paragraphBaseline">Se Déconnecter</p>
    </div>
  </div>
);

export default Menu;
