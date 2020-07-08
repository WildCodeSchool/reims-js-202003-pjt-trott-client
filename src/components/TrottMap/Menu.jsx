import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import User from '../../Image/user.png';
import Gift from '../../Image/gift.png';
import BurgerMenu from '../../Image/menu.png';

function Burger() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu width="100vw" customBurgerIcon={<img src={BurgerMenu} alt="icon" />} className="size">
      <div className="menu_infos">
        <div className="menu_flex">
          <div className="menu_info_1">
            <div>
              <p className="menu_info_important">4</p>
              courses effectués
            </div>
          </div>
          <div className="menu_info_1">
            <p className="menu_info_important">#1</p>
            <div className="menu_info_text">
              Classement général
            </div>
          </div>
          <div className="menu_info_3">
            <p className="menu_info_important">1,2</p>
            Arbres Plantés
          </div>
        </div>
        <div className="user_list">
          <Link className="linkdeco" to="/map/menu">
            <img src={User} alt="user" />
            Mon compte
          </Link>
        </div>
        <div className="user_list">
          Les défis
        </div>
        <div className="user_list">
          <img src={Gift} alt="gift" />
          Parrainage
        </div>
        <div className="user_list">
          Environnement
        </div>
        <div className="user_list">
          Discover
        </div>
      </div>
    </Menu>
  );
}

export default Burger;
